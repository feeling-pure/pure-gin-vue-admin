<template>
  <span class="headerAvatar">
    <template v-if="picType === 'avatar'">
      <el-avatar :size="30" :src="displaySrc" />
    </template>
    <template v-if="picType === 'img'">
      <img :src="displaySrc" class="avatar" />
    </template>
    <template v-if="picType === 'file'">
      <el-image
        :src="file"
        class="file"
        :preview-src-list="previewSrcList"
        :preview-teleported="true"
      />
    </template>
  </span>
</template>

<script setup>
  import { useUserStore } from '@/pinia/modules/user'
  import { computed, ref } from 'vue'

  defineOptions({
    name: 'CustomPic'
  })

  const props = defineProps({
    picType: {
      type: String,
      required: false,
      default: 'avatar'
    },
    picSrc: {
      type: String,
      required: false,
      default: undefined
    },
    preview: {
      type: Boolean,
      default: false
    }
  })

  const path = ref(import.meta.env.VITE_BASE_API + '/')
  const noAvatar = '/avatar.png'

  const userStore = useUserStore()

  const resolveSrc = (src) => {
    if (!src) {
      return noAvatar
    }
    if (
      src.startsWith('http://') ||
      src.startsWith('https://') ||
      src.startsWith('/')
    ) {
      return src
    }
    return path.value + src
  }

  const displaySrc = computed(() => {
    const raw =
      props.picSrc !== undefined ? props.picSrc : userStore.userInfo.headerImg
    return resolveSrc(raw)
  })

  const file = computed(() => {
    if (props.picSrc && !props.picSrc.startsWith('http')) {
      return path.value + props.picSrc
    }
    return props.picSrc
  })
  const previewSrcList = computed(() => (props.preview ? [file.value] : []))
</script>

<style scoped>
  .headerAvatar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
  .file {
    width: 80px;
    height: 80px;
    position: relative;
  }
</style>
