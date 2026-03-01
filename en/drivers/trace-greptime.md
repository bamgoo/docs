# trace-greptime

GreptimeDB driver.

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

- `fields` (on `[trace.greptime]`) supports array or map:
  - `["trace_id","span_id","timestamp"]`
  - `{ trace_id = "tid", span_id = "sid" }`
- `url` / `dsn` is supported; explicit keys (`host/port/database/table/...`) override parsed values.
