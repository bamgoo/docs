---
outline: deep
---

# log-file

## 用途

文件日志驱动，支持按体积、时间切片和行数滚动。

## 驱动名

- `file`

## setting 参数

- `store`：日志目录（默认 `store/log`）
- `output`：总输出文件（可为 `true` 表示 `output.log`）
- `maxsize`：滚动阈值（如 `100MB`）
- `slice`：`year/month/day/hour`
- `maxline`：按行数滚动
- `maxfiles`：最多保留最近 N 个滚动文件
- `maxage`：删除超过时长的滚动文件（例如 `7d`、`72h`）
- `compress`：滚动文件异步压缩成 `.gz`
- 每级别输出：`debug/info/warning/error...`（布尔或文件名/路径）

## 示例

```toml
[log]
driver = "file"
levels = ["info", "error"]

[log.setting]
store = "store/log"
output = "app.log"
maxsize = "100MB"
slice = "day"
compress = true
error = "error/error.log"
```
