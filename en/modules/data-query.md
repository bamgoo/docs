---
outline: deep
---

# data Query DSL

Supported groups:
- compare: `$eq $ne $gt $gte $lt $lte $in $nin`
- logic: `$and $or $nor $not`
- text: `$like $ilike $regex`
- json/array: `$contains $overlap $elemMatch`
- options: `$select $sort $limit $offset $after`
- scan: `$batch` (batched scanning)
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

JSON field sort also supports a unified syntax (driver-specific compilation underneath):

```go
rows3 := db.Table("article").Query(Map{
  "$sort": Map{"count.views": DESC},
})
_ = rows3
```

Resolution order:
- If `count` is a join/base alias, it is parsed as `alias.field`.
- Otherwise, if `count` is a JSON field, it is parsed as JSON path sort.

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

## JSON Path Query

```go
rows := db.Table("article").Query(Map{
  "metadata.name": "xxxx",
})
_ = rows
```

## Batched Scan

```go
res := db.Table("article").Scan(func(row Map) Res {
  return infra.OK
}, Map{
  "status": "active",
  "$batch": 500,
})
_ = res
```
