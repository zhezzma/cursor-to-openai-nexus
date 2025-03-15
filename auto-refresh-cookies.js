// 加载环境变量
require('dotenv').config();

const cookieRefresher = require('./src/utils/cookieRefresher');
const keyManager = require('./src/utils/keyManager');

// 最小 Cookie 数量
const MIN_COOKIE_COUNT = process.env.MIN_COOKIE_COUNT || 2;

// 主函数
async function main() {
  console.log('===== 自动刷新 Cookie 开始 =====');
  console.log(`最小 Cookie 数量: ${MIN_COOKIE_COUNT}`);
  
  try {
    // 获取所有 API Key
    const apiKeys = keyManager.getAllApiKeys();
    console.log(`系统中共有 ${apiKeys.length} 个 API Key`);
    
    if (apiKeys.length === 0) {
      console.log('没有找到 API Key，请先添加 API Key');
      return;
    }
    
    // 检查每个 API Key 是否需要刷新
    let refreshedCount = 0;
    let needRefreshCount = 0;
    
    for (const apiKey of apiKeys) {
      const cookies = keyManager.getAllCookiesForApiKey(apiKey);
      console.log(`API Key: ${apiKey}, Cookie 数量: ${cookies.length}`);
      
      if (cookies.length < MIN_COOKIE_COUNT) {
        needRefreshCount++;
        console.log(`API Key ${apiKey} 的 Cookie 数量不足，需要刷新`);
        
        // 刷新 Cookie
        const result = await cookieRefresher.autoRefreshCookies(apiKey, MIN_COOKIE_COUNT);
        console.log(`刷新结果: ${result.message}`);
        
        if (result.success && result.refreshed > 0) {
          refreshedCount++;
        }
      } else {
        console.log(`API Key ${apiKey} 的 Cookie 数量足够，不需要刷新`);
      }
    }
    
    console.log(`===== 自动刷新 Cookie 完成 =====`);
    console.log(`共有 ${needRefreshCount} 个 API Key 需要刷新，成功刷新 ${refreshedCount} 个`);
  } catch (error) {
    console.error('自动刷新 Cookie 失败:', error);
  }
}

// 执行主函数
main().catch(console.error); 