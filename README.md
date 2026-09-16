<p align="center">
  <a href="./README-en.md">English</a> | 简体中文
</p>

# pure-gin-vue-admin

## 项目介绍

pure-gin-vue-admin 跟踪 [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin) 上游，在保留原有框架功能的前提下，针对构建安全做了优化，提供一个纯净的 Vue + Gin 技术栈 Web 框架。

集成 JWT 鉴权、动态路由、动态菜单、Casbin 权限、表单生成器和代码生成器，方便把时间放在业务开发上。

技术栈：Vue 3、Vite、Element Plus、Pinia、Gin、GORM、Casbin。

## 使用约定

本项目以 Apache License 2.0 发布，主要供开源项目和公司内部使用。

不要把本框架封装后二次收费，也不要改完这套框架再拿去卖钱。

若基于本框架对外提供商业产品或服务，请自行审慎评估授权与合规风险。

## 使用说明

环境要求：

- Node.js >= 20.19
- Go >= 1.24

### 后端

```bash
cd server
go generate
go run .
```

默认地址：http://127.0.0.1:8888

Swagger：http://127.0.0.1:8888/swagger/index.html （需要更新文档时，在 `server/` 执行 `swag init`）

### 前端

```bash
cd web
npm install
npm run serve
```

默认地址：http://127.0.0.1:8080

首次访问会进入初始化页面，按提示配置管理员密码和数据库。

也可用 VSCode 打开根目录 `gin-vue-admin.code-workspace`，运行 `Both (Backend & Frontend)` 同时启动前后端。

## 主要功能

- 权限管理：基于 JWT 和 Casbin 的鉴权与访问控制
- 用户管理：分配用户角色与权限
- 角色管理：为角色配置 API 权限和菜单权限
- 菜单管理：按角色动态配置菜单
- API 管理：控制不同角色可调用的接口
- 配置管理：支持在后台修改系统配置
- 文件上传：支持本地存储及常见对象存储
- 分片上传：支持大文件分片上传
- 多点登录限制：可配合 Redis 限制多端登录
- 表单生成器：可视化生成表单
- 代码生成器：生成基础 CRUD 前后端代码
- 条件搜索：提供条件搜索示例
