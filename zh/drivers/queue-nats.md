---
outline: deep
---

# queue-nats

## 用途

NATS 队列驱动，支持普通 NATS 与 JetStream，支持延迟和重试。

## 驱动名

- `nats`
- `natsjs` / `nats-js` / `jetstream`

## setting 参数

- `url` / `server`
- `token`
- `user` / `username`
- `pass` / `password`
- `stream`（JetStream，默认 `BAMGOOQ`）

## 示例

```toml
[queue.default]
driver = "nats"

[queue.default.setting]
url = "nats://127.0.0.1:4222"
```
