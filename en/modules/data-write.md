---
outline: deep
---

# data Write DSL

Update operators:
- `$set $inc $unset $push $pull $addToSet $setPath $unsetPath`

```go
old := db.Table("user").First(Map{"id": 1001})
if db.Error() != nil {
  return
}

_ = db.Table("user").Change(old, Map{
  "$set": Map{"status": "active"},
  "$inc": Map{"version": 1},
})
if db.Error() != nil {
  // handle
}
```

## Migration

```go
db.Migrate("user", "order")
if db.Error() != nil {
  // handle
}
```

or convenience helper:

```go
if err := data.Migrate("user", "order"); err != nil {
  // handle
}
```
