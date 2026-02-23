---
outline: deep
---

# 注册与分发机制

bamgoo 使用统一注册入口：

```go
bamgoo.Register(name, value)
```

## 核心机制

- 所有注册对象都会分发给所有已挂载模块
- 每个模块只消费自己关心的类型
- 业务层只需要记一种注册方式

## 常见注册对象

- 驱动：`cache.Driver`、`queue.Driver` 等
- 配置：`cache.Config`、`log.Config` 等
- 组件：`http.Router`、`event.Event`、`cron.Job` 等
- 服务：`bamgoo.Method`、`bamgoo.Service`

## 注册建议

建议把注册放在各包 `init()` 中，确保启动前完成。

## 覆盖策略

`bamgoo.Override(true)` 开启后，同名对象允许覆盖。
