# Architecture Overview

infrago follows a three-layer design:

- Runtime: lifecycle and registration dispatcher.
- Modules: HTTP, Web, Event, Queue, Cron, Storage, etc.
- Drivers: concrete infrastructure adapters.

Next:

1. [Runtime Lifecycle](/en/architecture/runtime)
2. [Register & Dispatch](/en/architecture/register)
3. [Invocation Flow](/en/architecture/invocation)
4. [Configuration Model](/en/architecture/configuration)
