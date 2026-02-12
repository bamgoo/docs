# 快速开始

## 1. 安装依赖

```bash
go get github.com/bamgoo/bamgoo
go get github.com/bamgoo/http
go get github.com/bamgoo/log
go get github.com/bamgoo/builtin
```

## 2. 最小示例

```go
package main

import (
  _ "github.com/bamgoo/builtin"

  "github.com/bamgoo/bamgoo"
  "github.com/bamgoo/http"
)

func init() {
  bamgoo.Register("index", http.Router{
    Uri: "/",
    Name: "首页",
    Action: func(ctx *http.Context) {
      ctx.Text("hello bamgoo")
    },
  })
}

func main() {
  bamgoo.Go()
}
```

## 3. 运行

默认 HTTP 驱动监听 `:8080`，访问 `/` 即可。
