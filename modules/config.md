# config 模块

## 职责

从环境变量和命令行参数中解析配置来源，并通过 driver 加载配置内容。

默认驱动是文件驱动（`default`）。

## 约定

环境变量前缀：`BAMGOO_`

命令行支持：

- `app config.toml`
- `app --driver=file --file=config.toml`
- `app --driver=redis --server=127.0.0.1 --key=bamgoo-config`

## 相关驱动

- [config-file](/drivers/config-file)
- [config-redis](/drivers/config-redis)
