---
outline: deep
---

# config-redis

## 用途

从 Redis 的一个 key 中读取配置文本并解析为 `Map`。

## 驱动名

- `redis`

## 参数

- `server` `port`
- `username` `password`
- `database`
- `key`（默认 `bamgoo-config`）
- `format`（可选，`toml/json`）

## 示例

```bash
./app --driver=redis --server=127.0.0.1 --port=6379 --key=bamgoo-config
```
