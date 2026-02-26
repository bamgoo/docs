---
outline: deep
---

# data

`data` is bamgoo's unified data module.

## Latest API style

- operations return results directly (no direct `error` return)
- use `db.Error()` to read last error
- `db.Parse(...)` does driver-level query parsing
- supports data mutation watcher (`data.watcher`)
- supports `WithContext/WithTimeout` for unified timeout/cancel
- supports pool settings (`maxOpen/maxIdle/maxLifetime/maxIdleTime`)
- supports pool observability via `data.GetPoolStats()`

## Example

```go
db := data.Base()
defer db.Close()

users := db.Table("user").Query(Map{"status": "active"})
if db.Error() != nil {
  // handle
}

total, items := db.Table("user").Slice(0, 20, Map{"status": "active"})
if db.Error() != nil {
  // handle
}

_ = users
_ = total
_ = items
```

## Timeout And Cancel

```go
ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
defer cancel()

db := data.Base().WithContext(ctx).WithTimeout(1500 * time.Millisecond)
defer db.Close()

rows := db.Table("user").Query(Map{"status": "active"})
if db.Error() != nil {
  // timeout/cancel/error
}
_ = rows
```

## Pool And Cache Capacity

```toml
[data.main]
driver = "postgresql"
url = "postgres://..."
maxOpen = 50
maxIdle = 20
maxLifetime = "30m"
maxIdleTime = "5m"

[data.main.setting]
cache = { enable = true, ttl = "10s", capacity = 5000 }
```

```go
pools := data.GetPoolStats("main")
_ = pools
```

## Field Name Mapping (Optional)

Disabled by default. When enabled, `camelCase <-> snake_case` mapping is applied
(camel in code, snake in database).  
See details: [field name mapping](/en/modules/data-field-mapping)

## Sub Pages

- [query DSL](/en/modules/data-query)
- [write DSL](/en/modules/data-write)
- [advanced](/en/modules/data-advanced)
- [field name mapping](/en/modules/data-field-mapping)
- [API migration guide](/en/modules/data-migration)
- [schema migration (Migrate)](/en/modules/data-schema-migration)

## Drivers

Drivers:
- [data-postgresql](/en/drivers/data-postgresql)
- [data-mysql](/en/drivers/data-mysql)
- [data-sqlite](/en/drivers/data-sqlite)
- [data-mongodb](/en/drivers/data-mongodb)
