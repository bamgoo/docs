---
outline: deep
---

# data 高级用法

## Page + withCount

```go
page := db.Table("user").Page(0, 20, base.Map{
  "status": "active",
  "$withCount": true,
})
if db.Error() != nil {
  // handle
}
_ = page.Total
_ = page.Items
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
