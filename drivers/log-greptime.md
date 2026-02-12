# log-greptime

GreptimeDB 日志驱动（走 MySQL 协议写入）。

## 配置键

`log.<name>.setting` 中可设置：

- `host` / `port`
- `username` / `password`
- `database`
- `table`
- `timeout`

## 示例

```toml
[log.default]
driver = "greptime"
level = "info"

[log.default.setting]
host = "127.0.0.1"
port = 4002
database = "public"
table = "logs"
```
