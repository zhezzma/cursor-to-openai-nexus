const fetch = require('node-fetch');

async function testGetCookies() {
  try {
    // 首先添加一个测试API Key
    console.log('添加测试API Key...');
    await fetch('http://localhost:3010/v1/api-keys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: 'test-key-for-cookies',
        cookieValues: ['test-cookie-1', 'test-cookie-2'],
      }),
    });
    
    // 然后获取这个API Key的Cookie值
    console.log('\n测试获取特定API Key的Cookie值...');
    const response = await fetch('http://localhost:3010/v1/api-keys/test-key-for-cookies/cookies');
    
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

testGetCookies(); 