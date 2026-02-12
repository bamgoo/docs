# hello-world

下面示例与现有 `examples/main.go` 风格一致，包含路由和启动触发器。

```go
package main

import (
  "fmt"
  "time"

  _ "github.com/bamgoo/builtin"
  "github.com/bamgoo/bamgoo"
  "github.com/bamgoo/http"
  "github.com/bamgoo/log"
  "github.com/bamgoo/mutex"
)

func init() {
  bamgoo.Register("index", http.Router{
    Uri: "/",
    Name: "首页",
    Action: func(ctx *http.Context) {
      log.Debug("hello")
      ctx.Text("hello world")
    },
  })

  bamgoo.Register(bamgoo.START, bamgoo.Trigger{
    Name: "启动后动作",
    Action: func(ctx *bamgoo.Context) {
      _, err := mutex.Lock("boot", time.Second)
      fmt.Println("lock", err)
    },
  })
}

func main() {
  bamgoo.Go()
}
```
