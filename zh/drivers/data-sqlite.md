---
outline: deep
---

# data-sqlite

`data` 模块 SQLite 驱动。

## 驱动名

- `sqlite`

## 配置

```toml
[data]
driver = "sqlite"
url = "file:data.db"

[data.setting]
slow = "100ms"
cache = { enable = true, ttl = "1s" }
```

## 连接参数

当前驱动读取：

- `url`（推荐）
- `setting.dsn`（兜底）
- 都未设置时默认 `file:data.db`

## 方言能力

- `ILike`：不支持（内部兼容）
- `Returning`：不支持
- `$contains`：字符串匹配兜底
- `$overlap/$elemMatch`：不直接支持
- JSON path 更新：支持（`json_set`）

## 示例

```go
users, _ := data.Base().Table("user").Query(Map{
    "name": Map{"$like": "%alice%"},
    "$limit": 20,
})
_ = users
```
