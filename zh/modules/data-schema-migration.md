---
outline: deep
---

# data 结构迁移（Migrate）

`db.Migrate(...)` 用于把已注册的 `data.Table` 结构同步到数据库。

## 它会做什么

- 建表：`CREATE TABLE IF NOT EXISTS`
- 补列：缺失字段会 `ALTER TABLE ADD COLUMN`
- 建索引：按 `Indexes`（或兼容旧 `setting.indexes`）创建

## 它不会做什么

- 不自动删列
- 不自动改已有列类型
- 不自动重命名列

## 典型用法

```go
bamgoo.Register("user", data.Table{
  Key: "id",
  Fields: base.Vars{
    "id":    {Type: "int"},
    "name":  {Type: "string", Required: true},
    "email": {Type: "string"},
  },
  Indexes: []data.Index{
    {Name: "idx_user_email", Fields: []string{"email"}, Unique: true},
  },
})

func onStart() {
  db := data.Base("main")
  defer db.Close()

  db.Migrate("user") // 或 db.Migrate() 迁移全部 table
  if db.Error() != nil {
    panic(db.Error())
  }
}
```

## 快捷函数

```go
if err := data.Migrate("user", "order"); err != nil {
  panic(err)
}

if err := data.MigrateOn("main", "user"); err != nil {
  panic(err)
}
```

## Plan / Diff

```go
plan, err := data.MigratePlan("user", "order")
if err != nil { panic(err) }
_ = plan.Actions

diff, err := data.MigrateDiff("user")
if err != nil { panic(err) }
_ = diff.Actions
```

## 版本化迁移（Up/Down）

```go
data.RegisterMigration("20260226_001_create_user_ext", data.Migration{
  Version: "20260226_001",
  Name:    "create user_ext",
  Up: func(db data.DataBase) error {
    _ = db.Exec(`CREATE TABLE IF NOT EXISTS user_ext (id BIGINT PRIMARY KEY, note TEXT)`)
    return db.Error()
  },
  Down: func(db data.DataBase) error {
    _ = db.Exec(`DROP TABLE IF EXISTS user_ext`)
    return db.Error()
  },
})

// 执行全部未应用 Up
if err := data.MigrateUp(); err != nil { panic(err) }

// 回滚最近 1 个版本
if err := data.MigrateDown(1); err != nil { panic(err) }
```

## 可选设置

默认为了安全，新增列不会自动带 `NOT NULL`。

如果你确认可执行，可在表级设置：

```go
data.Table{
  Setting: base.Map{
    "migrateNotNullOnAdd": true,
  },
}
```

迁移策略与并发索引（Config 级）：

```toml
[data]

[data.migrate]
mode = "safe" # safe / strict / danger
concurrentIndex = true # PostgreSQL: CREATE INDEX CONCURRENTLY
timeout = "5m"
lockTimeout = "30s"
retry = 2
retryDelay = "500ms"
jitter = "250ms"
```

- `safe`：只做非破坏性变更（建表/补列/补索引）
- `strict`：输出破坏性漂移（不自动执行）
- `danger`：允许执行破坏性变更（删多余列/索引）

多节点启动保护（建议开启）：
- 迁移分布式锁（避免并发节点互撞）
- 锁等待超时
- 执行重试（短暂死锁/超时）
- 抖动延迟（降低同一时刻抢锁）

## 建议

- 在 `bamgoo.START` 里执行迁移
- 生产环境复杂变更（改类型/删列）用手工 SQL 或专用迁移脚本

## 生产发布建议流程

推荐顺序（多节点部署）：

1. 先看差异（不落库）

```go
report, err := data.MigratePlan("user", "order")
if err != nil { panic(err) }
_ = report.Actions
```

2. 执行手工版本迁移（有 Up/Down 的改动）

```go
if err := data.MigrateUp(); err != nil { panic(err) }
```

3. 最后执行自动结构同步（补列/补索引）

```go
if err := data.Migrate("user", "order"); err != nil { panic(err) }
```

4. 如需回滚，优先回滚版本迁移

```go
if err := data.MigrateDown(1); err != nil { panic(err) }
```

说明：
- `MigrateUp/Down` 处理你手写的版本脚本。
- `Migrate` 处理 `data.Table` 的自动结构同步。
- 两者并存时，先 `Up` 再 `Migrate`，可以减少冲突。
