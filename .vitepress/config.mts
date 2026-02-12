import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'bamgoo',
  description: 'bamgoo framework docs',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '核心', link: '/core/' },
      { text: '模块', link: '/modules/' },
      { text: '驱动', link: '/drivers/' },
      { text: '示例', link: '/examples/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '总览', link: '/guide/' },
            { text: '框架介绍', link: '/guide/introduction' },
            { text: '设计想法', link: '/guide/vision' },
            { text: '来源与演进', link: '/guide/origin' },
            { text: '架构结构', link: '/guide/architecture' },
            { text: '仓库结构', link: '/guide/structure' },
            { text: '快速开始', link: '/guide/quick-start' }
          ]
        }
      ],
      '/core/': [
        {
          text: '核心',
          items: [
            { text: '总览', link: '/core/' },
            { text: 'bamgoo 运行时', link: '/core/runtime' },
            { text: 'base 基础类型', link: '/core/base' },
            { text: 'builtin 内置注册', link: '/core/builtin' }
          ]
        }
      ],
      '/modules/': [
        {
          text: '模块',
          items: [
            { text: '总览', link: '/modules/' },
            { text: 'config', link: '/modules/config' },
            { text: 'cache', link: '/modules/cache' },
            { text: 'bus', link: '/modules/bus' },
            { text: 'http', link: '/modules/http' },
            { text: 'web', link: '/modules/web' },
            { text: 'log', link: '/modules/log' },
            { text: 'mutex', link: '/modules/mutex' }
          ]
        }
      ],
      '/drivers/': [
        {
          text: '驱动',
          items: [
            { text: '总览', link: '/drivers/' },
            { text: 'config-file', link: '/drivers/config-file' },
            { text: 'config-redis', link: '/drivers/config-redis' },
            { text: 'cache-file', link: '/drivers/cache-file' },
            { text: 'cache-redis', link: '/drivers/cache-redis' },
            { text: 'bus-nats', link: '/drivers/bus-nats' },
            { text: 'log-file', link: '/drivers/log-file' },
            { text: 'log-greptime', link: '/drivers/log-greptime' },
            { text: 'mutex-redis', link: '/drivers/mutex-redis' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '示例',
          items: [
            { text: '总览', link: '/examples/' },
            { text: 'hello-world', link: '/examples/hello-world' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bamgoo/docs' }
    ]
  }
})
