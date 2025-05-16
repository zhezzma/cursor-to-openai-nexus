#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const dotenv = require('dotenv');

// 创建交互式命令行界面
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 配置模板
const ENV_TEMPLATE = `# 是否使用TLS代理 (true 或 false)
USE_TLS_PROXY=true

# 代理服务器平台
# 可选值: auto, windows_x64, linux_x64, android_arm64
# auto: 自动检测平台
# windows_x64: Windows 64位
# linux_x64: Linux 64位
# android_arm64: 安卓ARM 64位
PROXY_PLATFORM=auto

# 是否使用其它接口 (true 或 false)
USE_OTHERS=true
`;

// 提示信息
console.log('===== Cursor-To-OpenAI 环境配置助手 =====');
console.log('这个脚本将帮助你配置必要的环境变量\n');

// 从现有.env文件加载配置
function loadExistingConfig() {
  const envPath = path.join(process.cwd(), '.env');
  let existingConfig = {
    useTlsProxy: true,
    proxyPlatform: 'auto',
    useOthers: true
  };
  
  if (fs.existsSync(envPath)) {
    console.log('发现现有的.env配置文件，将加载现有设置作为默认值');
    console.log('提示: 直接按回车将保留现有设置不变\n');
    
    try {
      // 加载.env文件
      const envConfig = dotenv.parse(fs.readFileSync(envPath));
      
      // 提取TLS代理配置
      if (envConfig.USE_TLS_PROXY !== undefined) {
        existingConfig.useTlsProxy = envConfig.USE_TLS_PROXY === 'true';
      }
      
      // 提取代理服务器平台
      if (envConfig.PROXY_PLATFORM) {
        existingConfig.proxyPlatform = envConfig.PROXY_PLATFORM;
      }

      // 提取是否使用其它接口
      if (envConfig.USE_OTHERS !== undefined) {
        existingConfig.useOthers = envConfig.USE_OTHERS === 'true';
      }
      
      console.log('成功加载现有配置');
    } catch (error) {
      console.error('加载现有配置时出错:', error.message);
      console.log('将使用默认设置');
    }
  } else {
    console.log('未找到现有的.env配置文件，将创建新的配置文件');
  }
  
  return existingConfig;
}

// 提示用户输入，带有默认值
function promptWithDefault(question, defaultValue) {
  return new Promise((resolve) => {
    const defaultText = defaultValue ? ` [${defaultValue}]` : '';
    rl.question(`${question}${defaultText}: `, (answer) => {
      // 如果用户只按了回车，使用默认值
      resolve(answer.trim() || defaultValue || '');
    });
  });
}

// 收集配置信息
async function collectConfig() {
  // 加载现有配置
  const existingConfig = loadExistingConfig();
  
  const config = {
    useTlsProxy: existingConfig.useTlsProxy,
    proxyPlatform: existingConfig.proxyPlatform,
    useOthers: existingConfig.useOthers
  };

  // 询问是否使用TLS代理
  const useTlsProxyPrompt = `是否使用TLS代理服务器? (y/n)`;
  const defaultUseTlsProxy = existingConfig.useTlsProxy ? 'y' : 'n';
  const useTlsProxyAnswer = await promptWithDefault(useTlsProxyPrompt, defaultUseTlsProxy);
  config.useTlsProxy = useTlsProxyAnswer.toLowerCase() === 'y';

  if (config.useTlsProxy) {
    // 询问代理服务器平台
    console.log('\n代理服务器平台选项:');
    console.log('- auto: 自动检测当前系统平台');
    console.log('- windows_x64: Windows 64位');
    console.log('- linux_x64: Linux 64位');
    console.log('- android_arm64: 安卓ARM 64位');
    
    const proxyPlatformPrompt = `选择代理服务器平台`;
    const defaultProxyPlatform = existingConfig.proxyPlatform || 'auto';
    config.proxyPlatform = await promptWithDefault(proxyPlatformPrompt, defaultProxyPlatform);
  }

  // 询问是否使用其它接口
  const useOthersPrompt = `是否使用其它接口? (y/n)`;
  const defaultUseOthers = existingConfig.useOthers ? 'y' : 'n';
  const useOthersAnswer = await promptWithDefault(useOthersPrompt, defaultUseOthers);
  config.useOthers = useOthersAnswer.toLowerCase() === 'y';

  return config;
}

// 生成配置文件
function generateEnvFile(config) {
  try {
    // 替换模板中的配置
    let envContent = ENV_TEMPLATE;
    
    // 更新TLS代理配置
    envContent = envContent.replace('USE_TLS_PROXY=true', `USE_TLS_PROXY=${config.useTlsProxy}`);
    
    // 更新代理服务器平台
    envContent = envContent.replace('PROXY_PLATFORM=auto', `PROXY_PLATFORM=${config.proxyPlatform}`);
    
    // 更新是否使用其它接口
    envContent = envContent.replace('USE_OTHERS=true', `USE_OTHERS=${config.useOthers}`);
    
    // 写入.env文件
    const envPath = path.join(process.cwd(), '.env');
    
    // 检查是否存在备份文件
    const backupPath = path.join(process.cwd(), '.env.backup');
    if (fs.existsSync(envPath)) {
      // 创建备份
      fs.copyFileSync(envPath, backupPath);
      console.log(`\n✅ 已创建原配置文件备份: ${backupPath}`);
    }
    
    fs.writeFileSync(envPath, envContent, 'utf8');
    console.log(`\n✅ 配置文件已生成: ${envPath}`);
    
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
      
      // 显示TLS代理配置信息
      console.log(`\n当前TLS代理配置:`);
      console.log(`- 是否启用TLS代理: ${config.useTlsProxy ? '是' : '否'}`);
      if (config.useTlsProxy) {
        console.log(`- 代理服务器平台: ${config.proxyPlatform}`);
      }
      console.log('你可以在.env文件中修改USE_TLS_PROXY和PROXY_PLATFORM设置');

      // 显示是否使用其它接口配置信息
      console.log(`\n当前是否使用其它接口: ${config.useOthers ? '是' : '否'}`);
      console.log('你可以在.env文件中修改USE_OTHERS设置');
    }
  } catch (error) {
    console.error('\n❌ 配置过程中出错:', error.message);
  } finally {
    rl.close();
  }
}

// 运行主函数
main(); 