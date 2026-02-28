# Drivers Overview

Drivers map module abstractions to concrete middleware.

Categories:

- config: file, redis
- cache: file, redis
- bus/event/queue: nats, redis
- cron: pgsql, redis
- search: file, meilisearch, opensearch, elasticsearch
- data: postgresql, mysql, sqlite, mongodb
- log: file, greptime
- trace: file, greptime, otlp
- mutex: redis
- storage: minio, s3
