const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/**
 * 从CSV文件中提取完整的cookie
 * @param {string} csvFilePath - CSV文件路径
 * @returns {Promise<string[]>} - 提取到的cookie数组
 */
async function extractCookiesFromCsv(csvFilePath) {
  return new Promise((resolve, reject) => {
    try {
      // 检查文件是否存在
      if (!fs.existsSync(csvFilePath)) {
        console.error(`CSV文件不存在: ${csvFilePath}`);
        return resolve([]);
      }

      // 读取文件内容
      const fileContent = fs.readFileSync(csvFilePath, 'utf8');
      console.log(`文件内容前200个字符: ${fileContent.substring(0, 200)}`);

      // 检查文件是否为空
      if (!fileContent || fileContent.trim() === '') {
        console.error('CSV文件为空');
        return resolve([]);
      }

      // 检查文件内容是否包含关键字
      const hasTokenKeyword = fileContent.includes('token');
      const hasUserPrefix = fileContent.includes('user_');
      console.log(`文件包含"token"关键字: ${hasTokenKeyword}`);
      console.log(`文件包含"user_"前缀: ${hasUserPrefix}`);

      // 如果文件包含user_前缀，尝试直接从内容中提取cookie
      if (hasUserPrefix) {
        const cookies = extractCookiesFromText(fileContent);
        if (cookies.length > 0) {
          console.log(`直接从文件内容中提取到 ${cookies.length} 个Cookie`);
          return resolve(cookies);
        }
      }

      // 使用csv-parser解析CSV文件
      const cookies = [];
      const possibleTokenFields = ['token', 'cookie', 'value', 'Token', 'Cookie', 'Value'];
      
      fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
          // 检查所有可能的字段名
          for (const field of possibleTokenFields) {
            if (row[field] && row[field].includes('user_')) {
              cookies.push(row[field]);
              break;
            }
          }
          
          // 如果没有找到预定义的字段，遍历所有字段
          if (cookies.length === 0) {
            for (const field in row) {
              if (row[field] && typeof row[field] === 'string' && row[field].includes('user_')) {
                cookies.push(row[field]);
                break;
              }
            }
          }
        })
        .on('end', () => {
          console.log(`从CSV解析中提取到 ${cookies.length} 个Cookie`);
          
          // 如果通过CSV解析没有找到cookie，尝试按行读取
          if (cookies.length === 0) {
            console.log('尝试按行读取文件...');
            const lines = fileContent.split('\n');
            for (const line of lines) {
              if (line.includes('user_')) {
                const extractedCookies = extractCookiesFromText(line);
                extractedCookies.forEach(cookie => {
                  if (!cookies.includes(cookie)) {
                    cookies.push(cookie);
                  }
                });
              }
            }
            console.log(`按行读取后提取到 ${cookies.length} 个Cookie`);
          }
          
          // 如果仍然没有找到cookie，尝试从整个文件内容中提取
          if (cookies.length === 0) {
            console.log('尝试从整个文件内容中提取Cookie...');
            const extractedCookies = extractCookiesFromText(fileContent);
            extractedCookies.forEach(cookie => {
              if (!cookies.includes(cookie)) {
                cookies.push(cookie);
              }
            });
            console.log(`从整个文件内容中提取到 ${cookies.length} 个Cookie`);
          }
          
          // 验证提取的cookie是否完整
          const validatedCookies = validateCookies(cookies);
          
          resolve(validatedCookies);
        })
        .on('error', (error) => {
          console.error('解析CSV文件时出错:', error);
          // 如果解析出错，尝试从整个文件内容中提取
          const extractedCookies = extractCookiesFromText(fileContent);
          console.log(`解析出错后从文件内容中提取到 ${extractedCookies.length} 个Cookie`);
          resolve(validateCookies(extractedCookies));
        });
    } catch (error) {
      console.error('提取Cookie时出错:', error);
      reject(error);
    }
  });
}

/**
 * 从文本中提取cookie
 * @param {string} text - 要提取cookie的文本
 * @returns {string[]} - 提取到的cookie数组
 */
function extractCookiesFromText(text) {
  const cookies = [];
  
  // 使用正则表达式匹配user_开头的cookie
  const regex = /user_[a-zA-Z0-9%]+%3A%3A[a-zA-Z0-9%\.\_\-]+/g;
  const matches = text.match(regex);
  
  if (matches) {
    matches.forEach(match => {
      if (!cookies.includes(match)) {
        cookies.push(match);
      }
    });
  }
  
  return cookies;
}

/**
 * 验证cookie是否完整
 * @param {string[]} cookies - 要验证的cookie数组
 * @returns {string[]} - 验证后的cookie数组
 */
function validateCookies(cookies) {
  return cookies.map(cookie => {
    // 检查cookie是否包含JWT的三个部分（header.payload.signature）
    if (cookie.includes('%3A%3A')) {
      const parts = cookie.split('%3A%3A');
      if (parts.length === 2) {
        const jwt = parts[1];
        // 检查JWT是否包含两个点（表示三个部分）
        if (jwt.includes('.') && jwt.split('.').length === 3) {
          return cookie; // cookie完整
        } else {
          console.warn(`检测到不完整的JWT: ${cookie}`);
          // 尝试修复不完整的JWT（如果可能）
          return cookie;
        }
      }
    }
    return cookie;
  });
}

module.exports = {
  extractCookiesFromCsv
}; 