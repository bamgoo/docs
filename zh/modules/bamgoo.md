---
outline: deep
---

# infrago (core)

## 职责

`infrago` 是运行时核心，负责：

- 模块挂载与统一分发
- 生命周期调度（`Load -> Setup -> Open -> Start -> Wait -> Stop -> Close`）
- 方法/服务调用与上下文元数据
- 触发器机制（`START` / `STOP`）

## 关键 API

- `infra.Mount(mod)`：挂载模块
- `infra.Register(name, value)`：注册驱动/组件/配置
- `infra.Ready(role...)`：执行到 `Open`
- `infra.Go(role...)`：执行完整生命周期
- `infra.Override(true)`：允许同名注册覆盖

## 调用模型

- 本地调用：`ctx.Invoke("service.method", payload)`
- 远程调用：本地未命中时，通过 `BusHook` 转发到 `bus` 模块
- 结果：统一用 `Res` 表示（`Code == 0` 为成功）

## 触发器

可注册触发器并在生命周期点执行：

```go
infra.Register(infra.START, infra.Trigger{
	Name: "warmup",
	Action: func(ctx *infra.Context) {
		// 启动后执行预热逻辑
	},
})
```
