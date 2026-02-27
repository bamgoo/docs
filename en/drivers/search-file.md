---
outline: deep
---

# search-file

File-based search driver for `search`, implemented with Bleve.

## Driver name

- `file`

## Config

```toml
[search]
driver = "file"
prefix = "demo"

[search.setting]
path = "store/search"
```

## Settings

- `path`: bleve index root directory (default: `store/search`)
- `prefix`: index name prefix

## Notes

- Good for local/small projects.
- No external service required.
- Includes fallback scan for better CJK keyword matching in simple scenarios.
- index sync uses `search.Index.Attributes` to build Bleve field mappings.
