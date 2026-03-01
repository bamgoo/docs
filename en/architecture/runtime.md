# Runtime Lifecycle

`infra.Go()` runs the full lifecycle in this order:

1. Load
2. Setup
3. Open
4. Start
5. Wait
6. Stop
7. Close

Notes:

- `START` triggers are fired after all modules start.
- `STOP` triggers are fired before module shutdown.
- `infra.Ready()` stops at `Open`.
