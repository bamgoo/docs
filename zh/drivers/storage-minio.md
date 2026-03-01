---
outline: deep
---

# storage-minio

## 用途

MinIO 对象存储驱动，自动检查并创建 bucket。

## 驱动名

- `minio`

## setting 参数

- `endpoint`
- `region`
- `bucket`
- `access` / `accesskey` / `access_key`
- `secret` / `secretkey` / `secret_key`
- `use_ssl` / `ssl`

## 示例

```toml
[storage.default]
driver = "minio"

[storage.default.setting]
endpoint = "127.0.0.1:9000"
region = "us-east-1"
bucket = "infrago"
access = "minioadmin"
secret = "minioadmin"
use_ssl = false
```
