# cache-redis

Redis 缓存驱动，适合分布式共享缓存。

## 配置键

`cache.<name>.setting` 中可设置：

- `server` 或 `addr`
- `username` / `password`
- `database`

## 示例

```toml
[cache.default]
driver = "redis"
expire = "30s"

[cache.default.setting]
addr = "127.0.0.1:6379"
database = 0
```
