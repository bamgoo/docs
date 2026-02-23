# Configuration Model

Most modules use a shared pattern:

- root key by module name (`cache`, `queue`, `log`, ...)
- instance-level config (`default`, `worker1`, ...)
- driver-specific options in `setting`

Typical fields:

- `driver`
- `weight`
- `prefix`
- `setting`

Then module-specific fields (e.g. `http.port`, `log.level`, `cron.tick`).
