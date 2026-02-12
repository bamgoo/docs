# mutex-redis

Redis 分布式互斥锁驱动。

## 配置键

`mutex.<name>.setting` 中可设置：

- `addr` 或 `server`
- `username` / `password`
- `database`

## 示例

```toml
[mutex.default]
driver = "redis"
expire = "3s"

[mutex.default.setting]
addr = "127.0.0.1:6379"
database = 0
```
