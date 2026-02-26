---
outline: deep
---

# data

`data` 是 bamgoo 的统一数据层模块，支持 SQL 与 MongoDB 驱动。

## 核心变化（最新版）

- API 改为结果直返，不直接返回 `error`
- 统一通过 `db.Error()` 获取最后错误
- 新增 `db.Parse(...)`（驱动级解析）
- 支持 `Page + $withCount`
- 支持事务 `Tx`
- 支持迁移 `Migrate`
- 支持缓存（按表维度失效）

## 安装

```bash
go get github.com/bamgoo/data
go get github.com/bamgoo/data-postgresql
go get github.com/bamgoo/data-mysql
go get github.com/bamgoo/data-sqlite
go get github.com/bamgoo/data-mongodb
```

## 使用风格

```go
db := data.Base()
defer db.Close()

users := db.Table("user").Query(base.Map{"status": "active"})
if db.Error() != nil {
  // handle
}

page := db.Table("user").Page(0, 20, base.Map{
  "$withCount": true,
  "$sort": base.Map{"id": base.DESC},
})
if db.Error() != nil {
  // handle
}

_ = users
_ = page
```

## Parse

```go
where, params := db.Parse(base.Map{
  "status": "active",
  "age": base.Map{"$gte": 18},
})
if db.Error() != nil {
  // handle
}
_ = where
_ = params
```

## 事务

```go
_ = db.Tx(func(tx data.DataBase) error {
  _ = tx.Table("wallet").Update(base.Map{"$inc": base.Map{"balance": -100}}, base.Map{"id": 1})
  if tx.Error() != nil { return tx.Error() }

  _ = tx.Table("wallet").Update(base.Map{"$inc": base.Map{"balance": 100}}, base.Map{"id": 2})
  if tx.Error() != nil { return tx.Error() }

  return nil
})
```

## 子页面

- [查询 DSL](/zh/modules/data-query)
- [写入 DSL](/zh/modules/data-write)
- [高级用法](/zh/modules/data-advanced)
- 驱动：
  - [data-postgresql](/zh/drivers/data-postgresql)
  - [data-mysql](/zh/drivers/data-mysql)
  - [data-sqlite](/zh/drivers/data-sqlite)
  - [data-mongodb](/zh/drivers/data-mongodb)
