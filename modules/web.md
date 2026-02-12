# web 模块

## 职责

在 `http` 模块能力上增加站点维度（site/domain）组织，适合多域名站点。

## 特点

- 支持 root 配置 + site 配置
- 路由可按域名注册
- 提供 `RouteUrl`、`SiteUrl` 等 URL 组装能力

## 使用建议

- 单站点 API 优先使用 `http`
- 多站点官网/营销页使用 `web`
