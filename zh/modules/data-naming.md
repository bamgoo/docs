---
outline: deep
---

# data 命名语义

`data` 模块采用 SQL 优先的命名：

- `Insert`: 新增单条
- `InsertMany`: 批量新增
- `Upsert`: 存在即更新，不存在则新增
- `UpsertMany`: 批量 upsert
- `Change`: 按实体主键更新单条
- `Update`: 按条件批量更新
- `Remove`: 按实体主键删除单条
- `Delete`: 按条件批量删除

## 推荐使用

```go
item := db.Table("user").Insert(base.Map{
  "name": "alice",
})

item = db.Table("user").Change(item, base.Map{
  "$set": base.Map{"status": "active"},
})

_ = db.Table("user").Remove(base.Map{"id": item["id"]})
```

## Watcher 对应关系

Watcher 使用同一组写操作名：

- `Insert`
- `Update`
- `Upsert`
- `Delete`
- `Action`（监听全部写操作）

```go
bamgoo.Register("user", data.Watcher{
  Action: func(m data.Mutation) {},
  Insert: func(m data.Mutation) {},
  Update: func(m data.Mutation) {},
  Upsert: func(m data.Mutation) {},
  Delete: func(m data.Mutation) {},
})
```
