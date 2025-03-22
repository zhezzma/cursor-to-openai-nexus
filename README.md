# Cursor-To-OpenAI

将Cursor的API请求转发到OpenAI，支持多个API Key轮询，自动刷新Cookie。

## 项目特点

- 🔄 **自动刷新Cookie**: 支持通过GitHub Action自动注册新账号并获取Cookie
- 🔑 **多Key轮询**: 支持配置多个API Key进行轮询，提高可用性
- 🚀 **简易配置**: 提供一键配置脚本，快速完成环境搭建
- 📧 **邮箱管理**: 支持管理多个Gmail账号用于自动注册
- 📊 **状态监控**: 可查看各API Key的使用情况和Cookie状态
- 🔧 **易于维护**: 提供便捷的维护脚本，简化日常操作

## 快速开始

我们提供了一个简易脚本，帮助您快速上手本项目：

```bash
# 下载管理脚本
curl -O https://github.com/liuw1535/cursor-to-openai-nexus/main/cursor-to-openai-helper.sh

# 设置可执行权限
chmod +x cursor-to-openai-helper.sh

# 运行脚本
./cursor-to-openai-helper.sh
```
### 使用指南
#### 管理脚本功能
脚本提供了四个主要功能区：

1. 启动服务 (npm) - 快速启动服务
2. 安装配置 - 完成初始安装和配置
3. 系统维护 - 执行维护任务
4. 退出 - 退出脚本
   
#### 首次使用流程
1.    运行脚本选择「安装配置」

2.    按顺序完成：克隆仓库 → 安装依赖 → 创建配置文件 → 设置管理员账户 → 运行安装向导

3.    配置完成后，回到主菜单选择「启动服务 (npm)」


#### 准备工作

在开始配置前，请确保您已经：

1. 
   Fork了 Cursor-Register-fix 仓库到您的GitHub账号

2. 创建了GitHub个人访问令牌（Personal Access Token），具有 repo 权限
3. 拥有至少一个Gmail账号，并启用了两步验证
4. 为Gmail账号创建了应用密码（Application Password）

#### Cookie管理

维护菜单中提供了三种刷新Cookie的方式：

1. 常规刷新: 检查现有Cookie数量，必要时触发刷新
2. 强制刷新: 忽略数量检查，直接触发刷新
3. 持续刷新: 在设定的时间内持续尝试，直到成功添加新Cookie

#### 项目更新与备份

维护菜单提供了项目更新和备份功能：

1. 更新项目代码: 自动备份配置文件、拉取最新代码并恢复配置
2. 备份项目数据: 将重要配置文件备份到backups目录

#### Gmail应用密码设置步骤

如果您还没有创建Gmail应用密码，请按照以下步骤操作：

1. 访问 Google账号安全设置
2. 在"登录Google"部分，点击"两步验证"（如未启用需先启用）
3. 在页面底部找到"应用密码"，点击进入
4. 选择"其他(自定义名称)"，输入名称（如"Cursor注册"）
5. 点击"生成"并复制16位应用密码

#### 手动操作命令

如需手动执行操作，可使用以下命令：

```bash
# 启动服务
npm start

# 刷新Cookie
npm run refresh-cookies

# 强制刷新Cookie
npm run refresh-cookies -- --force

# 管理邮箱配置
npm run manage-emails

# 运行安装向导
npm run setup
```

#### 注意事项

- GitHub Token需具有repo权限，用于访问您fork的仓库
- Gmail应用密码不同于登录密码，是专为第三方应用生成的
- 确保至少有一个有效的Gmail账号配置，否则自动刷新功能无法正常工作
- 推荐定期备份重要配置文件（.env和data目录）
- 更新项目前，系统会自动备份现有配置，更新后会自动恢复

#### 故障排除

- Docker启动失败: 检查Docker服务是否运行，端口是否被占用
- Cookie刷新失败: 检查GitHub Token是否有效，网络是否正常
- 更新失败: 尝试手动解决冲突，或使用备份功能恢复之前的版本
- 服务无响应: 查看日志确认问题，必要时重启服务

#### 免责声明

- 本功能仅用于学习和研究目的，请遵守Cursor的使用条款


----

> 以下是手动配置教程

## 安装

1. 克隆仓库
```bash
git clone https://github.com/your-username/cursor-to-openai.git
cd cursor-to-openai
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
复制`.env.example`文件为`.env`，并根据需要修改配置：
```bash
cp .env.example .env
```

4. 配置管理员账户
复制`data/admin.example.json`文件为`data/admin.json`：
```bash
cp data/admin.example.json data/admin.json
```

然后使用以下命令生成管理员账户：
```bash
node scripts/create-admin.js
```

按照提示输入管理员用户名和密码。

## 使用说明

1. 启动服务
```bash
npm start
```

2. 访问管理界面
打开浏览器访问`http://localhost:3010`（或你配置的其他端口），使用管理员账户登录。

3. 添加API Key
在管理界面添加Cursor API Key，系统会自动获取和刷新Cookie。

4. 使用API
将你的OpenAI客户端的base URL改为`http://localhost:3010`，然后像使用OpenAI API一样使用即可。

## 注意事项

- 请妥善保管你的管理员账户信息
- 不要将`data/admin.json`和`data/api_keys.json`文件提交到版本控制系统
- 建议定期备份这些配置文件

## License

MIT

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

4. **API Keys 合并逻辑**：系统启动时会自动合并 `.env` 中的 API Keys 和 `data/api_keys.json` 文件中的 API Keys，确保通过刷新添加的 Cookie 不会丢失。合并规则如下：
   - 如果某个 API Key 只存在于 `.env` 或 `data/api_keys.json` 中的一处，则直接使用该处的配置
   - 如果某个 API Key 同时存在于两处，则合并其 Cookie 列表，确保不重复
   - 合并后的结果会保存到 `data/api_keys.json` 文件中

5. **Cookie 持久化**：系统会自动将所有 API Keys 和 Cookies 保存到 `data/api_keys.json` 文件中，确保在程序重启后不会丢失。以下情况会触发保存操作：
   - 系统启动时合并 API Keys 后
   - 添加或更新 API Key 时
   - 移除 API Key 时
   - 从 API Key 中移除 Cookie 时
   - 自动刷新添加新 Cookie 时

## 自动刷新 Cookie 功能

系统支持自动刷新 Cookie，确保 API Key 始终有足够的可用 Cookie。

### 配置说明

1. 在 `.env` 文件中设置以下变量：
   ```
   # 是否启用自动刷新 Cookie
   ENABLE_AUTO_REFRESH=true
   
   # 自动刷新的定时规则（Cron 表达式）
   REFRESH_CRON=0 */6 * * *
   
   # 每个 API Key 的最小 Cookie 数量，低于此数量将触发刷新
   MIN_COOKIE_COUNT=2
   
   # GitHub 相关配置
   GITHUB_TOKEN=your_github_token
   GITHUB_OWNER=your_github_username
   GITHUB_REPO=your_repo_name
   GITHUB_WORKFLOW_ID=cursor_register.yml
   TRIGGER_WORKFLOW=true
   
   # 工作流参数
   REGISTER_NUMBER=2
   REGISTER_MAX_WORKERS=1
   REGISTER_EMAIL_SERVER=TempEmail
   REGISTER_INGEST_TO_ONEAPI=false
   REGISTER_UPLOAD_ARTIFACT=true
   ```

2. 系统会根据 `REFRESH_CRON` 定时检查每个 API Key 的 Cookie 数量，如果低于 `MIN_COOKIE_COUNT`，则触发刷新流程。

### 手动刷新

您也可以通过命令行手动触发刷新：

```
# 刷新所有 API Key
npm run refresh-cookies

# 刷新特定 API Key
npm run refresh-cookies -- your_api_key

# 强制刷新（忽略 Cookie 数量检查）
npm run refresh-cookies -- --force
npm run refresh-cookies -- your_api_key --force
```

### 工作原理

1. 系统检查 API Key 的 Cookie 数量，如果低于阈值，则触发刷新流程。
2. 系统连接到 GitHub，触发指定的工作流（如 `cursor_register.yml`）。
3. 系统等待工作流完成，然后下载生成的 Artifact。
4. 系统从 Artifact 中提取 Cookie，并添加到对应的 API Key 中。
5. 新的 Cookie 会自动保存到 `data/api_keys.json` 文件中，确保在程序重启后不会丢失。

### 错误处理

系统实现了完善的错误处理机制，包括：

1. 网络超时重试：在触发工作流、获取工作流状态、下载 Artifact 等环节，系统会自动重试多次，确保临时网络问题不会导致刷新失败。
2. 文件解析容错：系统能够处理各种格式的 CSV 文件，确保能够正确提取 Cookie。
3. Cookie 验证：系统会验证提取的 Cookie 是否完整有效，避免添加无效的 Cookie。

## How to Run

### 使用Docker Compose运行
1. 创建必要的配置文件：
```bash
# 创建环境配置文件
cp .env.example .env

# 创建数据目录
mkdir -p data

# 创建管理员账户配置
cp data/admin.example.json data/admin.json
```

2. 编辑配置文件：
   - 编辑`.env`文件，设置必要的环境变量
   - 使用`node scripts/create-admin.js`创建管理员账户，或手动编辑`data/admin.json`

3. 构建并启动服务：
```bash
docker compose up -d --build
```

4. 访问服务：
   - 管理界面：`http://localhost:3010`
   - API接口：`http://localhost:3010/v1/...`

5. 查看日志：
```bash
docker compose logs -f
```

6. 停止服务：
```bash
docker compose down
```

### Docker配置文件说明

项目包含以下Docker相关文件：

1. `Dockerfile`：定义了应用的构建过程
   - 基于`node:lts-alpine`镜像
   - 安装依赖并复制应用代码
   - 暴露3010端口
   - 使用`npm run start`启动应用

2. `docker-compose.yaml`：定义了服务的运行环境
   - 使用本地Dockerfile构建镜像
   - 将数据文件挂载到容器中，确保数据持久化：
     - `./data/invalid_cookies.json:/app/data/invalid_cookies.json`
     - `./data/api_keys.json:/app/data/api_keys.json`
     - `./data/admin.json:/app/data/admin.json`
   - 将3010端口映射到主机
   - 使用`.env`文件加载环境变量

通过这种配置，您的数据（API Keys、无效Cookie和管理员账户）将保存在主机的`data`目录中，即使容器重启或重建，数据也不会丢失。

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

系统会检查所有 API Key 的 Cookie 数量，并刷新那些数量低于阈值的 API Key。刷新时会优先处理 Cookie 数量最少的 API Key。

#### 高级用法

1. 刷新特定的 API Key：

```
npm run refresh-cookies:api your_api_key
```

2. 强制刷新（忽略 Cookie 数量检查）：

```
npm run refresh-cookies:force
```

3. 强制刷新特定的 API Key：

```
node auto-refresh-cookies.js your_api_key --force
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
