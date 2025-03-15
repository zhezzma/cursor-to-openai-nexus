const fetch = require('node-fetch');

async function testApiKeys() {
  try {
    console.log('测试获取API Keys...');
    const response = await fetch('http://localhost:3010/v1/api-keys');
    
    console.log('响应状态:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP错误: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('获取到的数据:', data);
  } catch (error) {
    console.error('测试失败:', error);
  }
}

testApiKeys(); 