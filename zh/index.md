---
layout: home

hero:
  name: "infrago"
  text: "模块化 Go 框架文档"
  tagline: "Runtime + Modules + Drivers 的统一工程组织。"
  actions:
    - theme: brand
      text: 开始阅读
      link: /zh/guide/
    - theme: alt
      text: 切换到英文
      link: /en/
    - theme: alt
      text: GitHub
      link: https://github.com/infrago/infra

features:
  - title: 架构优先
    details: 统一生命周期，模块按同一阶段启动与关闭。
  - title: 模块清晰
    details: config/cache/bus/event/queue/cron/http/web/view/log/mutex/storage。
  - title: 驱动可换
    details: Redis、NATS、S3、MinIO、PostgreSQL 与本地默认实现可切换。
  - title: 面向生产
    details: 服务发现、延迟任务、重试、分布式锁和文件存储都可按需启用。
---

## 文档结构

- [指南](/zh/guide/)
- [架构](/zh/architecture/)
- [模块](/zh/modules/)
- [驱动](/zh/drivers/)
