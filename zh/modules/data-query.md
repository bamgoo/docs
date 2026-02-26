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
  "$sort": base.Map{"order.id": -1},
  "$limit": 20,
})
if db.Error() != nil {
  // handle
}
_ = rows
```
