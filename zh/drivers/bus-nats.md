---
outline: deep
---

# bus-nats

## 用途

NATS 总线驱动，支持 `call/event/queue` 三类主题，并带节点公告能力。

## 驱动名

- `nats`

## setting 参数

- `url` / `server`
- `token`
- `user` / `username`
- `pass` / `password`
- `group`
- `version`
- `announce`
- `announce_ttl`

## 示例

```toml
[bus.default]
driver = "nats"

[bus.default.setting]
url = "nats://127.0.0.1:4222"
group = "api"
announce = "10s"
announce_ttl = "30s"
```
