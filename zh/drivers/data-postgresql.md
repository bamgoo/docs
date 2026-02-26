---
outline: deep
---

# data-postgresql

`data` 模块 PostgreSQL 驱动。

## 驱动名

- `pgsql`
- `postgres`
- `postgresql`

## 配置

```toml
[data]
driver = "postgresql"
url = "host=127.0.0.1 port=5432 user=postgres password=postgres dbname=app sslmode=disable"
schema = "public"
```

## 特性

- 支持 `ILIKE`
- 支持 `RETURNING`
- 支持 JSON/数组查询能力（由 data DSL 编译）
- 支持迁移、索引创建、分页、聚合、join
