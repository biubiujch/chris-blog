---
prev:
  text: 工程化
  link: ./content.md
---

## 服务端搭建

### ts node 环境支持

1. 新建一个空的目录，初始化 package.json

2. 安装以下几个包，typescript，ts-node

```bash
## use npm or yarn or pnpm
 pnpm add typescript ts-node -D

```

3. 初始化 typescirpt,生成 tsconfig.json

```bash
tsc -init
```

4. 修改 package.json

```json
{
  "scripts": {
    "start": "ts-node src/index.ts"
  }
}
```

5.如果您使用了 TypeScript 这一 JavaScript 超集，则建议您使用此预设（preset）。

```json
npm install --save-dev @babel/preset-typescript
```

修改 .babelrc 或者 babel.config.js

```json
{
  "presets": ["@babel/preset-typescript"]
}
```

### express

```bash
pnpm add express --save
```

一个简单的 hello world

```typescript
import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

### dotenv

```bash
pnpm add dotenv --save
```

typescript 下 使用 dotenv 智能提示

1. 新建 global.d.ts

```typescript
namespace NodeJS {
  interface ProcessEnv {
    // 这里可以给 process.env 挂上需要的类型
  }
}
```

这样在 process.env 下就有了自定义的类型的智能提醒了

此外还要确保在 tsconfig.json 中指定此文件的路径
更好的方法是有一个文件夹让我们说扩展类型并将所有扩展类型保存在那里，只在此处指定该文件夹的路径而不是单个文件。

2. 修改 tsconfig.json

```json
"typeRoots": ["./global.d.ts", "./node_modules/@types"],
```

### jest

1. 安装 jest

```bash
pnpm add jest -save-dev

## 支持typescript
pnpm add @types/jest -save-dev
```

2. 配置 babel.config.js

```javascript
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]]
};
```

### Sequelize

1. 连接数据库

```typescript
const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: host,
  dialect: "mysql"
});
```
2.  

### winston

1. 安装

```bash
pnpm add windston
```

2. 使用

引入 winston，createLogger 创建一个 logger

```typescript
import winston, { format } from "winston";

const { combine, printf, timestamp } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}][${level}] ${message}`;
});

export const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss:SSS" }), logFormat),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ dirname: "log", filename: "info.log", level: "info" }),
    new winston.transports.File({ dirname: "log", filename: "error.log", level: "error" })
  ]
});
```
