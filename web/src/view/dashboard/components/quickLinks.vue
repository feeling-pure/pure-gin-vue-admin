<template>
  <div class="h-full space-y-5">
    <div>
      <div class="mb-2 text-xs tracking-wide text-black/55 dark:text-white/55">常用入口</div>
      <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          v-for="(item, index) in shortcuts"
          :key="index"
          class="group flex w-full items-center gap-3 rounded-lg border border-black/10 bg-white/70 p-2.5 text-left transition-all duration-200 hover:border-[var(--el-color-primary)] hover:shadow-sm dark:border-white/10 dark:bg-white/[0.02]"
          type="button"
          @click="toPath(item)"
        >
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-700 transition-colors group-hover:bg-[var(--el-color-primary)] group-hover:text-white dark:bg-slate-800 dark:text-slate-200"
          >
            <el-icon><component :is="item.icon" /></el-icon>
          </span>
          <span class="min-w-0 text-sm text-black/75 dark:text-white/75">{{ item.title }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    Menu,
    Link,
    User,
    Service,
    Files,
    Memo
  } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const toPath = (item) => {
    router.push({ name: item.path })
  }

  const shortcuts = [
    { icon: Menu, title: '菜单管理', path: 'menu' },
    { icon: Link, title: 'API管理', path: 'api' },
    { icon: Service, title: '角色管理', path: 'authority' },
    { icon: User, title: '用户管理', path: 'user' },
    { icon: Files, title: '自动化包', path: 'autoPkg' },
    { icon: Memo, title: '自动代码', path: 'autoCode' }
  ]
</script>

<style scoped lang="scss"></style>
