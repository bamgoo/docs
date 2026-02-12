# builtin 内置注册

`builtin` 用于注入默认基础能力，通常以匿名导入方式启用：

```go
import _ "github.com/bamgoo/builtin"
```

在 `examples/main.go` 中已经使用该方式，建议把它作为所有示例默认前置步骤。
