---
outline: deep
---

# search-elasticsearch

Elasticsearch driver for `search`.

## Driver name

- `elasticsearch`
- `es` (alias)

## Config

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

## Settings

- `server`: Elasticsearch URL
- `username/password`: basic auth (optional)
- `api_key`: API key (optional, higher priority)
- `timeout`: HTTP timeout
- `prefix`: index prefix

## Mapping

`search` DSL maps to Elasticsearch bool/filter/sort/aggs/highlight.
`CreateIndex` maps `search.Index.Attributes` to index `mappings.properties`.
