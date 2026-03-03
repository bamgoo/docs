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

Single vs many update/delete:

```go
// Update: only first matched row (default by primary key ASC when no $sort)
one := db.Table("user").Update(Map{
  "$set": Map{"status": "active"},
}, Map{"status": "pending"})

// UpdateMany: all matched rows
many := db.Table("user").UpdateMany(Map{
  "$set": Map{"status": "active"},
}, Map{"status": "pending"})

// Delete: only first matched row
delOne := db.Table("user").Delete(Map{"status": "inactive"})

// DeleteMany: all matched rows
delMany := db.Table("user").DeleteMany(Map{"status": "inactive"})
_, _, _, _ = one, many, delOne, delMany
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
