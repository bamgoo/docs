---
outline: deep
---

# 调用链路

## 本地优先

调用 `ctx.Invoke("svc.name", payload)` 时，框架执行：

1. `core.invokeLocal`：查本地方法/服务
2. 本地不存在时走 `hook.Request` 进入 bus

## 触发链路

触发器 `bamgoo.Trigger` 在 `Setup` 阶段被编译成内部方法，随后在 `START/STOP` 时触发。

## 元数据传递

`Meta` 会在调用链中传递：

- trace/span/parent
- token/language/timezone
- result
- 临时文件清理信息

## 结果模型

`Res` 统一表示结果状态：

- `Code == 0` 视为成功
- 其它状态为失败
