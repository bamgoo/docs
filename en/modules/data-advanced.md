---
outline: deep
---

# data Advanced

```go
where, params := db.Parse(Map{"status": "active"})
if db.Error() != nil {
  // handle
}
_ = where
_ = params
```

Mongo driver supports command-style Raw/Exec:

```go
rows := db.Raw("aggregate orders", []Map{{"$match": Map{"status": "paid"}}})
if db.Error() != nil {
  // handle
}
_ = rows
```
