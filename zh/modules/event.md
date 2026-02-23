---
outline: deep
---

# event

## 职责

事件发布与广播模块，支持声明、过滤器和异常处理链。

## 配置结构

```toml
[event.default]
driver = "redis"
external = false
codec = "gob"
weight = 1
prefix = "prod"

[event.default.setting]
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

- `Event`
- `Declare`
- `Filter`（Serve/Request/Execute/Response）
- `Handler`（Found/Error/Failed/Denied）

## 对外 API

- `event.Publish / PublishTo`
- `event.Broadcast / BroadcastTo`

## 驱动

- `default`
- [event-nats](/zh/drivers/event-nats)
- [event-redis](/zh/drivers/event-redis)
