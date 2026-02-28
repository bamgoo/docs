---
outline: deep
---

# trace-file

`trace-file` is the file driver for the `trace` module.

## Install

```go
import _ "github.com/bamgoo/trace-file"
```

## Config

```toml
[trace.file]
driver = "file"
json = true
sample = 1

[trace.file.setting]
store = "store/trace"
output = "trace.log"
maxsize = "100MB"
slice = "day"
maxline = 0
compress = true
maxage = "7d"
maxfiles = 30
fields = { trace_id = "tid", span_id = "sid", parent_span_id = "psid", timestamp = "ts" }
```

## Options

- `store`: base directory for relative output
- `output|file|path`: output file path/name
- `maxsize`: rotate by file size
- `slice`: rotate by time window (`year|month|day|hour`)
- `maxline`: rotate by line count
- `compress`: gzip rotated files (`.gz`)
- `maxage`: remove rotated files older than duration (supports `time.ParseDuration` and `7d`)
- `maxfiles`: keep only latest rotated files
- `fields`: field selection/mapping (array or map)

### fields examples

```toml
fields = ["trace_id", "span_id", "timestamp"]
fields = { trace_id = "tid", span_id = "sid", parent_span_id = "psid" }
```

## Dual-write Example

```toml
[trace.file]
driver = "file"
json = true
[trace.file.setting]
store = "store/trace"
output = "trace.log"

[trace.greptime]
driver = "greptime"
[trace.greptime.setting]
host = "127.0.0.1"
port = 4001
database = "public"
table = "traces"
```
