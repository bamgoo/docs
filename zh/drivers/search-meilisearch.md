---
outline: deep
---

# search-meilisearch

`search` 的 Meilisearch 驱动。

## 驱动名

- `meilisearch`
- `meili`（别名）

## 配置

```toml
[search]
driver = "meilisearch"
prefix = "demo"

[search.setting]
server = "http://127.0.0.1:7700"
api_key = ""
timeout = "3s"
```

## 参数

- `server`：Meilisearch 地址
- `api_key`：API Key（可选）
- `timeout`：HTTP 超时
- `prefix`：索引前缀

## 映射

`search` DSL 会映射到 Meili：

- `filters` -> `filter`
- `sort` -> `sort`
- `facets` -> `facets`
- `highlight` -> `attributesToHighlight`
- `CreateIndex` 会应用基于 `search.Index.Attributes` 生成的 settings
- 高亮结果会直接合并到原字段返回（不额外生成 `highlight` 字段）
