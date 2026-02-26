---
outline: deep
---

# data Query DSL

Supported groups:
- compare: `$eq $ne $gt $gte $lt $lte $in $nin`
- logic: `$and $or $nor $not`
- text: `$like $ilike $regex`
- json/array: `$contains $overlap $elemMatch`
- options: `$select $sort $limit $offset $after $withCount`
- aggregate: `$group $agg $having`
- join: `$join`

## `$sort` (single field vs multi-field)

- Single-field sort: use `Map`
- Multi-field sort: use `[]Map` to keep deterministic order

```go
// single field
rows1 := db.Table("article").Query(Map{
  "$sort": Map{"id": DESC},
})
_ = rows1

// multi-field (ordered)
rows2 := db.Table("article").Query(Map{
  "$sort": []Map{
    {"id": ASC},
    {"views": DESC},
  },
})
_ = rows2
```

```go
rows := db.View("order").Query(Map{
  "$join": []Map{{
    "from": "users",
    "alias": "u",
    "on": Map{"order.user_id": Map{"$eq": "$field:u.id"}},
  }},
})
if db.Error() != nil {
  // handle
}
_ = rows
```
