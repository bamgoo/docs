---
outline: deep
---

# cron-redis

## 用途

Redis 调度持久化驱动，使用 Hash/List/Key 存储任务、日志和锁。

## 驱动名

- `redis`

## setting 参数

- `addr` / `server` / `host` + `port`
- `username` `password`
- `database`
- `jobs_key`
- `logs_prefix`
- `locks_prefix`
- `log_limit`

## 示例

```toml
[cron]
driver = "redis"

[cron.setting]
addr = "127.0.0.1:6379"
database = 0
jobs_key = "bamgoo:cron:jobs"
logs_prefix = "bamgoo:cron:logs:"
locks_prefix = "bamgoo:cron:locks:"
```
