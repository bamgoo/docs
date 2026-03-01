---
outline: deep
---

# data 字段命名映射

用于把代码中的 `camelCase` 字段自动映射到数据库中的 `snake_case`。

- 代码层：`userId`, `loginTimes`
- 数据库层：`user_id`, `login_times`

## 配置

默认关闭，按连接配置开启：

```toml
[data]
driver = "postgresql"
mapping = true
```

也支持多连接：

```toml
[data.main]
driver = "postgresql"
mapping = true

[data.analytics]
driver = "mongodb"
mapping = false
```

## 生效范围

开启后，以下能力都会自动映射：

- `Migrate` 建表/补列/索引
- `Query / First / Count / Aggregate / Group`
- `Insert / Upsert / Update / Delete`
- `Slice / Scan / ScanN`

## 示例

```go
infra.Register("user", data.Table{
  Key: "id",
  Fields: base.Vars{
    "id":         {Type: "int"},
    "userId":     {Type: "int"},
    "loginTimes": {Type: "int"},
    "userName":   {Type: "string"},
  },
})

db := data.Base()
defer db.Close()

db.Migrate("user")
if db.Error() != nil { return }

_ = db.Table("user").Insert(base.Map{
  "id":         1,
  "userId":     1001,
  "loginTimes": 1,
  "userName":   "alice",
})
if db.Error() != nil { return }

total, items := db.Table("user").Slice(0, 20, base.Map{
  "userId": 1001,
  "$sort":  base.Map{"loginTimes": base.DESC},
})
if db.Error() != nil { return }

_ = total
_ = items
```

## 注意

- 只做字段名映射，不做类型转换。
- 复杂原生 SQL（`Raw/Exec`）需自己使用数据库真实字段名。
- 聚合结果里的自定义别名（如 `total`）不会被强制改名。
