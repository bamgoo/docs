---
outline: deep
---

# log-file

## 用途

文件日志驱动，支持按体积、时间切片和行数滚动。

## 驱动名

- `file`

## setting 参数

- `store`：日志目录（默认 `logs`）
- `output`：总输出文件（可为 `true` 表示 `output.log`）
- `maxsize`：滚动阈值（如 `100MB`）
- `slice`：`year/month/day/hour`
- `maxline`：按行数滚动
- 每级别输出：`debug/info/warning/error...`（布尔或文件名）

## 示例

```toml
[log]
driver = "file"

[log.setting]
store = "logs"
output = "app.log"
maxsize = "100MB"
slice = "day"
error = "error.log"
```
