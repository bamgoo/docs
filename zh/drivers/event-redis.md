---
outline: deep
---

# event-redis

## 用途

Redis 事件驱动。

- 无 `group` 时：使用 Pub/Sub
- 有 `group` 时：使用 Stream + Consumer Group

## 驱动名

- `redis`

## setting 参数

- `addr` / `server` / `host` + `port`
- `username` `password`
- `database`

## 示例

```toml
[event.default]
driver = "redis"

[event.default.setting]
addr = "127.0.0.1:6379"
database = 0
```
