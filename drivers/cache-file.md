# cache-file

BuntDB 文件缓存驱动，适合单机持久化缓存。

## 配置键

`cache.<name>.setting` 中可设置：

- `file` / `path` / `db` (缓存文件路径)

## 示例

```toml
[cache.default]
driver = "file"
expire = "10s"

[cache.default.setting]
file = "runtime/cache.db"
```
