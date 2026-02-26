---
outline: deep
---

# search module

`search` provides unified full-text search APIs and routes requests to different backends through drivers.

## Core APIs

- `CreateIndex(name, index)`
- `DropIndex(name)`
- `Upsert(index, docs)`
- `Delete(index, ids)`
- `Search(index, keyword, args ...Any)`
- `Count(index, keyword, args ...Any)`
- `Suggest(index, text, limit)`

## Index Schema

`search.Index` supports `Attributes` (same style as `data.Table.Fields`).

- Write path: docs are normalized by `Mapping` before upsert.
- Read path: hits are normalized by `Mapping` before returning.
- CreateIndex path: drivers can generate backend index schema from attributes.

```go
bamgoo.Register("article", search.Index{
  Primary: "id",
  Attributes: Vars{
    "id":       Var{Type: "string", Required: true},
    "title":    Var{Type: "string", Required: true},
    "content":  Var{Type: "string"},
    "category": Var{Type: "string"},
    "score":    Var{Type: "float"},
    "created":  Var{Type: "timestamp"},
  },
})
```

## Config

```toml
[search]
driver = "file"
weight = 1
prefix = "demo"
timeout = "3s"

[search.setting]
path = "data/search"
```

## Query DSL

`Search(index, keyword, Map{...})` supports (`$`-prefixed keys recommended, aligned with `data`):

- `$filters`: field conditions
- `$sort`: sorting rules
- `$offset`, `$limit`: pagination
- `$fields` (same as `$select`): selected fields
- `$facets`: facet aggregations
- `$highlight`: highlight fields
- `$raw`, `$setting`: driver specific extension

Highlight values are written back into `hits[].payload` fields directly.

### filter operators

- `$eq` / `$ne`
- `$in` / `$nin`
- `$gt` / `$gte` / `$lt` / `$lte`
- `$range` (`min/max`)

Only map-style args are supported now.
Legacy styles are removed:

- sort `field/desc`
- filter `op/value`

## Example

```go
res, err := search.Search("article", "search", Map{
  "$filters": Map{
    "category": "tech",
    "score": Map{"$gte": 8.5},
  },
  "$sort": Map{"score": DESC},
  "$offset": 0,
  "$limit":  20,
  "$fields": []string{"title", "category", "score"},
  "$facets": []string{"category"},
  "$highlight": []string{"title", "content"},
})
_ = res
_ = err
```

Filter examples:

```go
Map{"$filters": Map{"category": "123"}}
Map{"$filters": Map{"category": Map{"$eq": 123}}}
Map{"$filters": Map{"score": Map{"$gt": 100, "$lt": 500}}}
Map{"$sort": Map{"score": DESC}}
Map{"$sort": []Map{{"score": DESC}, {"id": ASC}}}
Map{"category": "tech", "$sort": Map{"score": DESC"}} // top-level fields are also treated as filters
```

## Drivers

- `/en/drivers/search-file`
- `/en/drivers/search-meilisearch`
- `/en/drivers/search-opensearch`
- `/en/drivers/search-elasticsearch`
