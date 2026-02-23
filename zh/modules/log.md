---
outline: deep
---

# log

## 职责

统一日志等级、格式、缓冲与多驱动输出。

## 配置结构

```toml
[log]
driver = "file"
level = "info"
json = false
buffer = 1024
timeout = "200ms"
format = "{time} {level} {body}"

[log.setting]
store = "logs"
output = "app.log"
maxsize = "100MB"
slice = "day"
```

核心字段：

- `driver`
- `level` / `levels`
- `json`
- `buffer` / `timeout`
- `flag` / `format`
- `setting`

## 对外 API

- `log.Debug/Trace/Info/Notice/Warning/Error/Panic/Fatal`
- `log.Write(level, args...)`
- `log.Levels()`

## 驱动

- `default`（stdout/stderr）
- [log-file](/zh/drivers/log-file)
- [log-greptime](/zh/drivers/log-greptime)
