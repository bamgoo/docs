---
outline: deep
---

# 运行时生命周期

`bamgoo.Go()` 会执行完整生命周期。

## 执行顺序

1. `Load`：读取配置（通过 `ConfigHook`）
2. `Setup`：各模块做默认值与预处理
3. `Open`：连接驱动
4. `Start`：启动模块
5. `Wait`：阻塞等待退出信号
6. `Stop`：逆序停止模块
7. `Close`：逆序释放资源

## 触发器时机

- `START`：在 `Start` 完成后触发
- `STOP`：在模块 `Stop` 前触发

这保证了：

- 启动后逻辑能访问已就绪模块
- 停机前逻辑还能访问日志、总线等能力

## 运行时接口

模块只要实现统一接口即可接入：

```go
Register(string, Any)
Config(Map)
Setup()
Open()
Start()
Stop()
Close()
```

## 只初始化不运行

`bamgoo.Ready()` 会执行到 `Open`，适合测试、预热和嵌入式场景。
