---
outline: deep
---

# storage-s3

## 用途

AWS S3 兼容存储驱动，支持自定义 endpoint 与 path-style。

## 驱动名

- `s3`

## setting 参数

- `region`
- `bucket`
- `access` / `accesskey` / `access_key`
- `secret` / `secretkey` / `secret_key`
- `session_token`
- `endpoint`
- `path_style` / `force_path_style`

## 示例

```toml
[storage.default]
driver = "s3"

[storage.default.setting]
region = "us-east-1"
bucket = "bamgoo"
access = "AKIA..."
secret = "..."
endpoint = "https://s3.amazonaws.com"
path_style = false
```
