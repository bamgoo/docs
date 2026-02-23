---
outline: deep
---

# mutex-redis

## 用途

Redis 分布式锁驱动，使用 `SETNX + EXPIRE`。

## 驱动名

- `redis`

## setting 参数

- `addr` / `server`
- `username` / `user`
- `password` / `pass`
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
