---
outline: deep
---

# data 写入 DSL

## 更新操作符

- `$set`
- `$inc`
- `$unset`
- `$push`
- `$pull`
- `$addToSet`
- `$setPath`
- `$unsetPath`

## 示例

```go
old := db.Table("user").First(base.Map{"id": 1001})
if db.Error() != nil {
  return
}

newItem := db.Table("user").Change(old, base.Map{
  "$set": base.Map{"status": "active"},
  "$inc": base.Map{"version": 1},
  "$addToSet": base.Map{"tags": []string{"go", "backend"}},
  "$setPath": base.Map{"profile.nickname": "alice"},
})
if db.Error() != nil {
  // handle
}
_ = newItem
```

## 批量

```go
items := db.Table("user").CreateMany([]base.Map{
  {"name": "u1"},
  {"name": "u2"},
})
if db.Error() != nil {
  // handle
}
_ = items
```

## 迁移

```go
db.Migrate("user", "order")
if db.Error() != nil {
  // handle
}
```

也可以用快捷函数：

```go
if err := data.Migrate("user", "order"); err != nil {
  // handle
}
```
