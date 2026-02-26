---
outline: deep
---

# data API Migration Guide (error return -> Error())

## Old style

```go
item, err := db.Table("user").First(Map{"id": 1})
if err != nil {
  return err
}
_ = item
```

## New style

```go
item := db.Table("user").First(Map{"id": 1})
if db.Error() != nil {
  return db.Error()
}
_ = item
```

## Rules

- remove direct `err` return handling from table/view/model calls
- check `db.Error()` after operations
- inside Tx, check `tx.Error()`

## Error lifecycle mode

`data.setting.errorMode`:

- `auto-clear` (default): `db.Error()` consumes and clears the error
- `sticky`: error stays until `db.ClearError()`

```toml
[data.setting]
errorMode = "auto-clear"
```
