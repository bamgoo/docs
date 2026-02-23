---
outline: deep
---

# cron-pgsql

## 用途

PostgreSQL 调度持久化驱动，存储任务、日志与锁信息。

## 驱动名

- `pgsql`
- `postgres`

## setting 参数

- 连接：`dsn` / `url` 或 `host/port/user(username)/password/database(dbname)`
- `sslmode`
- `schema`（默认 `public`）
- `jobs_table`（默认 `cron_jobs`）
- `logs_table`（默认 `cron_logs`）
- `locks_table`（默认 `cron_locks`）

## 示例

```toml
[cron]
driver = "pgsql"

[cron.setting]
host = "127.0.0.1"
port = "5432"
username = "postgres"
password = "postgres"
database = "bamgoo"
schema = "public"
```
