---
outline: deep
---

# search 模块

`search` 提供统一的全文检索接口，通过驱动路由到不同搜索引擎。

## 核心 API

- 按已注册的 `search.Index` 自动同步索引结构
- `Upsert(index, rows ...Map)`
- `Clear(index)`
- `Delete(index, ids)`
- `Search(index, keyword, args ...Any)`
- `Count(index, keyword, args ...Any)`
- `Signature(index, keyword, args ...Any)`
- `GetCapabilities(index)` / `ListCapabilities()`

## 索引结构定义

`search.Index` 支持 `Attributes`（与 `data.Table.Fields` 风格一致）。

- 写入前：按 `Mapping` 处理数据后再写索引。
- 查询后：按 `Mapping` 处理命中数据后再返回。
- 建索引时：驱动可按 `Attributes` 自动生成后端结构。

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

## 配置

```toml
[search]
driver = "file"
weight = 1
prefix = "demo"
timeout = "3s"

[search.setting]
path = "data/search"
```

## 查询 DSL

`Search(index, keyword, Map{...})` 支持（推荐使用 `$` 前缀，与 `data` 模块保持一致）：

- `$filters`：字段筛选
- `$sort`：排序
- `$offset`、`$limit`：分页
- `$fields`（同 `$select`）：返回字段
- `$facets`：分面
- `$highlight`：高亮
- `$prefix`：前缀匹配
- `$raw`、`$setting`：驱动扩展

高亮结果会直接写回 `hits[].payload` 对应字段。

### filter 操作符

- `$eq` / `$ne`
- `$in` / `$nin`
- `$gt` / `$gte` / `$lt` / `$lte`
- `$range`（使用 `min/max`）

当前只支持 Map 风格参数。
旧格式已移除：

- sort 的 `field/desc`
- filter 的 `op/value`

## 示例

```go
res, err := search.Search("article", "搜索", Map{
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

过滤示例：

```go
Map{"$filters": Map{"category": "123"}}
Map{"$filters": Map{"category": Map{"$eq": 123}}}
Map{"$filters": Map{"score": Map{"$gt": 100, "$lt": 500}}}
Map{"$sort": Map{"score": DESC}}
Map{"$sort": []Map{{"score": DESC}, {"id": ASC}}}
Map{"category": "tech", "$sort": Map{"score": DESC"}} // 顶层字段也会作为过滤条件
```

## 驱动

- `/zh/drivers/search-file`
- `/zh/drivers/search-meilisearch`
- `/zh/drivers/search-opensearch`
- `/zh/drivers/search-elasticsearch`
