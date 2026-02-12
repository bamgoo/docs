# config-redis

从 Redis 的 key 加载配置文本，支持 `toml/json`。

## 配置键

- `driver = "redis"`
- `server` / `port`
- `username` / `password`
- `database`
- `key`（默认 `bamgoo-config`）

## 示例

```toml
[config]
driver = "redis"
server = "127.0.0.1"
port = "6379"
database = 0
key = "bamgoo-config"
format = "toml"
```
