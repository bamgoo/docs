# config

Loads runtime configuration through pluggable drivers.

Sources:

- environment variables (`INFRAGO_*`)
- command-line args (`--key=value`)

Drivers:

- `default/file`
- `config-file`
- `config-redis`
