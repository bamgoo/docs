# data-mongodb

MongoDB driver for `data`.

Driver names:
- `mongodb`
- `mongo`
- `mgdb`

Supports:
- data DSL query/update
- transactions (session transaction)
- join with `localField/foreignField` and `on` pipeline
- Raw/Exec command mode for MongoDB
- standardized raw helpers: `data_mongodb.Command/FindRaw/AggregateRaw`

`errorMode`:

```toml
[data.setting]
errorMode = "auto-clear" # or sticky
```
