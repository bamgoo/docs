# cache 模块

## 职责

统一缓存访问接口，支持多实例配置与哈希路由。

## 常用 API

- `cache.Write(key, value, expire)`
- `cache.Read(key)`
- `cache.Exists(key)`
- `cache.Delete(key)`
- `cache.Sequence(key, start, step, expire)`

## 示例

```go
import (
  "time"
  "github.com/bamgoo/cache"
  . "github.com/bamgoo/base"
)

_ = cache.Write("user:1", Map{"name": "tom"}, 10*time.Second)
val, _ := cache.Read("user:1")
_ = val
```

## 相关驱动

- [cache-file](/drivers/cache-file)
- [cache-redis](/drivers/cache-redis)
