---
outline: deep
---

# trace-file

`trace-file` 提供 `trace` 模块的文件落盘驱动。

## 安装

```go
import _ "github.com/bamgoo/trace-file"
```

## 配置

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

## 字段说明

- `store`：相对路径输出目录
- `output|file|path`：输出文件名/路径
- `maxsize`：超过大小切分
- `slice`：按时间切分（`year|month|day|hour`）
- `maxline`：按行数切分
- `compress`：切分后 gzip 压缩（`.gz`）
- `maxage`：删除超过保留时长的切分文件（支持 `time.ParseDuration` 和 `7d`）
- `maxfiles`：最多保留切分文件数量
- `fields`：字段选择/映射（支持数组或映射）

### fields 示例

```toml
fields = ["trace_id", "span_id", "timestamp"]
fields = { trace_id = "tid", span_id = "sid", parent_span_id = "psid" }
```

## 双写示例

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
