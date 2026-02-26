import { defineConfig } from 'vitepress'

const zhNav = [
  { text: '总站首页', link: 'https://bamgoo.org' },
  { text: '首页', link: '/zh/' },
  { text: '指南', link: '/zh/guide/' }
]

const enNav = [
  { text: 'Main Site', link: 'https://bamgoo.org' },
  { text: 'Home', link: '/en/' },
  { text: 'Guide', link: '/en/guide/' }
]

const zhSidebar = [
  { text: '首页', link: '/zh/' },
  {
    text: '指南',
    items: [
      { text: '指南首页', link: '/zh/guide/' },
      { text: '架构总览', link: '/zh/architecture/' },
      { text: '模块总览', link: '/zh/modules/' },
      { text: '驱动总览', link: '/zh/drivers/' }
    ]
  },
  {
    text: '架构',
    items: [
      { text: '总览', link: '/zh/architecture/' },
      { text: '运行时生命周期', link: '/zh/architecture/runtime' },
      { text: '注册与分发机制', link: '/zh/architecture/register' },
      { text: '调用链路', link: '/zh/architecture/invocation' },
      { text: '配置模型', link: '/zh/architecture/configuration' }
    ]
  },
  {
    text: '模块',
    items: [
      { text: '总览', link: '/zh/modules/' },
      { text: 'bamgoo (core)', link: '/zh/modules/bamgoo' },
      { text: 'config', link: '/zh/modules/config' },
      { text: 'cache', link: '/zh/modules/cache' },
      { text: 'bus', link: '/zh/modules/bus' },
      { text: 'event', link: '/zh/modules/event' },
      { text: 'queue', link: '/zh/modules/queue' },
      { text: 'cron', link: '/zh/modules/cron' },
      { text: 'data', link: '/zh/modules/data' },
      { text: 'http', link: '/zh/modules/http' },
      { text: 'web', link: '/zh/modules/web' },
      { text: 'view', link: '/zh/modules/view' },
      { text: 'log', link: '/zh/modules/log' },
      { text: 'mutex', link: '/zh/modules/mutex' },
      { text: 'storage', link: '/zh/modules/storage' }
    ]
  },
  {
    text: '驱动',
    items: [
      { text: '总览', link: '/zh/drivers/' },
      { text: 'config-file', link: '/zh/drivers/config-file' },
      { text: 'config-redis', link: '/zh/drivers/config-redis' },
      { text: 'cache-file', link: '/zh/drivers/cache-file' },
      { text: 'cache-redis', link: '/zh/drivers/cache-redis' },
      { text: 'bus-nats', link: '/zh/drivers/bus-nats' },
      { text: 'bus-redis', link: '/zh/drivers/bus-redis' },
      { text: 'event-nats', link: '/zh/drivers/event-nats' },
      { text: 'event-redis', link: '/zh/drivers/event-redis' },
      { text: 'queue-nats', link: '/zh/drivers/queue-nats' },
      { text: 'queue-redis', link: '/zh/drivers/queue-redis' },
      { text: 'cron-pgsql', link: '/zh/drivers/cron-pgsql' },
      { text: 'cron-redis', link: '/zh/drivers/cron-redis' },
      { text: 'data-postgresql', link: '/zh/drivers/data-postgresql' },
      { text: 'data-mysql', link: '/zh/drivers/data-mysql' },
      { text: 'data-sqlite', link: '/zh/drivers/data-sqlite' },
      { text: 'data-mongodb', link: '/zh/drivers/data-mongodb' },
      { text: 'log-file', link: '/zh/drivers/log-file' },
      { text: 'log-greptime', link: '/zh/drivers/log-greptime' },
      { text: 'mutex-redis', link: '/zh/drivers/mutex-redis' },
      { text: 'storage-minio', link: '/zh/drivers/storage-minio' },
      { text: 'storage-s3', link: '/zh/drivers/storage-s3' }
    ]
  }
]

const enSidebar = [
  { text: 'Home', link: '/en/' },
  {
    text: 'Guide',
    items: [
      { text: 'Guide Home', link: '/en/guide/' },
      { text: 'Architecture Overview', link: '/en/architecture/' },
      { text: 'Module Overview', link: '/en/modules/' },
      { text: 'Driver Overview', link: '/en/drivers/' }
    ]
  },
  {
    text: 'Architecture',
    items: [
      { text: 'Overview', link: '/en/architecture/' },
      { text: 'Runtime Lifecycle', link: '/en/architecture/runtime' },
      { text: 'Register & Dispatch', link: '/en/architecture/register' },
      { text: 'Invocation Flow', link: '/en/architecture/invocation' },
      { text: 'Configuration Model', link: '/en/architecture/configuration' }
    ]
  },
  {
    text: 'Modules',
    items: [
      { text: 'Overview', link: '/en/modules/' },
      { text: 'bamgoo (core)', link: '/en/modules/bamgoo' },
      { text: 'config', link: '/en/modules/config' },
      { text: 'cache', link: '/en/modules/cache' },
      { text: 'bus', link: '/en/modules/bus' },
      { text: 'event', link: '/en/modules/event' },
      { text: 'queue', link: '/en/modules/queue' },
      { text: 'cron', link: '/en/modules/cron' },
      { text: 'data', link: '/en/modules/data' },
      { text: 'http', link: '/en/modules/http' },
      { text: 'web', link: '/en/modules/web' },
      { text: 'view', link: '/en/modules/view' },
      { text: 'log', link: '/en/modules/log' },
      { text: 'mutex', link: '/en/modules/mutex' },
      { text: 'storage', link: '/en/modules/storage' }
    ]
  },
  {
    text: 'Drivers',
    items: [
      { text: 'Overview', link: '/en/drivers/' },
      { text: 'config-file', link: '/en/drivers/config-file' },
      { text: 'config-redis', link: '/en/drivers/config-redis' },
      { text: 'cache-file', link: '/en/drivers/cache-file' },
      { text: 'cache-redis', link: '/en/drivers/cache-redis' },
      { text: 'bus-nats', link: '/en/drivers/bus-nats' },
      { text: 'bus-redis', link: '/en/drivers/bus-redis' },
      { text: 'event-nats', link: '/en/drivers/event-nats' },
      { text: 'event-redis', link: '/en/drivers/event-redis' },
      { text: 'queue-nats', link: '/en/drivers/queue-nats' },
      { text: 'queue-redis', link: '/en/drivers/queue-redis' },
      { text: 'cron-pgsql', link: '/en/drivers/cron-pgsql' },
      { text: 'cron-redis', link: '/en/drivers/cron-redis' },
      { text: 'data-postgresql', link: '/en/drivers/data-postgresql' },
      { text: 'data-mysql', link: '/en/drivers/data-mysql' },
      { text: 'data-sqlite', link: '/en/drivers/data-sqlite' },
      { text: 'data-mongodb', link: '/en/drivers/data-mongodb' },
      { text: 'log-file', link: '/en/drivers/log-file' },
      { text: 'log-greptime', link: '/en/drivers/log-greptime' },
      { text: 'mutex-redis', link: '/en/drivers/mutex-redis' },
      { text: 'storage-minio', link: '/en/drivers/storage-minio' },
      { text: 'storage-s3', link: '/en/drivers/storage-s3' }
    ]
  }
]

export default defineConfig({
  title: 'bamgoo docs',
  description: 'bamgoo framework documentation',
  cleanUrls: true,
  themeConfig: {
    logoLink: '/',
    sidebar: {
      '/zh/': zhSidebar,
      '/en/': enSidebar
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/bamgoo/bamgoo' }]
  },
  locales: {
    root: {
      lang: 'en-US',
      label: 'Home',
      themeConfig: {
        nav: [
          { text: 'Main Site', link: 'https://bamgoo.org' },
          { text: '中文', link: '/zh/' },
          { text: 'English', link: '/en/' }
        ]
      }
    },
    en: {
      lang: 'en-US',
      label: 'English',
      title: 'bamgoo Docs',
      description: 'bamgoo framework documentation',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar
      }
    },
    zh: {
      lang: 'zh-CN',
      label: '简体中文',
      title: 'bamgoo 文档',
      description: 'bamgoo 框架文档',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar
      }
    }
  }
})
