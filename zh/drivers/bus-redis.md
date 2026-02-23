---
outline: deep
---

# bus-redis

## 用途

Redis 总线驱动，支持请求响应、事件广播、队列投递和节点公告。

## 驱动名

- `redis`

## setting 参数

- `addr` / `server` / `host` + `port`
- `username` `password`
- `database`
- `version`
- `announce`
- `announce_ttl`
- `reply_ttl`

## 示例

```toml
[bus.default]
driver = "redis"

[bus.default.setting]
addr = "127.0.0.1:6379"
database = 0
announce = "10s"
reply_ttl = "30s"
```
