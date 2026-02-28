# trace-otlp

OTLP HTTP driver.

```toml
[trace.otlp]
driver = "otlp"
[trace.otlp.setting]
endpoint = "http://127.0.0.1:4318/v1/traces"
timeout = "5s"
service = "my-service"
headers = { Authorization = "Bearer token" }
fields = { trace_id = "bamgoo.trace_id", span_id = "bamgoo.span_id" }
```

- `fields` controls extra span attributes mapping (array or map)
