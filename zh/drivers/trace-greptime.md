# trace-greptime

GreptimeDB 驱动。

```toml
[trace.greptime]
driver = "greptime"
fields = { trace_id = "tid", span_id = "sid", parent_span_id = "psid", timestamp = "timestamp" }
[trace.greptime.setting]
url = "greptime://user:pass@127.0.0.1:4001/public/traces?insecure=true&timeout=5s"
host = "127.0.0.1"
port = 4001
database = "public"
table = "traces"
timeout = "5s"
insecure = true
```

- `fields`（放在 `[trace.greptime]`）支持数组或映射：
  - `["trace_id","span_id","timestamp"]`
  - `{ trace_id = "tid", span_id = "sid" }`
- 支持 `url` / `dsn`；若同时配置显式参数（`host/port/database/table/...`），显式参数优先覆盖。
