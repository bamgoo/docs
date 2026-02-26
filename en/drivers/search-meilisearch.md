---
outline: deep
---

# search-meilisearch

Meilisearch driver for `search`.

## Driver name

- `meilisearch`
- `meili` (alias)

## Config

```toml
[search]
driver = "meilisearch"
prefix = "demo"

[search.setting]
server = "http://127.0.0.1:7700"
api_key = ""
timeout = "3s"
```

## Settings

- `server`: meilisearch server URL
- `api_key`: API key (optional)
- `timeout`: HTTP timeout
- `prefix`: index prefix

## Mapping

`search` DSL is mapped to Meili search payload:

- `filters` -> `filter` expression
- `sort` -> `sort`
- `facets` -> `facets`
- `highlight` -> `attributesToHighlight`
- `CreateIndex` applies settings generated from `search.Index.Attributes`
- highlighted values are merged back into original payload fields (no extra `highlight` field)
