---
outline: deep
---

# data 接口迁移指南（error 返回 -> Error()）

## 旧写法

```go
item, err := db.Table("user").First(base.Map{"id": 1})
if err != nil {
  return err
}
_ = item
```

## 新写法

```go
item := db.Table("user").First(base.Map{"id": 1})
if db.Error() != nil {
  return db.Error()
}
_ = item
```

## 一般迁移规则

- 去掉 `, err` 接收
- 操作后统一检查 `db.Error()`
- 事务中检查 `tx.Error()`

## 错误生命周期模式

`data.setting.errorMode` 可配置：

- `auto-clear`（默认）：读取 `db.Error()` 后自动清空
- `sticky`：错误会保留，需手动 `db.ClearError()`

```toml
[data.setting]
errorMode = "auto-clear"
```
