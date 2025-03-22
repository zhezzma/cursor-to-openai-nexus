const os = require('os');
const zlib = require('zlib');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const $root = require('../proto/message.js');

const regex = /<\|BEGIN_SYSTEM\|>.*?<\|END_SYSTEM\|>.*?<\|BEGIN_USER\|>.*?<\|END_USER\|>/s;

function generateCursorBody(messages, modelName) {

  const systemMessages = messages
    .filter((msg) => msg.role === 'system');
  const instruction = systemMessages.map((msg) => msg.content).join('\n')

  const nonSystemMessages = messages
    .filter((msg) => msg.role !== 'system');
  const formattedMessages = nonSystemMessages.map((msg) => ({
    ...msg,
    role: msg.role === 'user' ? 1 : 2,
    messageId: uuidv4()
  }));

  const chatBody = {
    userMessages: formattedMessages,
    instructions: {
      instruction: "Alway respond in 中文.\n" + instruction
    },
    model: {
      name: modelName,
      empty: '',
    },
    unknown13: 1,
    conversationId: uuidv4(),
    unknown16: 1,
    unknown29: 1,
    unknown31: 0,
  };

  const errMsg = $root.ChatMessage.verify(chatBody);
  if (errMsg) throw Error(errMsg);
  const chatMessageInstance = $root.ChatMessage.create(chatBody);
  let buffer = $root.ChatMessage.encode(chatMessageInstance).finish();
  let magicNumber = 0x00
  if (formattedMessages.length >= 5){
    buffer = zlib.gzipSync(buffer)
    magicNumber = 0x01
  }

  const finalBody = Buffer.concat([
    Buffer.from([magicNumber]),
    Buffer.from(buffer.length.toString(16).padStart(8, '0'), 'hex'),
    buffer
  ])

  return finalBody
}

function chunkToUtf8String(chunk) {
  const results = []
  const errorResults = { hasError: false, errorMessage: '' }
  
  try {
    // 确保 chunk 是有效的
    if (!chunk || chunk.length === 0) {
      console.error('收到空的chunk数据');
      return '';
    }
    
    const buffer = Buffer.from(chunk, 'hex');
    //console.log("Chunk buffer:", buffer.toString('hex'))

    for(let i = 0; i < buffer.length; i++){
      try {
        // 确保有足够的数据来读取魔数和长度
        if (i + 5 >= buffer.length) {
          console.error('数据不足以读取魔数和长度');
          break;
        }
        
        const magicNumber = parseInt(buffer.subarray(i, i + 1).toString('hex'), 16)
        const dataLength = parseInt(buffer.subarray(i + 1, i + 5).toString('hex'), 16)
        
        // 检查数据长度是否合理
        if (dataLength <= 0 || dataLength > 1000000) { // 设置一个合理的最大长度限制
          console.error(`数据长度异常: ${dataLength}`);
          break;
        }
        
        // 确保有足够的数据来读取内容
        if (i + 5 + dataLength > buffer.length) {
          console.error('数据不足以读取内容');
          break;
        }
        
        const data = buffer.subarray(i + 5, i + 5 + dataLength)
        //console.log("Parsed buffer:", magicNumber, dataLength, data.toString('hex'))

        if (magicNumber == 0) {
          try {
            // Text proto message
            const resMessage = $root.ResMessage.decode(data);
            const content = resMessage.content
            if(content !== undefined) {
              // 检查文本内容是否包含错误信息
              if (content.includes('Not logged in') || 
                  content.includes('You\'ve reached your trial request limit') ||
                  content.includes('User is unauthorized')) {
                console.error('检测到文本错误(无效cookie):', content);
                errorResults.hasError = true;
                errorResults.errorMessage = content;
              } 
              // 检查是否包含Too many computers相关关键词
              else if (content.includes('Too many computers')) {
                console.error('检测到文本错误(账户暂时被封禁):', content);
                errorResults.hasError = true;
                errorResults.errorMessage = content;
              }
              // 检查是否包含suspicious activity检查相关关键词
              else if (content.includes('suspicious activity') || content.includes('blocked') || 
                      content.includes('hi@cursor.com') || content.includes('ERROR_UNAUTHORIZED')) {
                console.error('检测到文本错误(IP黑名单):', content);
                errorResults.hasError = true;
                errorResults.errorMessage = content;
              } else {
                results.push(content)
              }
            }
          } catch (protoError) {
            console.error('解析Proto消息错误:', protoError);
          }
        }
        else if (magicNumber == 1) {
          try {
            // Gzip proto message
            const gunzipData = zlib.gunzipSync(data)
            const resMessage = $root.ResMessage.decode(gunzipData);
            const content = resMessage.content
            if(content !== undefined) {
              // 检查文本内容是否包含错误信息
              if (content.includes('Not logged in') || 
                  content.includes('You\'ve reached your trial request limit') ||
                  content.includes('User is unauthorized')) {
                console.error('检测到Gzip文本错误(无效cookie):', content);
                errorResults.hasError = true;
                errorResults.errorMessage = content;
              } 
              // 检查是否包含Too many computers相关关键词
              else if (content.includes('Too many computers')) {
                console.error('检测到Gzip文本错误(账户暂时被封禁):', content);
                errorResults.hasError = true;
                errorResults.errorMessage = content;
              }
              // 检查是否包含suspicious activity检查相关关键词
              else if (content.includes('suspicious activity') || content.includes('blocked') || 
                      content.includes('hi@cursor.com') || content.includes('ERROR_UNAUTHORIZED')) {
                console.error('检测到Gzip文本错误(IP黑名单):', content);
                errorResults.hasError = true;
                errorResults.errorMessage = content;
              } else {
                results.push(content)
              }
            }
            // The prompt is not empty, but skip to handle this here.
            const prompt = resMessage.prompt
          } catch (gzipProtoError) {
            console.error('解析Gzip Proto消息错误:', gzipProtoError);
          }
        }
        else if (magicNumber == 2) { 
          try {
            // Json message
            const utf8 = data.toString('utf-8')
            try {
              const message = JSON.parse(utf8)
              
              // 检查JSON对象是否包含错误信息
              if (message && message.error) {
                // 检查是否包含无效cookie相关关键词
                if (utf8.includes('Not logged in')) {
                  // 针对"Not logged in"错误添加特殊提示
                  console.error('检测到JSON错误对象(登录认证失败，可能是无效cookie或API Key中没有cookie):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
                else if (utf8.includes('You\'ve reached your trial request limit') ||
                   utf8.includes('User is unauthorized')) {
                  console.error('检测到JSON错误对象(无效cookie):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
                // 检查是否包含Too many computers相关关键词
                else if (utf8.includes('Too many computers')) {
                  console.error('检测到JSON错误对象(账户暂时被封禁):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
                // 检查是否包含suspicious activity检查相关关键词
                else if (utf8.includes('suspicious activity') || utf8.includes('blocked') || 
                         utf8.includes('hi@cursor.com') || utf8.includes('ERROR_UNAUTHORIZED')) {
                  console.error('检测到JSON错误对象(IP黑名单):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
                // 其他类型的错误对象
                else {
                  console.error('检测到JSON错误对象(其他):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
              }
              // 检查JSON字符串是否包含错误关键词
              else if (utf8.includes('Not logged in') || 
                       utf8.includes('You\'ve reached your trial request limit') ||
                       utf8.includes('User is unauthorized')) {
                console.error('检测到JSON错误关键词:', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 检查是否包含Too many computers相关关键词
              else if (utf8.includes('Too many computers')) {
                console.error('检测到JSON错误关键词(账户暂时被封禁):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 检查是否包含suspicious activity检查相关关键词
              else if (utf8.includes('suspicious activity') || utf8.includes('blocked') || 
                      utf8.includes('hi@cursor.com') || utf8.includes('ERROR_UNAUTHORIZED')) {
                console.error('检测到JSON错误关键词(IP黑名单):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 其他非空对象也输出到控制台
              else if (message != null && (typeof message !== 'object' || 
                (Array.isArray(message) ? message.length > 0 : Object.keys(message).length > 0))){
                console.error('其他JSON消息:', utf8);
              }
            } catch (jsonError) {
              console.error('JSON解析错误:', jsonError, '原始数据:', utf8);
              // 即使JSON解析失败，也检查原始字符串是否包含错误关键词
              if (utf8.includes('Not logged in') || 
                  utf8.includes('You\'ve reached your trial request limit') ||
                  utf8.includes('User is unauthorized')) {
                console.error('JSON解析失败但检测到错误关键词(无效cookie):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 检查是否包含Too many computers相关关键词
              else if (utf8.includes('Too many computers')) {
                console.error('JSON解析失败但检测到错误关键词(账户暂时被封禁):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 检查是否包含suspicious activity检查相关关键词
              else if (utf8.includes('suspicious activity') || utf8.includes('blocked') || 
                      utf8.includes('hi@cursor.com') || utf8.includes('ERROR_UNAUTHORIZED')) {
                console.error('JSON解析失败但检测到错误关键词(IP黑名单):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
            }
          } catch (textError) {
            console.error('转换为UTF-8文本错误:', textError);
          }
        }
        else if (magicNumber == 3) {
          try {
            // Gzip json message
            const gunzipData = zlib.gunzipSync(data);
            const utf8 = gunzipData.toString('utf-8');
            try {
              const message = JSON.parse(utf8);
              
              // 检查JSON对象是否包含错误信息
              if (message && message.error) {
                // 检查是否包含无效cookie相关关键词
                if (utf8.includes('Not logged in')) {
                  // 针对"Not logged in"错误添加特殊提示
                  console.error('检测到Gzip JSON错误对象(登录认证失败，可能是无效cookie或API Key中没有cookie):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
                else if (utf8.includes('You\'ve reached your trial request limit') ||
                   utf8.includes('User is unauthorized')) {
                  console.error('检测到Gzip JSON错误对象(无效cookie):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
                // 检查是否包含Too many computers相关关键词
                else if (utf8.includes('Too many computers')) {
                  console.error('检测到Gzip JSON错误对象(账户暂时被封禁):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
                // 检查是否包含suspicious activity检查相关关键词
                else if (utf8.includes('suspicious activity') || utf8.includes('blocked') || 
                         utf8.includes('hi@cursor.com') || utf8.includes('ERROR_UNAUTHORIZED')) {
                  console.error('检测到Gzip JSON错误对象(IP黑名单):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
                // 其他类型的错误对象
                else {
                  console.error('检测到Gzip JSON错误对象(其他):', utf8);
                  errorResults.hasError = true;
                  errorResults.errorMessage = utf8;
                }
              }
              // 检查JSON字符串是否包含错误关键词
              else if (utf8.includes('Not logged in') || 
                       utf8.includes('You\'ve reached your trial request limit') ||
                       utf8.includes('User is unauthorized')) {
                console.error('检测到Gzip JSON错误关键词:', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 检查是否包含Too many computers相关关键词
              else if (utf8.includes('Too many computers')) {
                console.error('检测到Gzip JSON错误关键词(账户暂时被封禁):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 检查是否包含suspicious activity检查相关关键词
              else if (utf8.includes('suspicious activity') || utf8.includes('blocked') || 
                      utf8.includes('hi@cursor.com') || utf8.includes('ERROR_UNAUTHORIZED')) {
                console.error('检测到Gzip JSON错误关键词(IP黑名单):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 其他非空对象也输出到控制台
              else if (message != null && (typeof message !== 'object' || 
                (Array.isArray(message) ? message.length > 0 : Object.keys(message).length > 0))){
                console.error('其他Gzip JSON消息:', utf8);
              }
            } catch (jsonError) {
              console.error('Gzip JSON解析错误:', jsonError, '解压后数据:', utf8);
              // 即使JSON解析失败，也检查原始字符串是否包含错误关键词
              if (utf8.includes('Not logged in') || 
                  utf8.includes('You\'ve reached your trial request limit') ||
                  utf8.includes('User is unauthorized')) {
                console.error('Gzip JSON解析失败但检测到错误关键词(无效cookie):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 检查是否包含Too many computers相关关键词
              else if (utf8.includes('Too many computers')) {
                console.error('Gzip JSON解析失败但检测到错误关键词(账户暂时被封禁):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
              // 检查是否包含suspicious activity检查相关关键词
              else if (utf8.includes('suspicious activity') || utf8.includes('blocked') || 
                      utf8.includes('hi@cursor.com') || utf8.includes('ERROR_UNAUTHORIZED')) {
                console.error('Gzip JSON解析失败但检测到错误关键词(IP黑名单):', utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
            }
          } catch (gzipError) {
            console.error('Gzip解压错误:', gzipError);
          }
        }
        else {
          console.log('Unknown magic number when parsing chunk response: ' + magicNumber)
        }

        i += 5 + dataLength - 1
      } catch (chunkParseError) {
        console.error('解析单个chunk部分错误:', chunkParseError);
        // 尝试跳过当前可能损坏的数据，继续解析
        i += 1;
      }
    }
  } catch (err) {
    console.error('解析chunk整体错误:', err);
  }

  // 如果检测到错误，返回错误对象
  if (errorResults.hasError) {
    return { error: errorResults.errorMessage };
  }

  return results.join('')
}

function generateUUIDHash(input, salt = '') {
  const hash = crypto.createHash('sha256').update(input + salt).digest('hex');
  const hash128 = hash.substring(0, 32);
  const uuid = `${hash128.substring(0, 8)}-${hash128.substring(8, 12)}-${hash128.substring(12, 16)}-${hash128.substring(16, 20)}-${hash128.substring(20, 32)}`;

  return uuid;
}

function generateHashed64Hex(input, salt = '') {
  const hash = crypto.createHash('sha256');
  hash.update(input + salt);
  return hash.digest('hex');
}

function obfuscateBytes(byteArray) {
  let t = 165;
  for (let r = 0; r < byteArray.length; r++) {
    byteArray[r] = (byteArray[r] ^ t) + (r % 256);
    t = byteArray[r];
  }
  return byteArray;
}

function generateCursorChecksum(token) {
  // 生成machineId和macMachineId
  const machineId = generateHashed64Hex(token, 'machineId');
  const macMachineId = generateHashed64Hex(token, 'macMachineId');

  // 获取时间戳并转换为字节数组
  const timestamp = Math.floor(Date.now() / 1e6);
  const byteArray = new Uint8Array([
    (timestamp >> 40) & 255,
    (timestamp >> 32) & 255,
    (timestamp >> 24) & 255,
    (timestamp >> 16) & 255,
    (timestamp >> 8) & 255,
    255 & timestamp,
  ]);

  // 混淆字节数组并进行base64编码
  const obfuscatedBytes = obfuscateBytes(byteArray);
  const encodedChecksum = Buffer.from(obfuscatedBytes).toString('base64');

  // 组合最终的checksum
  return `${encodedChecksum}${machineId}/${macMachineId}`;
}

module.exports = {
  generateCursorBody,
  chunkToUtf8String,
  generateHashed64Hex,
  generateCursorChecksum
};
