# config-file

文件配置驱动，支持 `toml/json`。

## 配置键

- `driver = "file"`
- `file` 或 `path` 或 `config`
- `format` (可选：`toml/json`)

## 示例

```toml
[config]
driver = "file"
file = "config.toml"
```
