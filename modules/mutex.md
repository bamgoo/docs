# mutex 模块

## 职责

提供分布式互斥锁抽象。

## 常用 API

- `mutex.Lock(args...)`
- `mutex.Unlock(args...)`
- `mutex.LockOn(conn, args...)`
- `mutex.Locked(args...)`

## 示例

```go
import (
  "time"
  "github.com/bamgoo/mutex"
)

lock, err := mutex.Lock("order", 1001, time.Second*5)
if err != nil {
  return
}
defer lock.Unlock()
```

## 相关驱动

- 默认内存锁驱动
- [mutex-redis](/drivers/mutex-redis)
