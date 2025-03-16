// 加载环境变量
require('dotenv').config();

const cookieRefresher = require('./src/utils/cookieRefresher');
const keyManager = require('./src/utils/keyManager');
const config = require('./src/config/config');

// 最小 Cookie 数量
const MIN_COOKIE_COUNT = parseInt(process.env.MIN_COOKIE_COUNT || '2', 10);

// 主函数
async function main() {
  console.log('===== 自动刷新 Cookie 开始 =====');
  console.log(`最小 Cookie 数量: ${MIN_COOKIE_COUNT}`);
  
  try {
    // 获取所有 API Key
    const apiKeys = keyManager.getAllApiKeys();
    
    if (apiKeys.length === 0) {
      console.log('警告: 系统中没有找到任何 API Key');
      
      // 检查环境变量中是否有 API Keys
      const envApiKeys = Object.keys(config.apiKeys);
      if (envApiKeys.length > 0) {
        console.log(`检测到环境变量中有 ${envApiKeys.length} 个 API Key，但尚未加载到系统中`);
        console.log('正在重新初始化 API Keys...');
        
        // 重新初始化 API Keys
        keyManager.initializeApiKeys();
        
        // 重新获取 API Keys
        const refreshedApiKeys = keyManager.getAllApiKeys();
        if (refreshedApiKeys.length > 0) {
          console.log(`成功加载 ${refreshedApiKeys.length} 个 API Key，继续刷新流程`);
          // 继续执行后续刷新逻辑
        } else {
          console.log('初始化后仍未找到 API Key，请检查配置');
          console.log('===== 自动刷新 Cookie 结束 =====');
          return;
        }
      } else {
        console.log('环境变量中也没有配置 API Key，请先添加 API Key');
        console.log('===== 自动刷新 Cookie 结束 =====');
        return;
      }
    }
    
    // 重新获取最新的 API Keys（可能已经通过上面的初始化更新了）
    const updatedApiKeys = keyManager.getAllApiKeys();
    console.log(`系统中共有 ${updatedApiKeys.length} 个 API Key`);
    
    // 检查每个 API Key 是否需要刷新
    let refreshedCount = 0;
    let needRefreshCount = 0;
    
    for (const apiKey of updatedApiKeys) {
      const cookies = keyManager.getAllCookiesForApiKey(apiKey);
      console.log(`API Key: ${apiKey}, Cookie 数量: ${cookies.length}`);
      
      if (cookies.length < MIN_COOKIE_COUNT) {
        needRefreshCount++;
        console.log(`API Key ${apiKey} 的 Cookie 数量不足，需要刷新`);
        
        // 执行刷新
        console.log(`开始自动刷新 Cookie，目标 API Key: ${apiKey}，最小 Cookie 数量: ${MIN_COOKIE_COUNT}`);
        const result = await cookieRefresher.autoRefreshCookies(apiKey);
        
        if (result.success) {
          refreshedCount++;
          console.log(`刷新结果: ${result.message}`);
        } else {
          console.error(`刷新失败: ${result.message}`);
        }
      } else {
        console.log(`API Key ${apiKey} 的 Cookie 数量足够，不需要刷新`);
      }
    }
    
    console.log('===== 自动刷新 Cookie 完成 =====');
    console.log(`共有 ${needRefreshCount} 个 API Key 需要刷新，成功刷新 ${refreshedCount} 个`);
  } catch (error) {
    console.error('自动刷新 Cookie 失败:', error);
    console.log('===== 自动刷新 Cookie 异常结束 =====');
  }
}

// 执行主函数
main().catch(console.error); 