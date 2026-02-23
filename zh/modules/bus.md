---
outline: deep
---

# bus

## 职责

提供跨节点服务调用与服务发现能力，是 `ctx.Invoke` 的远程调用通道。

## 主题模型

- `call.<service>`：同步请求响应
- `event.<service>`：广播
- `queue.<service>`：竞争消费

## 配置结构

```toml
[bus.default]
driver = "nats"
weight = 1
prefix = "prod"

[bus.default.setting]
url = "nats://127.0.0.1:4222"
group = "api"
announce = "10s"
announce_ttl = "30s"
```

字段：

- `driver`
- `weight`
- `prefix`
- `setting`

## 运营 API

- `bus.Stats()`
- `bus.ListNodes()`
- `bus.ListServices()`

## 驱动

- `default`（本地实现）
- [bus-nats](/zh/drivers/bus-nats)
- [bus-redis](/zh/drivers/bus-redis)
