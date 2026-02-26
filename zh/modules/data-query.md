---
outline: deep
---

# data 查询 DSL

## 常用操作符

- 比较：`$eq $ne $gt $gte $lt $lte $in $nin`
- 逻辑：`$and $or $nor $not`
- 文本：`$like $ilike $regex`
- JSON/数组：`$contains $overlap $elemMatch`
- 选项：`$select $sort $limit $offset $after $withCount`
- 聚合：`$group $agg $having`
- 关联：`$join`

## $sort 说明（单字段 / 多字段）

- 单字段排序：使用 `Map`
- 多字段排序：使用 `[]Map`（有序，推荐）

```go
// 单字段
rows1 := db.Table("article").Query(base.Map{
  "$sort": base.Map{"id": base.DESC},
})
_ = rows1

// 多字段（保证顺序）
rows2 := db.Table("article").Query(base.Map{
  "$sort": []base.Map{
    {"id": base.ASC},
    {"views": base.DESC},
  },
})
_ = rows2
```

## 示例

```go
rows := db.View("order").Query(base.Map{
  "$select": []string{"order.id", "u.name", "order.amount"},
  "$join": []base.Map{{
    "from": "users",
    "alias": "u",
    "on": base.Map{"order.user_id": base.Map{"$eq": "$field:u.id"}},
  }},
  "u.status": "active",
  "$sort": base.Map{"order.id": base.DESC},
  "$limit": 20,
})
if db.Error() != nil {
  // handle
}
_ = rows
```
