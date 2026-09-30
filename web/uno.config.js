import { defineConfig } from '@unocss/vite';
import presetWind3 from '@unocss/preset-wind3';
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // 启动时先扫完模板，避免首个请求拿到还不完整的 uno.css
  content: {
    filesystem: [
      'index.html',
      'src/**/*.{vue,html}'
    ]
  },
  theme: {
    backgroundColor: {
      main: '#F5F5F5'
    },
    textColor: {
      active: 'var(--el-color-primary)'
    },
    boxShadowColor: {
      active: 'var(--el-color-primary)'
    },
    borderColor: {
      'table-border': 'var(--el-border-color-lighter)'
    }
  },
  presets: [
    presetWind3({ dark: 'class' })
  ],
  transformers: [
    transformerDirectives(),
  ],
})
