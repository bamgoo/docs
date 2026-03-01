# infrago (core)

Responsibilities:

- runtime lifecycle orchestration
- unified register/dispatch
- local-first service invocation
- triggers (`START` / `STOP`)

Key APIs:

- `infra.Register`
- `infra.Ready`
- `infra.Go`
- `ctx.Invoke` / `ctx.Result`
