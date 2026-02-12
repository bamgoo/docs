# log 模块

## 职责

统一日志级别、格式、缓冲与多驱动输出。

## 常用 API

- `log.Debug(...)`
- `log.Info(...)`
- `log.Warning(...)`
- `log.Error(...)`

## 相关驱动

- 默认标准输出驱动
- [log-file](/drivers/log-file)
- [log-greptime](/drivers/log-greptime)
