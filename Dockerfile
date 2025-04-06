FROM node:lts-alpine

# 创建应用目录并设置工作目录
WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json ./

# 安装依赖
RUN npm install

# 复制应用代码
COPY . /app

# 创建数据目录并设置权限
RUN mkdir -p /app/data && \
    chown -R node:node /app

# 使用非root用户运行应用
USER node

# 暴露端口
EXPOSE 7860

# 启动应用
CMD ["npm", "run", "start"]
