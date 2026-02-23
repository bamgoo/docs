---
outline: deep
---

# view

## 职责

模板渲染模块，供 `http/web` 在响应阶段生成页面内容。

## 配置结构

```toml
[view]
driver = "default"
root = "asset/views"
shared = "shared"
left = "{%"
right = "%}"
```

字段：

- `driver`
- `root`
- `shared`
- `left` / `right`
- `setting`

## 对外 API

- `view.Parse(body)`

`Body` 主要字段：`View`、`Site`、`Language`、`Timezone`、`Data`、`Model`、`Helpers`。

## 扩展点

可通过注册 `Helper` 扩展模板函数。
