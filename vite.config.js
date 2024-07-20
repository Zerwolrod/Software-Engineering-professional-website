import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true,//自动打开浏览器
    port:8088
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
    }
  },
  plugins: [vue()],
})

