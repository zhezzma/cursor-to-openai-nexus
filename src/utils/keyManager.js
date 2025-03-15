const config = require('../config/config');
const fs = require('fs');
const path = require('path');

// 定义无效cookie的存储文件路径
const INVALID_COOKIES_FILE = path.join(__dirname, '../../data/invalid_cookies.json');
// 定义API Keys的存储文件路径
const API_KEYS_FILE = path.join(__dirname, '../../data/api_keys.json');

// 确保data目录存在
function ensureDataDirExists() {
  const dataDir = path.join(__dirname, '../../data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log('创建data目录成功');
    } catch (err) {
      console.error('创建data目录失败:', err);
    }
  }
}

// 存储API key与Cursor cookie的映射关系
let apiKeyMap = new Map();

// 存储每个API key对应的cookie轮询索引
let rotationIndexes = new Map();

// 存储被标记为无效的cookie
let invalidCookies = new Set();

// 从文件加载无效cookie
function loadInvalidCookiesFromFile() {
  ensureDataDirExists();
  
  try {
    if (fs.existsSync(INVALID_COOKIES_FILE)) {
      const data = fs.readFileSync(INVALID_COOKIES_FILE, 'utf8');
      const cookiesArray = JSON.parse(data);
      
      // 清空当前集合并添加从文件加载的cookie
      invalidCookies.clear();
      cookiesArray.forEach(cookie => invalidCookies.add(cookie));
      
      console.log(`从文件加载了 ${cookiesArray.length} 个无效cookie`);
    } else {
      console.log('无效cookie文件不存在，将创建新文件');
      saveInvalidCookiesToFile();
    }
  } catch (err) {
    console.error('加载无效cookie文件失败:', err);
    // 如果加载失败，尝试创建新文件
    saveInvalidCookiesToFile();
  }
}

// 将无效cookie保存到文件
function saveInvalidCookiesToFile() {
  ensureDataDirExists();
  
  try {
    const cookiesArray = Array.from(invalidCookies);
    fs.writeFileSync(INVALID_COOKIES_FILE, JSON.stringify(cookiesArray, null, 2), 'utf8');
    console.log(`已将 ${cookiesArray.length} 个无效cookie保存到文件`);
  } catch (err) {
    console.error('保存无效cookie文件失败:', err);
  }
}

// 从文件加载API Keys
function loadApiKeysFromFile() {
  ensureDataDirExists();
  
  try {
    if (fs.existsSync(API_KEYS_FILE)) {
      const data = fs.readFileSync(API_KEYS_FILE, 'utf8');
      let apiKeysObj;
      
      try {
        apiKeysObj = JSON.parse(data);
      } catch (parseErr) {
        console.error('解析API Keys文件失败:', parseErr);
        
        // 尝试修复可能的JSON格式问题
        console.log('尝试修复JSON格式...');
        const fixedData = data.replace(/,(\s*[\]}])/g, '$1'); // 移除尾随逗号
        try {
          apiKeysObj = JSON.parse(fixedData);
          console.log('JSON修复成功');
          
          // 保存修复后的内容
          fs.writeFileSync(API_KEYS_FILE, JSON.stringify(apiKeysObj, null, 2), 'utf8');
        } catch (fixErr) {
          console.error('修复JSON格式失败:', fixErr);
          return false;
        }
      }
      
      // 清空当前映射
      apiKeyMap.clear();
      rotationIndexes.clear();
      
      // 添加从文件加载的API Keys
      for (const [apiKey, cookies] of Object.entries(apiKeysObj)) {
        if (Array.isArray(cookies)) {
          apiKeyMap.set(apiKey, cookies);
          rotationIndexes.set(apiKey, 0);
        } else {
          console.error(`API Key ${apiKey} 的cookies不是数组，跳过`);
        }
      }
      
      console.log(`从文件加载了 ${Object.keys(apiKeysObj).length} 个API Key`);
      return true;
    } else {
      console.log('API Keys文件不存在，将使用配置中的API Keys');
      return false;
    }
  } catch (err) {
    console.error('加载API Keys文件失败:', err);
    return false;
  }
}

// 将API Keys保存到文件
function saveApiKeysToFile() {
  ensureDataDirExists();
  
  try {
    // 将Map转换为普通对象
    const apiKeysObj = {};
    for (const [apiKey, cookies] of apiKeyMap.entries()) {
      apiKeysObj[apiKey] = cookies;
    }
    
    // 使用JSON.stringify时避免特殊字符处理问题
    const jsonString = JSON.stringify(apiKeysObj, null, 2);
    fs.writeFileSync(API_KEYS_FILE, jsonString, 'utf8');
    console.log(`已将 ${Object.keys(apiKeysObj).length} 个API Key保存到文件`);
    
    // 验证保存的内容
    try {
      const savedContent = fs.readFileSync(API_KEYS_FILE, 'utf8');
      const parsedContent = JSON.parse(savedContent);
      
      // 检查是否有cookie被截断
      let allValid = true;
      for (const [apiKey, savedCookies] of Object.entries(parsedContent)) {
        const originalCookies = apiKeyMap.get(apiKey) || [];
        
        if (savedCookies.length !== originalCookies.length) {
          console.error(`警告: API Key ${apiKey} 的cookie数量不匹配，原始: ${originalCookies.length}, 保存后: ${savedCookies.length}`);
          allValid = false;
          continue;
        }
        
        for (let i = 0; i < savedCookies.length; i++) {
          if (savedCookies[i] !== originalCookies[i]) {
            console.error(`警告: API Key ${apiKey} 的cookie[${i}]被截断或修改`);
            console.error(`原始: ${originalCookies[i]}`);
            console.error(`保存后: ${savedCookies[i]}`);
            allValid = false;
          }
        }
      }
      
      if (allValid) {
        console.log('验证通过: 所有cookie都被完整保存');
      } else {
        console.error('验证失败: 部分cookie可能被截断或修改');
      }
    } catch (verifyErr) {
      console.error('验证保存内容时出错:', verifyErr);
    }
  } catch (err) {
    console.error('保存API Keys文件失败:', err);
  }
}

// 初始化API key映射
function initializeApiKeys() {
    console.log('开始初始化API Keys...');
    
    // 尝试从文件加载API Keys
    const loadedFromFile = loadApiKeysFromFile();
    
    // 如果从文件加载失败，则从配置中加载
    if (!loadedFromFile) {
      // 从配置中加载API key映射
      const configApiKeys = config.apiKeys;
      console.log('配置中的API Keys:', configApiKeys);
      
      // 清空现有映射
      apiKeyMap.clear();
      rotationIndexes.clear();
      
      for (const [apiKey, cookieValue] of Object.entries(configApiKeys)) {
          console.log(`处理API Key: ${apiKey}, Cookie值:`, cookieValue);
          
          if (typeof cookieValue === 'string') {
              // 单个cookie值
              apiKeyMap.set(apiKey, [cookieValue]);
              console.log(`设置单个Cookie: ${apiKey} -> [${cookieValue}]`);
          } else if (Array.isArray(cookieValue)) {
              // 多个cookie值数组
              apiKeyMap.set(apiKey, cookieValue);
              console.log(`设置多个Cookie: ${apiKey} -> [${cookieValue.join(', ')}]`);
          }
          
          // 初始化轮询索引
          rotationIndexes.set(apiKey, 0);
      }
      
      // 保存初始API Keys到文件
      saveApiKeysToFile();
    }
    
    console.log('API Keys初始化完成，当前映射:');
    for (const [key, value] of apiKeyMap.entries()) {
        console.log(`${key} -> [${value.join(', ')}]`);
    }
    
    // 加载无效cookie
    loadInvalidCookiesFromFile();
    
    // 从API Key中移除已知的无效cookie
    removeInvalidCookiesFromApiKeys();
}

// 从所有API Key中移除已知的无效cookie
function removeInvalidCookiesFromApiKeys() {
    console.log('开始从API Keys中移除无效cookie...');
    let totalRemoved = 0;
    
    for (const [apiKey, cookies] of apiKeyMap.entries()) {
        const initialLength = cookies.length;
        
        // 过滤掉无效的cookie
        const filteredCookies = cookies.filter(cookie => !invalidCookies.has(cookie));
        
        // 如果有cookie被移除，更新API Key的cookie列表
        if (filteredCookies.length < initialLength) {
            const removedCount = initialLength - filteredCookies.length;
            totalRemoved += removedCount;
            
            apiKeyMap.set(apiKey, filteredCookies);
            rotationIndexes.set(apiKey, 0);
            
            console.log(`从API Key ${apiKey} 中移除了 ${removedCount} 个无效cookie，剩余 ${filteredCookies.length} 个`);
        }
    }
    
    console.log(`总共从API Keys中移除了 ${totalRemoved} 个无效cookie`);
    
    // 如果有cookie被移除，保存更新后的API Keys
    if (totalRemoved > 0) {
        saveApiKeysToFile();
    }
}

// 添加或更新API key映射
function addOrUpdateApiKey(apiKey, cookieValues) {
    if (!Array.isArray(cookieValues)) {
        cookieValues = [cookieValues];
    }
    
    // 过滤掉已知的无效cookie
    const validCookies = cookieValues.filter(cookie => !invalidCookies.has(cookie));
    
    if (validCookies.length < cookieValues.length) {
        console.log(`API Key ${apiKey} 中有 ${cookieValues.length - validCookies.length} 个无效cookie被过滤`);
    }
    
    apiKeyMap.set(apiKey, validCookies);
    rotationIndexes.set(apiKey, 0);
    
    // 保存更新后的API Keys
    saveApiKeysToFile();
}

// 删除API key映射
function removeApiKey(apiKey) {
    apiKeyMap.delete(apiKey);
    rotationIndexes.delete(apiKey);
    
    // 保存更新后的API Keys
    saveApiKeysToFile();
}

// 获取API key对应的cookie值（根据轮询策略）
function getCookieForApiKey(apiKey, strategy = config.defaultRotationStrategy) {
    // 如果API key不存在，则直接返回API key本身（向后兼容）
    if (!apiKeyMap.has(apiKey)) {
        return apiKey;
    }
    
    const cookies = apiKeyMap.get(apiKey);
    
    if (!cookies || cookies.length === 0) {
        return apiKey;
    }
    
    if (cookies.length === 1) {
        return cookies[0];
    }
    
    // 根据策略选择cookie
    if (strategy === 'random') {
        // 随机策略
        const randomIndex = Math.floor(Math.random() * cookies.length);
        return cookies[randomIndex];
    } else {
        // 轮询策略（round-robin）
        let currentIndex = rotationIndexes.get(apiKey) || 0;
        const cookie = cookies[currentIndex];
        
        // 更新索引
        currentIndex = (currentIndex + 1) % cookies.length;
        rotationIndexes.set(apiKey, currentIndex);
        
        return cookie;
    }
}

// 获取所有API key
function getAllApiKeys() {
    return Array.from(apiKeyMap.keys());
}

// 获取API key对应的所有cookie
function getAllCookiesForApiKey(apiKey) {
    return apiKeyMap.get(apiKey) || [];
}

// 从API key的cookie列表中移除特定cookie
function removeCookieFromApiKey(apiKey, cookieToRemove) {
    if (!apiKeyMap.has(apiKey)) {
        console.log(`API Key ${apiKey} 不存在，无法移除cookie`);
        return false;
    }
    
    const cookies = apiKeyMap.get(apiKey);
    const initialLength = cookies.length;
    
    // 过滤掉要移除的cookie
    const filteredCookies = cookies.filter(cookie => cookie !== cookieToRemove);
    
    // 如果长度没变，说明没有找到要移除的cookie
    if (filteredCookies.length === initialLength) {
        console.log(`未找到要移除的cookie: ${cookieToRemove}`);
        return false;
    }
    
    // 更新cookie列表
    apiKeyMap.set(apiKey, filteredCookies);
    
    // 重置轮询索引
    rotationIndexes.set(apiKey, 0);
    
    // 将移除的cookie添加到无效cookie集合中
    invalidCookies.add(cookieToRemove);
    
    // 保存无效cookie到文件
    saveInvalidCookiesToFile();
    
    // 保存更新后的API Keys
    saveApiKeysToFile();
    
    console.log(`已从API Key ${apiKey} 中移除cookie: ${cookieToRemove}`);
    console.log(`剩余cookie数量: ${filteredCookies.length}`);
    
    return true;
}

// 获取所有被标记为无效的cookie
function getInvalidCookies() {
    return invalidCookies;
}

// 清除特定的无效cookie记录
function clearInvalidCookie(cookie) {
    const result = invalidCookies.delete(cookie);
    
    if (result) {
        // 保存更新后的无效cookie到文件
        saveInvalidCookiesToFile();
    }
    
    return result;
}

// 清除所有无效cookie记录
function clearAllInvalidCookies() {
    invalidCookies.clear();
    
    // 保存更新后的无效cookie到文件
    saveInvalidCookiesToFile();
    
    return true;
}

// 初始化
initializeApiKeys();

module.exports = {
    addOrUpdateApiKey,
    removeApiKey,
    getCookieForApiKey,
    getAllApiKeys,
    getAllCookiesForApiKey,
    initializeApiKeys,
    removeCookieFromApiKey,
    getInvalidCookies,
    clearInvalidCookie,
    clearAllInvalidCookies,
    loadInvalidCookiesFromFile,
    saveInvalidCookiesToFile,
    loadApiKeysFromFile,
    saveApiKeysToFile
}; 