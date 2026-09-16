<template>
  <div class="h-full gva-container2 overflow-auto bg-[#f8f8f8] dark:bg-slate-950">
    <div class="flex min-h-full flex-col items-center justify-center px-6 py-16 text-center">
      <div class="mb-10 flex items-center gap-2 sm:gap-6">
        <a
          class="logo-link"
          href="https://cn.vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Vite"
        >
          <svg class="logo vite" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M399.641 59.4132L215.643 388.413C211.844 395.226 202.084 395.226 198.283 388.413L14.2889 59.4132C10.2434 52.1698 16.6279 43.3657 24.858 44.8756L205.713 78.0246C207.89 78.4236 210.117 78.4236 212.294 78.0246L393.072 44.8756C401.303 43.3657 407.687 52.1698 403.641 59.4132H399.641Z" fill="url(#vite-a)"/>
            <path d="M292.965 1.5744L156.781 28.1652C154.573 28.5868 152.935 30.4381 152.795 32.6947L144.385 174.011C144.173 177.415 147.258 180.111 150.584 179.441L185.375 172.41C189.126 171.655 192.549 175.122 191.696 178.889L180.909 231.312C180.009 235.219 183.737 238.66 187.575 237.565L213.243 230.237C217.108 229.136 220.852 232.626 219.906 236.547L201.618 312.343C200.39 317.405 207.007 320.729 210.471 316.584L212.339 314.348L323.698 137.468C325.923 133.94 323.014 129.493 318.95 130.217L283.002 136.654C279.122 137.347 275.728 133.575 276.86 129.762L302.689 42.4494C303.926 38.2721 299.819 34.5992 295.773 35.6471L292.965 36.3902V1.5744Z" fill="url(#vite-b)"/>
            <defs>
              <linearGradient id="vite-a" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
                <stop stop-color="#41D1FF"/>
                <stop offset="1" stop-color="#BD34FE"/>
              </linearGradient>
              <linearGradient id="vite-b" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFEA83"/>
                <stop offset="0.0833333" stop-color="#FFDD35"/>
                <stop offset="1" stop-color="#FFA800"/>
              </linearGradient>
            </defs>
          </svg>
        </a>
        <span class="text-3xl font-light text-slate-300 dark:text-slate-600">+</span>
        <a
          class="logo-link"
          href="https://cn.vuejs.org"
          target="_blank"
          rel="noopener noreferrer"
          title="Vue"
        >
          <svg class="logo vue" viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
            <path d="M161.096.001l-30.224 52.35L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
            <path d="M161.096.001l-30.224 52.35L100.647.001H52.346l78.307 135.606L208.999.001z" fill="#34495e"/>
          </svg>
        </a>
      </div>

      <h1 class="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
        Vue 3 + Vite + Gin
      </h1>
      <p class="mt-4 text-lg text-slate-500 dark:text-slate-400">
        欢迎使用 {{ $GIN_VUE_ADMIN.appName }}
      </p>
      <p class="mt-8 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
        编辑
        <code class="rounded bg-slate-200/80 px-1.5 py-0.5 font-mono text-[13px] text-slate-700 dark:bg-slate-800 dark:text-slate-200">web/src/view/dashboard/index.vue</code>
        开始定制此页面
      </p>
      <p class="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400 dark:text-slate-500">
        <a
          class="transition-colors hover:text-[#646cff]"
          href="https://cn.vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
        >Vite</a>
        <a
          class="transition-colors hover:text-[#42b883]"
          href="https://cn.vuejs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Vue 3</a>
        <a
          class="transition-colors hover:text-[var(--el-color-primary)]"
          href="https://gin-gonic.com/"
          target="_blank"
          rel="noopener noreferrer"
        >Gin</a>
      </p>
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'Dashboard'
  })
</script>

<style scoped>
  .logo-link {
    display: inline-flex;
    border-radius: 1.25rem;
    padding: 1.25rem;
    transition: transform 0.2s ease;
  }

  .logo-link:hover {
    transform: translateY(-2px);
  }

  .logo {
    height: 6rem;
    width: 6rem;
    transition: filter 300ms;
  }

  .logo.vite:hover {
    filter: drop-shadow(0 0 1.6em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 1.6em #42b883aa);
  }
</style>
