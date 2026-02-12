# log-file

文件日志驱动，支持按体积/时间/行数滚动。

## 配置键

`log.<name>.setting` 中常用键：

- `store` 日志目录
- `output` 总输出文件
- `maxsize` 单文件最大体积
- `slice` 滚动粒度：`year/month/day/hour`
- `maxline` 单文件最大行数

## 示例

```toml
[log.default]
driver = "file"
level = "debug"

[log.default.setting]
store = "logs"
output = "app.log"
maxsize = "100MB"
slice = "day"
```
