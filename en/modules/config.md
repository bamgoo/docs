# config

Loads runtime configuration through pluggable drivers.

Sources:

- environment variables (`BAMGOO_*`)
- command-line args (`--key=value`)

Drivers:

- `default/file`
- `config-file`
- `config-redis`
