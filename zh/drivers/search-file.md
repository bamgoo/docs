---
outline: deep
---

# search-file

`search` 的文件驱动，基于 Bleve。

## 驱动名

- `file`

## 配置

```toml
[search]
driver = "file"
prefix = "demo"

[search.setting]
path = "store/search"
```

## 参数

- `path`：bleve 索引目录（默认 `store/search`）
- `prefix`：索引前缀

## 说明

- 适合本地和小项目。
- 不依赖外部搜索服务。
- 对 CJK 关键词做了兜底扫描，提升简单场景命中率。
- 索引同步会根据 `search.Index.Attributes` 生成 Bleve 字段映射。
