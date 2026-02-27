---
outline: deep
---

# data Schema Migration (Migrate)

`db.Migrate(...)` syncs registered `data.Table` definitions to database schema.

## What it does

- Create table: `CREATE TABLE IF NOT EXISTS`
- Add missing columns: `ALTER TABLE ADD COLUMN`
- Create indexes from `Indexes` (and legacy `setting.indexes`)

## What it does not do

- No automatic column drop
- No automatic type change on existing columns
- No automatic rename

## Typical usage

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

  db.Migrate("user") // or db.Migrate() for all registered tables
  if db.Error() != nil {
    panic(db.Error())
  }
}
```

## Convenience helpers

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

## Versioned Migration (Up/Down)

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

// apply all unapplied Up migrations
if err := data.MigrateUp(); err != nil { panic(err) }

// rollback latest 1 migration
if err := data.MigrateDown(1); err != nil { panic(err) }
```

## Optional setting

By default, newly added columns are added without `NOT NULL` for safer rollout.

If you need strict behavior:

```go
data.Table{
  Setting: base.Map{
    "migrateNotNullOnAdd": true,
  },
}
```

Migration strategy and concurrent index build (Config-level):

```toml
[data]

[data.migrate]
startup = "off" # off / check / auto / role (default off)
mode = "safe" # safe / strict / danger
concurrentIndex = true # PostgreSQL: CREATE INDEX CONCURRENTLY
timeout = "5m"
lockTimeout = "30s"
retry = 2
retryDelay = "500ms"
jitter = "250ms"
```

- `safe`: non-destructive changes only (create table/add column/add index)
- `strict`: report destructive drift (does not execute)
- `danger`: allows destructive changes (drop extra columns/indexes)
- `startup=off`: skip startup auto-migrate (default)
- `startup=check`: startup schema-diff check only, fail on drift
- `startup=auto`: run `Migrate` automatically at startup
- `startup=role`: resolve by `BAMGOO_ROLE`
  - `BAMGOO_ROLE=migrator|migration|migrate|schema|schema-migrator` -> `auto`
  - `BAMGOO_ROLE=app|api|worker|web` -> `check`
  - empty/others -> `off`

Example (single config, multi-role runtime):

```bash
# app nodes: check-only
export BAMGOO_ROLE=app

# migration job: auto migrate
export BAMGOO_ROLE=migrator
```

Multi-node startup protection:
- distributed migrate lock (avoid migration collision across nodes)
- lock wait timeout
- retry on transient failures (deadlock/timeout)
- startup jitter to reduce lock contention spikes

## Recommendation

- Run migration at startup (`bamgoo.START`)
- For destructive changes (drop/type change), use manual SQL or dedicated scripts

## Production Release Flow

Recommended order for multi-node deployment:

1. Review migration plan (no write)

```go
report, err := data.MigratePlan("user", "order")
if err != nil { panic(err) }
_ = report.Actions
```

2. Apply versioned manual migrations (Up/Down scripts)

```go
if err := data.MigrateUp(); err != nil { panic(err) }
```

3. Apply auto schema sync (add columns/indexes)

```go
if err := data.Migrate("user", "order"); err != nil { panic(err) }
```

4. Rollback (prefer versioned rollback first)

```go
if err := data.MigrateDown(1); err != nil { panic(err) }
```

Notes:
- `MigrateUp/Down` handles versioned scripts you register.
- `Migrate` handles auto schema sync from `data.Table`.
- When both exist, run `Up` before `Migrate` to reduce conflicts.
