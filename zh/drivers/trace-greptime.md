# trace-greptime

GreptimeDB 驱动。

```toml
[trace.greptime]
driver = "greptime"
[trace.greptime.setting]
host = "127.0.0.1"
port = 4001
database = "public"
table = "traces"
timeout = "5s"
insecure = true
fields = { trace_id = "tid", span_id = "sid", parent_span_id = "psid", timestamp = "timestamp" }
```

- `fields` 支持数组或映射：
  - `["trace_id","span_id","timestamp"]`
  - `{ trace_id = "tid", span_id = "sid" }`
