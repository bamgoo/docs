# http 模块

## 职责

基于路由定义对外提供 HTTP 服务。

## 路由注册示例

```go
import (
  "github.com/bamgoo/bamgoo"
  "github.com/bamgoo/http"
)

func init() {
  bamgoo.Register("index", http.Router{
    Uri: "/",
    Name: "首页",
    Action: func(ctx *http.Context) {
      ctx.Text("hello")
    },
  })
}
```

## 能力点

- Router / Filter / Handler 三类组件
- 默认驱动基于 `gorilla/mux`
- 支持 `StartTLS`
