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

## 缓存失效同步（多节点）

`data` 会通过内部服务 `_data.cache.invalidate` + `bamgoo.Broadcast` 同步按表失效事件。  
默认走 BusHook（通常是 `bus` 模块），可替换自定义实现。

## 数据变更 Watcher

Watcher 现在按“表模式”匹配（支持多级表名），不再用 `table.op` 形式。

```toml
[data.watcher]
enable = true
workers = 2
queue = 2048
overflow = "drop" # drop | block
payload = "minimal" # minimal | full
```

```go
bamgoo.Register("*", data.Watcher{
	Action: func(m data.Mutation) {
		// 任意写操作（insert/update/upsert/delete）
	},
})

bamgoo.Register("user", data.Watcher{
	Insert: func(m data.Mutation) {},
	Update: func(m data.Mutation) {},
	Upsert: func(m data.Mutation) {},
	Delete: func(m data.Mutation) {},
})

bamgoo.Register("sys.*", data.Watcher{
	Action: func(m data.Mutation) {
		// 匹配 sys.staff / sys.role / sys.staff.detail ...
	},
})
```
