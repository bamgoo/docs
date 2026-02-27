---
outline: deep
---

# search-opensearch

`search` 的 OpenSearch 驱动。

## 驱动名

- `opensearch`

## 配置

```toml
[search]
driver = "opensearch"
prefix = "demo_"

[search.setting]
server = "http://127.0.0.1:9200"
username = ""
password = ""
api_key = ""
timeout = "5s"
```

## 参数

- `server`：OpenSearch 地址
- `username/password`：Basic Auth（可选）
- `api_key`：API Key（可选，优先）
- `timeout`：HTTP 超时
- `prefix`：索引前缀

## 映射

`search` DSL 会映射到 OpenSearch 的 bool/filter/sort/aggs/highlight。
索引同步会把 `search.Index.Attributes` 映射为 `mappings.properties`。
