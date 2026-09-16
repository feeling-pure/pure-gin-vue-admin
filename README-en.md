<p align="center">
  English | <a href="./README.md">简体中文</a>
</p>

# pure-gin-vue-admin

## Project Introduction

pure-gin-vue-admin tracks gin-vue-admin upstream. While keeping the original framework features, it applies build-security optimizations and provides a clean Vue + Gin web stack.

It includes JWT authentication, dynamic routing, dynamic menus, Casbin authorization, a form builder, and a code generator so you can spend more time on business features.

Stack: Vue 3, Vite, Element Plus, Pinia, Gin, GORM, Casbin.

## Usage Policy

This project is released under the Apache License 2.0. It is intended for open-source projects and internal company use.

Do not package this framework and charge for it, and do not modify it and sell it as a product.

Using it as the basis for an external commercial product or service requires your own careful legal and compliance review.

## Getting Started

Requirements:

- Node.js >= 20.19
- Go >= 1.24

### Backend

```bash
cd server
go generate
go run .
```

Default URL: http://127.0.0.1:8888

Swagger: http://127.0.0.1:8888/swagger/index.html (run `swag init` in `server/` when you need to refresh the docs)

### Frontend

```bash
cd web
npm install
npm run serve
```

Default URL: http://127.0.0.1:8080

The first visit opens the initialization page. Follow the prompts to set the admin password and database.

You can also open `gin-vue-admin.code-workspace` in VSCode and run `Both (Backend & Frontend)` to start both sides together.

## Features

- Access control with JWT and Casbin
- User management: assign roles and permissions
- Role management: configure API and menu permissions per role
- Menu management: dynamic menus by role
- API management: control which APIs each role can call
- Configuration management: update system settings from the admin UI
- File upload: local storage and common object storage
- Chunked upload for large files
- Multi-login restriction with Redis
- Form builder for visual form generation
- Code generator for basic CRUD
- Conditional search examples
