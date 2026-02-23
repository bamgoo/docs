---
outline: deep
---

# cache-file

## 用途

基于 BuntDB 的文件缓存驱动。

## 驱动名

- `file`

## setting 参数

- `file` / `path` / `db`：数据库文件路径（默认 `cache.db`）

## 示例

```toml
[cache.default]
driver = "file"

[cache.default.setting]
file = "store/cache.db"
```
