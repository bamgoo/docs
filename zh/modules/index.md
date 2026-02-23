---
outline: deep
---

# 模块总览

bamgoo 以模块化组织能力，每个模块都通过 `bamgoo.Mount(module)` 接入统一生命周期。

## 阅读顺序

1. 先看 [bamgoo 核心模块](/zh/modules/bamgoo)
2. 再看基础模块：`config / log / cache / mutex`
3. 再看通信模块：`bus / event / queue`
4. 再看调度与 Web：`cron / http / web / view / storage`

## 模块分类

- 核心：`bamgoo`
- 配置：`config`
- 日志与状态：`log` `cache` `mutex`
- 通信：`bus` `event` `queue`
- 调度：`cron`
- 接口与站点：`http` `web` `view`
- 文件：`storage`

## 通用配置习惯

绝大多数模块都支持：

- `driver`：选择驱动
- `setting`：驱动私有参数
- `weight`：多实例权重（部分模块）
- `prefix`：键或主题前缀（部分模块）
