# bus-nats

NATS 总线驱动，支持 call / event / queue 三种主题模式。

## 配置键

`bus.<name>.setting` 中可设置：

- `url` 或 `server`
- `username` / `password`
- `group`（queue group）
- `version`

## 示例

```toml
[bus.default]
driver = "nats"
weight = 1

[bus.default.setting]
url = "nats://127.0.0.1:4222"
group = "bamgoo"
version = "1.0.0"
```
