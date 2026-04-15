# 安定版を使用
FROM node:20-slim

WORKDIR /app

# パッケージのインストールを効率化する(レイヤーキャッシュの活用)
COPY package*.json ./
RUN npm install

# アプリケーションの全ファイルをコピー
COPY . .

# Next.jsの開発サーバーのポートを解放
EXPOSE 3000

# 開発モードで起動
CMD ["npm", "run", "dev"]