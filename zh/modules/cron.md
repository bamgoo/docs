---
outline: deep
---

# cron

## 职责

可持久化的任务调度模块，支持多节点协调、启停和执行日志。

## 配置结构

```toml
[cron]
driver = "redis"
tick = "1s"
sync = "5s"
lockttl = "30s"

[cron.setting]
addr = "127.0.0.1:6379"
database = 0
jobs_key = "bamgoo:cron:jobs"
```

字段：

- `driver`（默认 `default`）
- `tick`（轮询间隔）
- `sync` / `reload`（同步间隔）
- `lockttl`
- `setting`

## 对外 API

- `cron.Add / Remove`
- `cron.Enable / Disable`
- `cron.GetJobs`
- `cron.GetLogs(job, offset, limit)`

## 作业结构

`Job` 主要字段：`name`、`target`、`schedule/schedules`、`payload`、`disabled`。

## 驱动

- `default`
- [cron-pgsql](/zh/drivers/cron-pgsql)
- [cron-redis](/zh/drivers/cron-redis)
