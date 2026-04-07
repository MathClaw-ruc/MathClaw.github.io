import { defineConfig } from "vitepress";

export default defineConfig({
  title: "MathClaw",
  description: "AI 驱动的数学学习工作台",
  base: "/MathClaw.github.io/",
  lang: "zh-CN",
  srcDir: ".",
  cleanUrls: false,
  lastUpdated: false,
  appearance: true,
  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索"
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有找到结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "回车",
                  navigateText: "切换",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "Esc"
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [{ icon: "github", link: "https://github.com/MathClaw-ruc/MathClaw" }],
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/pre-config" },
      { text: "产品展示", link: "/product" },
      { text: "参与贡献", link: "/contribution" },
      { text: "GitHub", link: "https://github.com/MathClaw-ruc/MathClaw" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "快速开始",
          items: [
            { text: "预配置", link: "/guide/pre-config" },
            { text: "工作区与记忆", link: "/guide/data-preparation" },
            { text: "本地安装", link: "/guide/local-start" },
            { text: "通道部署", link: "/guide/docker-start" }
          ]
        },
        {
          text: "资源",
          items: [{ text: "常见问题", link: "/guide/troubleshooting" }]
        }
      ]
    },
    footer: {
      message: "基于 MIT License 发布。",
      copyright: "(c) 2026 MathClaw"
    },
    editLink: {
      pattern: "https://github.com/MathClaw-ruc/MathClaw/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页"
    },
    outline: {
      label: "本页目录"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    lastUpdated: {
      text: "最后更新于"
    },
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "外观",
    langMenuLabel: "语言"
  }
});
