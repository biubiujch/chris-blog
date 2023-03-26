import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { commentPlugin } from "vuepress-plugin-comment2";

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
      appId: "<APP_ID>",
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>",
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
