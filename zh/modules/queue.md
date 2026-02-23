---
outline: deep
---

# queue

## 职责

异步任务队列，支持延迟发布、重试和并发消费线程。

## 配置结构

```toml
[queue.default]
driver = "redis"
external = false
codec = "gob"
weight = 1
prefix = "prod"

[queue.default.setting]
addr = "127.0.0.1:6379"
database = 0
```

字段：

- `driver`
- `external`
- `codec`（默认 `gob`）
- `weight`
- `prefix`
- `setting`

## 组件

- `Queue`（`Thread`、`Retry` 等）
- `Declare`
- `Filter`
- `Handler`

## 对外 API

- `queue.Publish / PublishTo`
- `queue.DeferredPublish / DeferredPublishTo`

## 驱动

- `default`
- [queue-nats](/zh/drivers/queue-nats)
- [queue-redis](/zh/drivers/queue-redis)
