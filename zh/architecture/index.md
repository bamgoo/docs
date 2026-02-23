---
outline: deep
---

# 架构总览

bamgoo 采用「运行时 + 模块 + 驱动」三层设计。

## 框架构成

- 运行时（runtime）
- 模块（module）
- 驱动（driver）
- 组件（component，如 Router/Queue/Event/Job）

## 运行时核心职责

- 统一加载配置
- 统一分发注册对象
- 统一生命周期调度
- 统一优雅停机流程

## 生命周期

1. `Load`
2. `Setup`
3. `Open`
4. `Start`
5. `Wait`
6. `Stop`
7. `Close`

## 推荐阅读

1. [运行时生命周期](/zh/architecture/runtime)
2. [注册与分发机制](/zh/architecture/register)
3. [调用链路](/zh/architecture/invocation)
4. [配置模型](/zh/architecture/configuration)
