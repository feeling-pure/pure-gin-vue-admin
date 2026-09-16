<template>
  <div class="space-y-3">
    <el-scrollbar v-if="notices.length" max-height="320px">
      <div class="space-y-2 pr-1">
        <div
          v-for="(item, index) in notices"
          :key="index"
          class="group rounded-lg border border-black/10 bg-white/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"
        >
          <div class="flex items-start gap-3">
            <span class="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" :class="item.dotClass" />
            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-2">
                <span class="rounded-md px-2 py-0.5 text-[11px] font-semibold leading-4" :class="item.tagClass">
                  {{ item.typeTitle }}
                </span>
                <span class="shrink-0 text-[11px] text-black/45 dark:text-white/45">{{ item.time }}</span>
              </div>
              <el-tooltip effect="light" :content="item.title" placement="top">
                <p class="mt-1.5 line-clamp-2 text-sm text-black/75 dark:text-white/75">
                  {{ item.title }}
                </p>
              </el-tooltip>
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
    <p v-else class="text-sm text-black/45 dark:text-white/45">暂无公告</p>
  </div>
</template>

<script setup>
  const notices = []
</script>

<style scoped lang="scss"></style>

