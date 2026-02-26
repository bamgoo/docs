---
outline: deep
---

# data Field Name Mapping

This feature maps `camelCase` fields in code to `snake_case` fields in database.

- code: `userId`, `loginTimes`
- database: `user_id`, `login_times`

## Config

Disabled by default. Enable per connection:

```toml
[data]
driver = "postgresql"
mapping = true
```

Multiple connections are supported:

```toml
[data.main]
driver = "postgresql"
mapping = true

[data.analytics]
driver = "mongodb"
mapping = false
```

## Coverage

When enabled, mapping is applied to:

- `Migrate` (table/column/index)
- `Query / First / Count / Aggregate / Group`
- `Insert / Upsert / Update / Delete`
- `Slice / Scan / ScanN`

## Example

```go
bamgoo.Register("user", data.Table{
  Key: "id",
  Fields: base.Vars{
    "id":         {Type: "int"},
    "userId":     {Type: "int"},
    "loginTimes": {Type: "int"},
    "userName":   {Type: "string"},
  },
})

db := data.Base()
defer db.Close()

db.Migrate("user")
if db.Error() != nil { return }

_ = db.Table("user").Insert(base.Map{
  "id":         1,
  "userId":     1001,
  "loginTimes": 1,
  "userName":   "alice",
})
if db.Error() != nil { return }

total, items := db.Table("user").Slice(0, 20, base.Map{
  "userId": 1001,
  "$sort":  base.Map{"loginTimes": base.DESC},
})
if db.Error() != nil { return }

_ = total
_ = items
```

## Notes

- Field names are mapped; value types are not transformed.
- For raw SQL (`Raw/Exec`), use real database field names.
- Custom aggregate aliases (for example `total`) are not forcibly renamed.
