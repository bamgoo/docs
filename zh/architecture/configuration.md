---
outline: deep
---

# 配置模型

infrago 配置本质是 `Map` 分发到各模块。

## 基本形态

- 模块根配置：`http`、`log`、`queue`...
- 实例配置：`cache.default`、`bus.node1`
- 驱动配置：`setting`

## 示例

```toml
[cache.default]
driver = "redis"
expire = "30s"
weight = 1

[cache.default.setting]
addr = "127.0.0.1:6379"
database = 0
```

## 读取优先级

通常是：

1. 环境变量（`INFRAGO_*`）
2. 命令行参数（`--key=value`）
3. 配置驱动读取内容（file/redis 等）

## 通用配置字段

大多数模块支持以下字段：

- `driver`
- `weight`
- `prefix`
- `setting`

其余字段由模块自行扩展（如 `http.port`、`cron.tick`）。
