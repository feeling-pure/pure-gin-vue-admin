# 基础框架净化

## 基本信息

- 提出日期：2026-09-15
- 当前状态：`active`
- 需求类型：基础框架净化（构建安全 + 品牌/市场入口剥离）
- 优先级：高
- 需求文件：`aiDoc/memory/business/active/framework-purification.md`

## 用户原始意图摘要

去掉 GVA 通过 npm 伪装插件做的授权遥测、构建杀伤和水印，用本地实现替换真正需要的 SVG 导入；同时剥离远程插件中心/插件市场入口。相关改动原先拆成多份业务记忆，现合并为本条，持续跟踪残留外链与死依赖。

## 影响范围

- 后端：初始化菜单、auto 插件 API 注册
- 前端：Vite 构建配置与依赖、仪表盘、启动控制台文案、插件市场 API、本地 SVG 插件
- 文档：本业务记忆；原四份 done 记录已并入此处
- 插件 / 模块：保留本地插件安装/打包/邮件/公告，去掉远程插件市场入口

## 涉及对象

- 模块：前端构建、仪表盘、插件系统菜单、Skills 在线下载注册
- 接口：已去掉店铺插件列表前端调用、`downloadOnlineSkill` 注册；本地 `/autoCode/installPlugin` 仍保留
- 页面：仪表盘不再展示插件市场 banner/表格；菜单不再出现外链「插件市场」「官方网站」「关于我们」
- 配置：Vite 插件列表、产物文件名、`/plugin` 代理、`package.json` 依赖

## 已确认约束

- SVG 只保留扫描、转 symbol、注入 `index.html`，不把授权校验、遥测、远程注入带进仓库
- 卸载 `vite-check-multiple-dom`，不复刻其清空 `index.html` 的逻辑，不保留 `svg-transform` 伪装名
- 删除仅服务于旧授权包的 `AddSecret`
- 卸载 `vite-plugin-banner`，不再写入 `Build based on gin-vue-admin` 注释
- 去掉产物文件名前缀 `087AC4D233B64EB0`，保留 `assets/[name].[hash].[ext]`
- 去掉远程插件市场入口，保留本地「插件安装 / 打包插件 / 邮件 / 公告」
- 不要再去读已经卸掉的 npm 包的空 `.pnpm` 残留目录
- 去掉「关于我们」页面及菜单初始化

## 当前进展

### 构建安全

- 用本地 `web/vitePlugin/svgBuilder/` 替换 `vite-auto-import-svg`，插件名 `svg-auto-import`
- 已卸载 `vite-check-multiple-dom`，删除 `web/vitePlugin/secret/`（`AddSecret`）
- 已卸载 `vite-plugin-banner`，并清掉对应 `.pnpm` 空残留
- `web/vite.config.js` 产物文件名已改为 `assets/[name].[hash].[ext]`

### 插件中心

- 初始化菜单去掉外链「插件市场」
- 删除 `web/src/api/plugin/api.js`（店铺插件列表）
- 删除仪表盘 `banner.vue` / `pluginTable.vue`
- 去掉 Vite `/plugin` 代理到 `plugin.gin-vue-admin.com`
- 去掉启动控制台里的插件市场/授权文案
- 去掉 `downloadOnlineSkill` 接口注册
- 本地插件安装、打包、邮件、公告能力仍保留

### 外链与出网

- 去掉仓库内非必要的远程入口、外链配置和出网依赖
- 页面与菜单不再指向上游文档、社区、商店或官网；缺省地址改为本地或占位
- 演示数据、默认账号与展示用文案改为中性内容

## 后续待办

- 未使用的 `vite-plugin-importer` / `install` / `npm` / `path` 依赖尚未处理

## 更新规则

- 同一需求始终维护在同一个文件中
- 新信息优先补充到对应段落，不要另起一份重复记录
- 只有需求状态变化时，才在 `active/` 与 `done/` 之间移动文件
