# log

Unified logging module with buffering and pluggable outputs.

API:

- `Debug`, `Info`, `Warning`, `Error`, etc.
- `Write(level, args...)`

Drivers:

- `default`
- `log-file`
- `log-greptime`
