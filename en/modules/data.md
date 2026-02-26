---
outline: deep
---

# data

`data` is bamgoo's unified data module.

## Latest API style

- operations return results directly (no direct `error` return)
- use `db.Error()` to read last error
- `db.Parse(...)` does driver-level query parsing

## Example

```go
db := data.Base()
defer db.Close()

users := db.Table("user").Query(Map{"status": "active"})
if db.Error() != nil {
  // handle
}

page := db.Table("user").Page(0, 20, Map{"$withCount": true})
if db.Error() != nil {
  // handle
}

_ = users
_ = page
```

Drivers:
- [data-postgresql](/en/drivers/data-postgresql)
- [data-mysql](/en/drivers/data-mysql)
- [data-sqlite](/en/drivers/data-sqlite)
- [data-mongodb](/en/drivers/data-mongodb)
