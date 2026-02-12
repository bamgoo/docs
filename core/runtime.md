# bamgoo 运行时

运行时对外最关键的 API：

- `bamgoo.Register(...)`
- `bamgoo.Ready()`
- `bamgoo.Go()`
- `bamgoo.Override(true|false)`

## 生命周期职责

- `Load`：读取配置（由 config 模块提供实现）。
- `Setup`：归一化各模块配置。
- `Open`：建立连接。
- `Start`：启动服务。
- `Stop/Close`：逆序释放资源。

## 注册模型

`Register` 会把对象分发给所有已挂载模块，每个模块自行识别它关心的类型。

这就是为什么路由、驱动、配置都能共用一套注册入口。
