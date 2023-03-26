# rollup 搭建 ts 环境

1. **pnpm 初始化生成 package.json 文件**

2. **安装依赖**  
    tyepscript rollup
   第三方插件:
   @rollup/plugin-node-resolve
   rollup-plugin-typescript

```bash
 pnpm add typescript rollup  @rollup/plugin-node-resolve rollup-plugin-typescript2 -D

```

3. **初始化 typescript 的配置文件**

```bash
tsc --init
```

4. **添加 rollup 配置文件，rollup.config.js**

```javascript
import path from "path";
import ts from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./src/index.ts",
  output: {
    format: "cjs", //commonjs ,umd ,esm iife
    file: path.resolve("dist/bundle.js")
  },
  // ts插件的使用
  plugin: [
    ts({ tsconfig: path.resolve("tsconfig.json") }),
    nodeResolve({
      extensions: [".js", ".ts"] // node解析插件
    })
  ]
};
```

5. **package.json 添加脚本**

```json
{
  "script": {
    "build": "rollup -c -w"
  }
}
```

6. 全局安装 ts-node ，vscode 下安装 code runner。可以在 node 环境下运行 ts  
   在已经生成 tsconfig.json 后运行 ts-node 报 “Unknown file extension .ts”，修改 tsconfig.json

```json
{
"ts-node": {
    "esm": true
    "experimentalSpecifierResolution": "node"
  }
}

```
