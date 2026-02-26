---
outline: deep
---

# data-mongodb

`data` 模块 MongoDB 驱动。

## 驱动名

- `mongodb`
- `mongo`
- `mgdb`

## 配置

```toml
[data]
driver = "mongodb"
url = "mongodb://127.0.0.1:27017"
schema = "app"

[data.setting]
database = "app"
```

## 特性

- 支持 data DSL 查询与更新
- 支持事务（Mongo session transaction）
- 支持 join：
  - `localField + foreignField`
  - `on` 表达式（lookup pipeline）
- 支持 Raw/Exec 的 Mongo 命令模式

## Raw 示例

```go
rows := db.Raw("aggregate orders", []base.Map{
  {"$match": base.Map{"status": "paid"}},
  {"$group": base.Map{"_id": "$user_id", "total": base.Map{"$sum": "$amount"}}},
})
if db.Error() != nil {
  // handle
}
_ = rows
```
