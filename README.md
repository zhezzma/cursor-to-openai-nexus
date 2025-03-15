# Cursor To OpenAI

Convert the Cursor Editor to an OpenAI API interface service.

## Introduction

This project provides a proxy service that converts the AI chat of the Cursor Editor into an OpenAPI API, allowing you to reuse the LLM of the Cursor in other applications.

## 新增功能

- **自定义API Key**：可以设置自定义的API Key，而不是直接使用冗长的Cookie
- **多Cookie轮询**：支持配置多个Cursor Cookie，系统会自动轮询使用
- **Web管理界面**：提供简单的Web界面来管理API Key和Cookie映射关系
- **轮询策略**：支持随机（random）和轮询（round-robin）两种策略
- **无效Cookie管理**：自动检测并移除无效的Cookie，支持通过Web界面和命令行工具管理
- **自动刷新Cookie**：支持从GitHub仓库自动获取新的Cookie，保持系统可用性

## Preparsuitue

1. Visit [Cursor](https://www.cursor.com) and register a account.
    - 150 fast premium requests are given, which can be reset by deleting the account and then registering again
    - Suggest to use gmail/outlook email, some temp emails have been disabled by Cursor.
2. Log in and open the developer tool in the browser (F12).
3. Find the cookie value named `WorkosCursorSessionToken` in Application-Cookies and save it (The value starts with `user_`).

## How to Run

### Run in docker
```
docker run -d --name cursor-to-openai -p 3010:3010 ghcr.io/jiuz-chn/cursor-to-openai:latest
```

### Run in npm
```
npm install
npm run start
```

## 配置API Key

有两种方式配置API Key与Cookie的映射关系：

### 1. 通过Web界面配置

访问 `http://localhost:3010` 打开Web管理界面，可以添加、查看和删除API Key。

### 2. 通过环境变量配置

设置环境变量 `API_KEYS`，格式为JSON字符串：

```
API_KEYS={"your_custom_api_key1":"user_cookie1","your_custom_api_key2":["user_cookie2","user_cookie3"]}
```

### 3. 通过API配置

```
POST /v1/api-keys
Content-Type: application/json

{
  "apiKey": "your_custom_api_key",
  "cookieValues": ["user_cookie1", "user_cookie2"]
}
```

## How to use the server

1. Get models
    - Url：`http://localhost:3010/v1/models`
    - Request：`GET`
    - Authentication：`Bearer Token`（自定义API Key或WorkosCursorSessionToken值）

2. Chat completion
    - Url：`http://localhost:3010/v1/chat/completions`
    - Request：`POST`
    - Authentication：`Bearer Token`（自定义API Key或WorkosCursorSessionToken值）

 for the response body, please refer to the OpenAI interface

### Python demo
```
from openai import OpenAI

# 使用自定义API Key
client = OpenAI(api_key="your_custom_api_key",
                base_url="http://localhost:3010/v1")

# 或者直接使用Cookie（向后兼容）
# client = OpenAI(api_key="{{{Replace by the WorkosCursorSessionToken value of your account. It starts with user_...}}}",
#                base_url="http://localhost:3010/v1")

response = client.chat.completions.create(
    model="claude-3-7-sonnet",
    messages=[
        {"role": "user", "content": "Hello."},
    ],
    stream=False
)

print(response.choices)
```

## Notes

- Please keep your WorkosCursorSessionToken properly and do not disclose it to others
- This project is for study and research only, please abide by the Cursor Terms of Use

## Acknowledgements

- This project is based on [cursor-api](https://github.com/zhx47/cursor-api)(by zhx47).
- This project integrates the commits in [cursor-api](https://github.com/lvguanjun/cursor-api)(by lvguanjun).

## 无效Cookie管理

系统会自动检测请求过程中失效的Cookie，并将其从API Key中移除，同时记录到无效Cookie列表中。

### 1. 通过Web界面管理

访问 `http://localhost:3010` 打开Web管理界面，可以查看和清除无效Cookie。

### 2. 通过命令行工具管理

使用项目根目录下的 `manage-invalid-cookies.js` 工具：

```
node manage-invalid-cookies.js
```

该工具提供以下功能：
- 查看所有无效Cookie
- 添加无效Cookie
- 删除特定无效Cookie
- 清空所有无效Cookie
- 从API Keys中移除所有无效Cookie

## 自动刷新Cookie

系统支持从GitHub仓库自动获取新的Cookie，以保持服务的可用性。

### 配置自动刷新

在 `.env` 文件中设置以下环境变量：

```
# GitHub相关配置
GITHUB_TOKEN=your_github_token
GITHUB_OWNER=repository_owner
GITHUB_REPO=repository_name
GITHUB_WORKFLOW_ID=workflow_file_name.yml
TRIGGER_WORKFLOW=true

# 工作流参数
REGISTER_NUMBER=2
REGISTER_MAX_WORKERS=1
REGISTER_EMAIL_SERVER=TempEmail
REGISTER_INGEST_TO_ONEAPI=false
REGISTER_UPLOAD_ARTIFACT=true

# 刷新配置
REFRESH_CRON=0 */6 * * *
MIN_COOKIE_COUNT=2
```

### 手动触发刷新

使用以下命令手动触发Cookie刷新：

```
npm run refresh-cookies
```
