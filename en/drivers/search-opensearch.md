---
outline: deep
---

# search-opensearch

OpenSearch driver for `search`.

## Driver name

- `opensearch`

## Config

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

## Settings

- `server`: OpenSearch URL
- `username/password`: basic auth (optional)
- `api_key`: API key (optional, higher priority)
- `timeout`: HTTP timeout
- `prefix`: index prefix

## Mapping

`search` DSL maps to OpenSearch bool/filter/sort/aggs/highlight.
`CreateIndex` maps `search.Index.Attributes` to index `mappings.properties`.
