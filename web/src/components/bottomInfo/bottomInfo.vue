<template>
  <div
    v-if="$slots.default"
    class="flex flex-col md:flex-row gap-2 items-center text-sm text-slate-700 dark:text-slate-500 justify-center py-2"
  >
    <slot />
  </div>
</template>

<script setup>
  defineOptions({
    name: 'BottomInfo'
  })
</script>
