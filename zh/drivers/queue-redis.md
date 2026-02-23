---
outline: deep
---

# queue-redis

## 用途

Redis 队列驱动，基于 `LPUSH/BRPOP`，支持延迟发布与重试。

## 驱动名

- `redis`

## setting 参数

- `addr` / `server` / `host` + `port`
- `username` `password`
- `database`

## 示例

```toml
[queue.default]
driver = "redis"

[queue.default.setting]
addr = "127.0.0.1:6379"
database = 0
```
