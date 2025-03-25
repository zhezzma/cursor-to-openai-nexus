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
    if (!chunk || chunk.length === 0) {
      console.error('收到空的chunk数据');
      return '';
    }
    
    const buffer = Buffer.from(chunk, 'hex');

    for(let i = 0; i < buffer.length; i++){
      try {
        if (i + 5 >= buffer.length) {
          console.error('数据不足以读取魔数和长度');
          break;
        }
        
        const magicNumber = parseInt(buffer.subarray(i, i + 1).toString('hex'), 16)
        const dataLength = parseInt(buffer.subarray(i + 1, i + 5).toString('hex'), 16)
        
        if (dataLength <= 0 || dataLength > 1000000) {
          console.error(`数据长度异常: ${dataLength}`);
          break;
        }
        
        if (i + 5 + dataLength > buffer.length) {
          console.error('数据不足以读取内容');
          break;
        }
        
        const data = buffer.subarray(i + 5, i + 5 + dataLength)

        // 处理不同类型的消息
        const processMessage = async (data, isGzip = false) => {
          try {
            let processedData = data;
            if (isGzip) {
              processedData = zlib.gunzipSync(data);
            }

            if (magicNumber === 0 || magicNumber === 1) {
              // 处理 Proto 消息
              const resMessage = $root.ResMessage.decode(processedData);
              if (resMessage.content !== undefined) {
                results.push(resMessage.content);
              }
            } else if (magicNumber === 2 || magicNumber === 3) {
              // 处理 JSON 消息
              const utf8 = processedData.toString('utf-8');
              const message = JSON.parse(utf8);
              
              if (message && message.error) {
                console.error(`检测到JSON错误对象(${isGzip ? 'Gzip ' : ''}):`, utf8);
                errorResults.hasError = true;
                errorResults.errorMessage = utf8;
              }
            } else {
              console.log('未知的魔数:', magicNumber);
            }
          } catch (error) {
            console.error(`处理${isGzip ? 'Gzip ' : ''}消息错误:`, error);
          }
        };

        // 根据魔数处理不同类型的消息
        if (magicNumber === 0 || magicNumber === 2) {
          processMessage(data, false);
        } else if (magicNumber === 1 || magicNumber === 3) {
          processMessage(data, true);
        }

        i += 5 + dataLength - 1;
      } catch (chunkParseError) {
        console.error('解析单个chunk部分错误:', chunkParseError);
        i += 1;
      }
    }
  } catch (err) {
    console.error('解析chunk整体错误:', err);
  }

  if (errorResults.hasError) {
    return { error: errorResults.errorMessage };
  }

  return results.join('');
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
