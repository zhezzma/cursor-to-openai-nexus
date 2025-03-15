// 加载环境变量
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cron = require('node-cron');
const app = express();

const config = require('./config/config');
const routes = require('./routes');
const keyManager = require('./utils/keyManager');
const cookieRefresher = require('./utils/cookieRefresher');

// 确保keyManager正确初始化
console.log('初始化keyManager...');
keyManager.initializeApiKeys();
console.log('API Keys配置:', config.apiKeys);
console.log('keyManager初始化完成');

// 添加CORS支持
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    next();
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(morgan(process.env.MORGAN_FORMAT ?? 'tiny'));

// 添加静态文件支持
app.use(express.static(path.join(__dirname, 'public')));

// 添加根路由，显示管理页面
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/", routes)

// 设置定时任务，自动刷新 Cookie
if (process.env.ENABLE_AUTO_REFRESH === 'true') {
    const cronSchedule = process.env.REFRESH_CRON || '0 */6 * * *'; // 默认每6小时执行一次
    const minCookieCount = parseInt(process.env.MIN_COOKIE_COUNT || '2', 10);
    
    console.log(`启用自动刷新 Cookie，定时规则: ${cronSchedule}，最小 Cookie 数量: ${minCookieCount}`);
    
    cron.schedule(cronSchedule, async () => {
        console.log('开始执行定时刷新 Cookie 任务...');
        
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
                
                if (cookies.length < minCookieCount) {
                    needRefreshCount++;
                    console.log(`API Key ${apiKey} 的 Cookie 数量不足，需要刷新`);
                    
                    // 刷新 Cookie
                    const result = await cookieRefresher.autoRefreshCookies(apiKey, minCookieCount);
                    console.log(`刷新结果: ${result.message}`);
                    
                    if (result.success && result.refreshed > 0) {
                        refreshedCount++;
                    }
                } else {
                    console.log(`API Key ${apiKey} 的 Cookie 数量足够，不需要刷新`);
                }
            }
            
            console.log(`定时刷新 Cookie 任务完成，共有 ${needRefreshCount} 个 API Key 需要刷新，成功刷新 ${refreshedCount} 个`);
        } catch (error) {
            console.error('定时刷新 Cookie 任务失败:', error);
        }
    });
} else {
    console.log('未启用自动刷新 Cookie，如需启用请设置环境变量 ENABLE_AUTO_REFRESH=true');
}

app.listen(config.port, () => {
    console.log(`The server listens port: ${config.port}`);
});
