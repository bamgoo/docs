# bamgoo (core)

Responsibilities:

- runtime lifecycle orchestration
- unified register/dispatch
- local-first service invocation
- triggers (`START` / `STOP`)

Key APIs:

- `bamgoo.Register`
- `bamgoo.Ready`
- `bamgoo.Go`
- `ctx.Invoke` / `ctx.Result`
