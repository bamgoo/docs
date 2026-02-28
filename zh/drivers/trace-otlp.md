# trace-otlp

OTLP HTTP 驱动。

```toml
[trace.otlp]
driver = "otlp"
fields = { trace_id = "bamgoo.trace_id", span_id = "bamgoo.span_id" }
[trace.otlp.setting]
endpoint = "http://127.0.0.1:4318/v1/traces"
timeout = "5s"
service = "my-service"
headers = { Authorization = "Bearer token" }
```

- `fields`（放在 `[trace.otlp]`）用于附加 attributes 字段映射（数组或映射）
