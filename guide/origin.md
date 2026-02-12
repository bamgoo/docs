# 来源与演进

按当前仓库结构，bamgoo 处于“框架核心 + 模块仓 + 驱动仓 + 示例仓”并行演进状态。

- `bamgoo/`：运行时与核心能力。
- `base/`：公共类型与结果结构。
- `builtin/`：默认注册项。
- 各模块仓：`config/ cache/ bus/ http/ web/ log/ mutex/`。
- 各驱动仓：`config-file`、`cache-redis` 等。
- `examples/`：可运行示例。

文档站应作为统一入口，把这些仓库按“概念一致”的方式组织，减少新用户在多仓之间跳转成本。
