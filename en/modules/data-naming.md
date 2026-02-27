---
outline: deep
---

# data Naming Semantics

`data` uses SQL-first naming:

- `Insert`: insert one row/document
- `InsertMany`: insert multiple rows/documents
- `Upsert`: update if exists, otherwise insert
- `UpsertMany`: batch upsert
- `Change`: update one entity by primary key
- `Update`: update many by filter
- `Remove`: delete one entity by primary key
- `Delete`: delete many by filter

## Recommended Usage

```go
item := db.Table("user").Insert(Map{
  "name": "alice",
})

item = db.Table("user").Change(item, Map{
  "$set": Map{"status": "active"},
})

_ = db.Table("user").Remove(Map{"id": item["id"]})
```

## Watcher Mapping

Watcher uses the same write-op names:

- `Insert`
- `Update`
- `Upsert`
- `Delete`
- `Action` (all write operations)

```go
bamgoo.Register("user", data.Watcher{
  Action: func(m data.Mutation) {},
  Insert: func(m data.Mutation) {},
  Update: func(m data.Mutation) {},
  Upsert: func(m data.Mutation) {},
  Delete: func(m data.Mutation) {},
})
```
