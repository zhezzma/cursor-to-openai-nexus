// 解析API Keys环境变量
let apiKeys = {};
try {
    if (process.env.API_KEYS) {
        console.log('从环境变量加载API Keys:', process.env.API_KEYS);
        apiKeys = JSON.parse(process.env.API_KEYS);
        console.log('解析后的API Keys:', apiKeys);
    } else {
        console.log('环境变量API_KEYS未设置');
    }
} catch (error) {
    console.error('解析API_KEYS环境变量失败:', error);
}

module.exports = {
    port: process.env.PORT || 3010,
    apiKeys: apiKeys,
    defaultRotationStrategy: process.env.ROTATION_STRATEGY || 'round-robin',
};
