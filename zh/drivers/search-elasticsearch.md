---
outline: deep
---

# search-elasticsearch

`search` 的 Elasticsearch 驱动。

## 驱动名

- `elasticsearch`
- `es`（别名）

## 配置

```toml
[search]
driver = "elasticsearch"
prefix = "demo_"

[search.setting]
server = "http://127.0.0.1:9200"
username = ""
password = ""
api_key = ""
timeout = "5s"
```

## 参数

- `server`：Elasticsearch 地址
- `username/password`：Basic Auth（可选）
- `api_key`：API Key（可选，优先）
- `timeout`：HTTP 超时
- `prefix`：索引前缀

## 映射

`search` DSL 会映射到 Elasticsearch 的 bool/filter/sort/aggs/highlight。
`CreateIndex` 会把 `search.Index.Attributes` 映射为 `mappings.properties`。
