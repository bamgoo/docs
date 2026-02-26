---
outline: deep
---

# data 高级用法

## Slice（total + items）

```go
total, items := db.Table("user").Slice(0, 20, base.Map{
  "status": "active",
})
if db.Error() != nil {
  // handle
}
_ = total
_ = items
```

## Raw / Exec

SQL 驱动中 `Raw/Exec` 是 SQL；Mongo 驱动中是命令模式。

```go
rows := db.Raw("find users", base.Map{"status": "active"})
if db.Error() != nil {
  // handle
}
_ = rows
```

## 能力探测

```go
caps, err := data.GetCapabilities()
if err != nil {
  return
}
_ = caps
```
