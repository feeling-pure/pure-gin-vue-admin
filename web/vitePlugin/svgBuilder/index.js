import { existsSync, readdirSync, readFileSync } from 'fs'

const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g
const clearReturn = /(\r)|(\n)/g

const toPosix = (value) => value.replace(/\\/g, '/')

const ensureTrailingSlash = (dir) => {
  const posixDir = toPosix(dir)
  return posixDir.endsWith('/') ? posixDir : `${posixDir}/`
}

/**
 * 将指定目录中的 SVG 转为 symbol。
 * symbol id 规则与 src/core/global.js 保持一致：
 * - src/plugin/<插件名>/ 下：`<插件名>-<文件名>`
 * - 其他目录：文件名
 */
const findSvgFile = (dirs) => {
  const svgRes = []
  for (const dir of dirs) {
    const currentDir = ensureTrailingSlash(dir)
    if (!existsSync(currentDir)) {
      continue
    }
    const dirents = readdirSync(currentDir, { withFileTypes: true })
    for (const dirent of dirents) {
      let pluginName = ''
      if (currentDir.startsWith('./src/plugin')) {
        pluginName = `${currentDir.split('/')[3]}-`
      }
      if (dirent.isDirectory()) {
        svgRes.push(...findSvgFile([`${currentDir}${dirent.name}/`]))
        continue
      }
      if (!dirent.name.endsWith('.svg')) {
        continue
      }
      const svg = readFileSync(`${currentDir}${dirent.name}`)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, ($1, $2) => {
          let width = 0
          let height = 0
          let content = $2.replace(clearHeightWidth, (s1, s2, s3) => {
            if (s2 === 'width') {
              width = s3
            } else if (s2 === 'height') {
              height = s3
            }
            return ''
          })
          if (!/viewBox="[^>+].*?"/.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`
          }
          return `<symbol id="${pluginName}${dirent.name.replace('.svg', '')}" ${content}>`
        })
        .replace('</svg>', '</symbol>')
      svgRes.push(svg)
    }
  }
  return svgRes
}

export const svgBuilder = (paths) => {
  if (!paths) {
    return
  }
  const scanPaths = typeof paths === 'string' ? [paths] : paths
  return {
    name: 'svg-auto-import',
    transformIndexHtml(html) {
      const res = findSvgFile(scanPaths)
      return html.replace(
        '<body>',
        `
<body>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
    ${res.join('')}
  </svg>
`
      )
    }
  }
}

export default svgBuilder
