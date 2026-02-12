# 框架介绍

bamgoo 是一个模块化 Go 框架。核心运行时负责生命周期，模块负责能力扩展，驱动负责具体实现。

你可以把它看作三层：

- Runtime 层：`bamgoo.Go()` 驱动 `Load -> Setup -> Open -> Start -> Wait -> Stop -> Close`。
- Module 层：`config/cache/bus/http/web/log/mutex` 等模块通过 `Mount` 接入生命周期。
- Driver 层：`*-redis`、`*-file`、`*-nats` 等驱动通过 `Register` 注入模块。

这种拆分的价值是：

- 上层调用 API 稳定。
- 底层驱动可以按环境替换。
- 同一模块可以有多个连接实例并做路由或负载。
