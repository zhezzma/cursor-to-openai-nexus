#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 创建交互式命令行界面
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 配置模板
const ENV_TEMPLATE = `# 服务端口
PORT=3010

# 日志格式 (tiny, combined, common, dev, short)
MORGAN_FORMAT=tiny

# API Key与Cookie映射关系 (JSON格式)
# 格式: {"自定义API Key": "Cookie值"} 或 {"自定义API Key": ["Cookie值1", "Cookie值2"]}
API_KEYS={API_KEYS_PLACEHOLDER}

# 轮询策略 (random 或 round-robin)
ROTATION_STRATEGY=round-robin

# 自动刷新Cookie设置
# 是否启用自动刷新Cookie (true 或 false)
ENABLE_AUTO_REFRESH=true

# 自动刷新Cookie的定时规则 (Cron表达式)
# 默认每6小时执行一次
REFRESH_CRON=0 */6 * * *

# 每个API Key最小Cookie数量
# 当Cookie数量低于此值时，会自动尝试刷新
MIN_COOKIE_COUNT=1000

# GitHub 仓库信息
GITHUB_OWNER={GITHUB_OWNER_PLACEHOLDER}
GITHUB_REPO=Cursor-Register-fix
# GitHub Token (用于从GitHub Actions下载Artifact)
# 需要有repo权限
GITHUB_TOKEN={GITHUB_TOKEN_PLACEHOLDER}

# GitHub Actions 工作流ID
# 用于触发工作流程
GITHUB_WORKFLOW_ID=cursor_register.yml

# 是否自动触发工作流
# 设置为true时，会自动触发工作流而不是仅获取最新结果
TRIGGER_WORKFLOW=true

# 工作流参数设置
# 注册账号数量
REGISTER_NUMBER=1
# 最大并发工作线程数
REGISTER_MAX_WORKERS=1
# 邮箱服务器类型 (TempEmail 或 IMAP)
REGISTER_EMAIL_SERVER=IMAP
# 是否将账号令牌注入到OneAPI (true 或 false)
REGISTER_INGEST_TO_ONEAPI=false
# 是否上传账号信息到Artifact (true 或 false)
REGISTER_UPLOAD_ARTIFACT=true
# 是否从config.yaml读取邮箱配置 (true 或 false)
REGISTER_USE_CONFIG_FILE=false
# 邮箱配置JSON字符串（仅在REGISTER_USE_CONFIG_FILE=false时有效）
REGISTER_EMAIL_CONFIGS={EMAIL_CONFIGS_PLACEHOLDER}

# Cursor校验和 (可选)
# x-cursor-checksum=xxxxxxxx 
`;

// 提示信息
console.log('===== Cursor-To-OpenAI 环境配置助手 =====');
console.log('这个脚本将帮助你配置必要的环境变量\n');

// 应用密码说明
function printAppPasswordInstructions() {
  console.log('\n===== 如何创建谷歌应用密码 =====');
  console.log('1. 访问 https://myaccount.google.com/security');
  console.log('2. 在"登录Google"部分，点击"两步验证"');
  console.log('   (如果未启用两步验证，需要先启用)');
  console.log('3. 在页面底部找到"应用密码"，点击进入');
  console.log('4. 在"选择应用"下拉菜单中选择"其他(自定义名称)"');
  console.log('5. 输入一个名称，例如"Cursor注册"');
  console.log('6. 点击"生成"');
  console.log('7. 复制生成的16位应用密码（格式如：xxxx xxxx xxxx xxxx）');
  console.log('8. 在下面的提示中输入这个密码');
  console.log('注意: 应用密码只会显示一次，请务必保存好\n');
}

// 收集配置信息
async function collectConfig() {
  return new Promise((resolve) => {
    const config = {
      apiKeys: {},
      githubOwner: '',
      githubToken: '',
      emailConfigs: []
    };

    // 获取GitHub用户名
    rl.question('请输入你的GitHub用户名: ', (githubOwner) => {
      config.githubOwner = githubOwner;

      // 获取GitHub Token
      rl.question('请输入你的GitHub Token (具有repo权限): ', (githubToken) => {
        config.githubToken = githubToken;

        // 询问API Key
        rl.question('请输入自定义的API Key (不含sk-前缀，将自动添加): ', (apiKey) => {
          const fullApiKey = apiKey.startsWith('sk-') ? apiKey : `sk-${apiKey}`;
          
          // 初始化为空数组
          config.apiKeys[fullApiKey] = [];

          // 询问Gmail配置
          printAppPasswordInstructions();

          function askForGmailAccount() {
            rl.question('\n是否添加Gmail账号用于注册? (y/n): ', (answer) => {
              if (answer.toLowerCase() === 'y') {
                rl.question('请输入Gmail地址: ', (email) => {
                  rl.question('请输入Gmail的应用密码 (不是邮箱密码): ', (password) => {
                    // 添加Email配置
                    config.emailConfigs.push({
                      email: email,
                      imap_server: "imap.gmail.com",
                      imap_port: 993,
                      username: email,
                      password: password
                    });

                    // 询问是否添加下一个
                    rl.question('是否继续添加另一个Gmail账号? (y/n): ', (continueAnswer) => {
                      if (continueAnswer.toLowerCase() === 'y') {
                        askForGmailAccount();
                      } else {
                        resolve(config);
                      }
                    });
                  });
                });
              } else {
                console.log('\n⚠️ 警告: 未添加Gmail账号，自动刷新功能可能无法正常工作');
                console.log('你可以稍后在.env文件中手动配置REGISTER_EMAIL_CONFIGS\n');
                resolve(config);
              }
            });
          }

          askForGmailAccount();
        });
      });
    });
  });
}

// 生成配置文件
function generateEnvFile(config) {
  try {
    // 准备API Keys
    const apiKeysJson = JSON.stringify(config.apiKeys);
    
    // 准备邮箱配置
    const emailConfigsJson = JSON.stringify(config.emailConfigs);
    
    // 替换模板中的占位符
    let envContent = ENV_TEMPLATE
      .replace('{API_KEYS_PLACEHOLDER}', apiKeysJson)
      .replace('{GITHUB_OWNER_PLACEHOLDER}', config.githubOwner)
      .replace('{GITHUB_TOKEN_PLACEHOLDER}', config.githubToken)
      .replace('{EMAIL_CONFIGS_PLACEHOLDER}', emailConfigsJson);
    
    // 写入.env文件
    const envPath = path.join(process.cwd(), '.env');
    fs.writeFileSync(envPath, envContent, 'utf8');
    
    console.log(`\n✅ 配置文件已生成: ${envPath}`);
    
    // 检查data目录
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log(`✅ 创建数据目录: ${dataDir}`);
    }
    
    return true;
  } catch (error) {
    console.error('\n❌ 生成配置文件时出错:', error.message);
    return false;
  }
}

// 主函数
async function main() {
  try {
    const config = await collectConfig();
    
    if (generateEnvFile(config)) {
      console.log('\n===== 配置完成 =====');
      console.log('你可以使用以下命令启动服务:');
      console.log('  npm start');
      console.log('\n如需手动触发Cookie刷新:');
      console.log('  node auto-refresh-cookies.js --force');
    }
  } catch (error) {
    console.error('\n❌ 配置过程中出错:', error.message);
  } finally {
    rl.close();
  }
}

// 运行主函数
main(); 