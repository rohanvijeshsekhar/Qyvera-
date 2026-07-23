import { defineConfig } from 'vite'
import { resolve } from 'path'
import { cpSync, existsSync } from 'fs'

// Custom plugin to copy non-module JS and CSS folders into dist after build
function copyStaticFolders() {
  return {
    name: 'copy-static-folders',
    closeBundle() {
      const folders = ['js', 'styles']
      for (const folder of folders) {
        const src = resolve(__dirname, folder)
        const dest = resolve(__dirname, 'dist', folder)
        if (existsSync(src)) {
          cpSync(src, dest, { recursive: true })
          console.log(`Copied ${folder}/ → dist/${folder}/`)
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [copyStaticFolders()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'works/index.html'),
        info: resolve(__dirname, 'info/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      }
    }
  }
})
