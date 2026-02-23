---
outline: deep
---

# mutex

## 职责

分布式互斥锁抽象，支持多连接与权重路由。

## 配置结构

```toml
[mutex.default]
driver = "redis"
weight = 1
prefix = "lock:"
expire = "3s"

[mutex.default.setting]
addr = "127.0.0.1:6379"
database = 0
```

字段：

- `driver`
- `weight`
- `prefix`
- `expire`（默认 `1s`）
- `setting`

## 对外 API

- `mutex.Lock / Unlock / Locked`
- `mutex.LockOn / UnlockOn / LockedOn`
- `mutex.Key(args...)`

## 使用示例

```go
lock, err := mutex.Lock("order", 1001)
if err != nil {
	return
}
defer lock.Unlock()
```

## 驱动

- `default`（内存锁）
- [mutex-redis](/zh/drivers/mutex-redis)
