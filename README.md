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

## 环境配置

本项目使用 `.env` 文件存储配置信息。在启动前，您需要创建并配置此文件：

1. 复制示例配置文件：
   ```
   cp .env.example .env
   ```

2. 编辑 `.env` 文件，设置必要的环境变量：
   - `API_KEYS`: 必须设置，格式为JSON字符串，包含API Key与Cookie的映射关系
   - 如果启用自动刷新Cookie功能（`ENABLE_AUTO_REFRESH=true`），则还需设置以下变量：
     - `GITHUB_TOKEN`: GitHub个人访问令牌
     - `GITHUB_OWNER`: GitHub用户名
     - `GITHUB_REPO`: 仓库名称
     - `GITHUB_WORKFLOW_ID`: 工作流文件名
     - `TRIGGER_WORKFLOW`: 是否允许触发工作流

3. 系统在启动时会检查 `.env` 文件是否存在以及必要的环境变量是否已设置，如果不符合要求将拒绝启动并显示错误信息。

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

系统支持从GitHub仓库自动获取新的Cookie，以保持服务的可用性。通过GitHub Actions自动注册Cursor账号并获取Cookie，实现Cookie的自动补充。

### 前置准备

1. 从 [Cursor-Register](https://github.com/JiuZ-Chn/Cursor-Register) 项目fork一份到自己的GitHub账号下
   - 访问 https://github.com/JiuZ-Chn/Cursor-Register
   - 点击右上角的 "Fork" 按钮，创建自己的副本

2. 获取GitHub个人访问令牌（Personal Access Token）
   - 访问 GitHub 的 [Personal access tokens](https://github.com/settings/tokens) 页面
   - 点击 "Generate new token" > "Generate new token (classic)"
   - 为令牌添加描述，例如 "Cursor Cookie Refresher"
   - 选择以下权限范围：
     - `repo` (完整的仓库访问权限)
     - `workflow` (允许管理GitHub Actions工作流)
   - 点击 "Generate token" 并保存生成的令牌（离开页面后将无法再次查看）

### 配置自动刷新

1. 在项目根目录创建或编辑 `.env` 文件，参考 `.env.example` 添加以下配置：

```
# GitHub相关配置
GITHUB_TOKEN=your_github_token        # 替换为你的GitHub个人访问令牌
GITHUB_OWNER=your_github_username     # 替换为你的GitHub用户名
GITHUB_REPO=Cursor-Register           # 你fork的仓库名称，默认为Cursor-Register
GITHUB_WORKFLOW_ID=cursor_register.yml # 工作流文件名，通常不需要修改
TRIGGER_WORKFLOW=true                 # 是否允许触发GitHub Actions工作流

# 工作流参数
REGISTER_NUMBER=2                     # 每次注册的账号数量
REGISTER_MAX_WORKERS=1                # 并行工作器数量
REGISTER_EMAIL_SERVER=TempEmail       # 临时邮箱服务，可选值: TempEmail, TempMailLol, Emailnator
REGISTER_INGEST_TO_ONEAPI=false       # 是否将Cookie导入到OneAPI
REGISTER_UPLOAD_ARTIFACT=true         # 是否上传Artifact（必须为true）

# 刷新配置
REFRESH_CRON=0 */6 * * *              # Cron表达式，定义自动刷新的时间间隔（此处为每6小时）
MIN_COOKIE_COUNT=2                    # 触发自动刷新的最小Cookie数量阈值
```

2. 确保你的fork仓库中的GitHub Actions已启用
   - 访问你fork的仓库
   - 点击 "Actions" 标签
   - 如果看到提示需要启用Actions，点击 "I understand my workflows, go ahead and enable them"

### 自动刷新机制

系统会根据以下规则自动刷新Cookie：

1. 定时检查：根据 `REFRESH_CRON` 设置的时间间隔，定期检查每个API Key关联的Cookie数量
2. 阈值触发：当某个API Key的Cookie数量低于 `MIN_COOKIE_COUNT` 设定的阈值时，触发自动刷新
3. 工作流程：
   - 系统会调用GitHub API触发你fork仓库中的工作流
   - 工作流会自动注册指定数量的Cursor账号
   - 注册完成后，系统会下载包含Cookie的Artifact
   - 提取Cookie并添加到系统中，过滤掉已存在和无效的Cookie

### 手动触发刷新

如果需要立即刷新Cookie，可以使用以下命令手动触发：

```
npm run refresh-cookies
```

### 故障排除

如果自动刷新过程中遇到问题，请检查：

1. GitHub令牌是否有效且具有足够的权限
2. 工作流配置是否正确（检查fork仓库中的Actions标签页）
3. 查看服务器日志中的详细错误信息
4. 确保网络连接稳定，能够正常访问GitHub API

### 注意事项

- 请合理设置刷新频率，避免过于频繁地触发GitHub Actions
- 临时邮箱服务可能会被Cursor封禁，如遇注册失败，可尝试更换 `REGISTER_EMAIL_SERVER`
- 本功能仅用于学习和研究目的，请遵守Cursor的使用条款
