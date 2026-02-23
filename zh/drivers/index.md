---
outline: deep
---

# 驱动总览

驱动用于把模块能力绑定到具体基础设施（Redis/NATS/S3 等）。

## 通用配置模式

```toml
[module.instance]
driver = "redis"

[module.instance.setting]
addr = "127.0.0.1:6379"
database = 0
```

## 分类

- 配置：`config-file`、`config-redis`
- 缓存：`cache-file`、`cache-redis`
- 总线：`bus-nats`、`bus-redis`
- 事件：`event-nats`、`event-redis`
- 队列：`queue-nats`、`queue-redis`
- 调度：`cron-pgsql`、`cron-redis`
- 日志：`log-file`、`log-greptime`
- 锁：`mutex-redis`
- 存储：`storage-minio`、`storage-s3`
