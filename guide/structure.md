# 仓库结构

基于当前代码，文档建议结构如下：

```text
/
├─ guide/          # 框架介绍、想法、来源、架构、结构
├─ core/           # runtime/base/builtin
├─ modules/        # config/cache/bus/http/web/log/mutex
├─ drivers/        # 各驱动独立页面
└─ examples/       # 最小可运行示例
```

模块与驱动映射（当前已存在）：

- config: default/file/redis
- cache: default/file/redis
- bus: default/nats
- log: default/file/greptime
- mutex: default/redis

后续如果新增模块或驱动，按同样规则直接增页即可，不需要改整体结构。
