---
outline: deep
---

# cache-redis

## 用途

Redis 缓存驱动。

## 驱动名

- `redis`

## setting 参数

- `addr` / `server`
- `username` `password`
- `database`

## 示例

```toml
[cache.default]
driver = "redis"

[cache.default.setting]
addr = "127.0.0.1:6379"
database = 0
```
