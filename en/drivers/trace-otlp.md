# trace-otlp

OTLP HTTP driver.

```toml
[trace.otlp]
driver = "otlp"
fields = { trace_id = "infra.trace_id", span_id = "infra.span_id" }
[trace.otlp.setting]
endpoint = "http://127.0.0.1:4318/v1/traces"
timeout = "5s"
service = "my-service"
headers = { Authorization = "Bearer token" }
```

- `fields` (on `[trace.otlp]`) controls extra span attributes mapping (array or map)
