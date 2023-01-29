---
prev: 
  text: 目录
  link: ../content.md
---


# next+react ssr渲染
next.js + styled-components 刷新页面上样式丢失
安装 babel-plugin-styled-components

```Bash
yarn add -s babel-plugin-styled-components
```

npm install babel-plugin-styled-components --save
添加 .babelrc 文件

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true
      }
    ]
  ]
}
```