# Register & Dispatch

`infra.Register(name, value)` is the unified registration API.

Behavior:

- The runtime dispatches `value` to all mounted modules.
- Each module consumes only known types.
- This keeps app code uniform while modules stay decoupled.

`infra.Override(true)` allows overriding existing registrations.
