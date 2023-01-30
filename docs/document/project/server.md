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
