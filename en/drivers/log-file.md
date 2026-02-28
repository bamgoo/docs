# log-file

File driver for `log`.

## Driver Name

- `file`

## setting

- `store`: root dir, default `store/log`
- `output`: merged output file (`true` means `output.log`)
- `maxsize`: rotate by size (e.g. `64MB`)
- `slice`: rotate by time (`year|month|day|hour`)
- `maxline`: rotate by line count
- `maxfiles`: keep latest N rotated files
- `maxage`: delete rotated files older than duration (e.g. `7d`, `72h`)
- `compress`: compress rotated files to `.gz` (async)
- per-level file: `debug/info/trace/notice/warning/error/panic/fatal`
  - value can be a file path, e.g. `error = "error/error.log"`
  - value can also be `true`, equivalent to `error.log`

## Example

```toml
[log.file]
driver = "file"
levels = ["info", "error"]

[log.file.setting]
store = "store/log"
output = "app.log"
maxsize = "128MB"
slice = "day"
compress = true
error = "error/error.log"
```
