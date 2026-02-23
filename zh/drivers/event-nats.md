---
outline: deep
---

# event-nats

## 用途

NATS 事件驱动，支持普通 NATS 与 JetStream。

## 驱动名

- `nats`
- `natsjs` / `nats-js` / `jetstream`

## setting 参数

- `url` / `server`
- `token`
- `user` / `username`
- `pass` / `password`
- `stream`（JetStream）
- `group`

## 示例

```toml
[event.default]
driver = "natsjs"

[event.default.setting]
url = "nats://127.0.0.1:4222"
stream = "BAMGOOE"
group = "worker"
```
