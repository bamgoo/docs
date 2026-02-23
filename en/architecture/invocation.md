# Invocation Flow

Service invocation (`ctx.Invoke`) follows local-first routing:

1. Try local method/service in core registry.
2. If not found, fallback to bus request.

Meta data (`Meta`) carries trace/token/language/timezone and temporary file lifecycle.
