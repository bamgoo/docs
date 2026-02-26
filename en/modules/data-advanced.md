---
outline: deep
---

# data Advanced

```go
where, params := db.Parse(Map{"status": "active"})
if db.Error() != nil {
  // handle
}
_ = where
_ = params
```

Mongo driver supports command-style Raw/Exec:

```go
rows := db.Raw("aggregate orders", []Map{{"$match": Map{"status": "paid"}}})
if db.Error() != nil {
  // handle
}
_ = rows
```

## Cache Invalidation Sync (Multi-node)

`data` syncs table-level cache invalidation via internal service `_data.cache.invalidate`
and `bamgoo.Broadcast`.  
It uses BusHook by default (usually `bus` module), and remains replaceable.

## Data Mutation Watcher

Watcher matching is table-pattern based (supports dotted table names), not `table.op`.

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
		// any write op (insert/update/upsert/delete)
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
		// matches sys.staff / sys.role / sys.staff.detail ...
	},
})
```
