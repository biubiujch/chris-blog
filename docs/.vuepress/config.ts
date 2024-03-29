import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { commentPlugin } from "vuepress-plugin-comment2";
import * as dotenv from "dotenv";

dotenv.config();

export default defineUserConfig({
  lang: "zh-CN",
  title: "chris's blog",
  description: "chris 的个人博客，在这里可以看到对技术的一些理解，也有生活的分享",
  theme: defaultTheme({
    navbar: [
      {
        text: "关于我",
        link: "/aboutMe.md"
      },
      {
        text: "归档",
        children: [
          { text: "工程化", link: "/document/project.md" },
          { text: "node", link: "/document/node.md" },
          { text: "后端", link: "/document/server.md" },
          { text: "笔记", link: "/document/issue.md" }
        ]
      }
      // {
      //   text: "分享",
      //   link: "/share/",
      //   children: [{ text: "分类", link: "/share/" }]
      // }
    ],
    colorMode: "dark",
    colorModeSwitch: true,
    themePlugins: {},
    sidebar: [
      {
        text: "关于我",
        link: "/aboutMe.md"
      },
      {
        text: "归档",
        children: [
          {
            text: "工程化",
            link: "/document/project.md"
          },
          { text: "node", link: "/document/node.md" },
          { text: "后端", link: "/document/server.md" },
          { text: "笔记", link: "/document/issue.md" }
        ]
      }
      // {
      //   text: "分享",
      //   link: "/share/",
      //   children: ["好书分享"]
      // }
    ]
  }),
  plugins: [
    docsearchPlugin({
      appId: "0YG28812R4",
      apiKey: "63cc1817979b5a2d955dd53526f6449e",
      indexName: "chris-vercel",
      locales: {
        "/": {
          placeholder: "Search Documentation",
          translations: {
            button: {
              buttonText: "Search Documentation"
            }
          }
        },
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档"
            }
          }
        }
      }
    }),
    commentPlugin({
      provider: "Giscus",
      repo: "biubiujch/chris-blog",
      repoId: "R_kgDOI1n1tA",
      category: "General",
      categoryId: "DIC_kwDOI1n1tM4CVJ65",
      lazyLoading: true
    })
  ]
});
