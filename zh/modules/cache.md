---
outline: deep
---

# cache

## 职责

统一缓存读写接口，支持多实例与哈希环路由。

## 配置结构

```toml
[cache.default]
driver = "redis"
weight = 1
prefix = "app:"
codec = "json"
expire = "30s"

[cache.default.setting]
addr = "127.0.0.1:6379"
database = 0
```

字段：

- `driver`（默认 `default`）
- `weight`（默认 `1`）
- `prefix`
- `codec`（默认 `json`）
- `expire`
- `setting`

## 对外 API

- `cache.Read / ReadFrom / ReadData`
- `cache.Write / WriteTo / WriteData`
- `cache.Exists / Delete`
- `cache.Sequence`
- `cache.Keys / Clear`

## 驱动

- `default`（内存）
- [cache-file](/zh/drivers/cache-file)
- [cache-redis](/zh/drivers/cache-redis)
