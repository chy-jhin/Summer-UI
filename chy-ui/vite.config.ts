import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"./",//打包路径
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src'),//设置别名
    }
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dists', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
  //全局配置scss变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/global";'
      }
    }
  },
  server: {
    port:8084,//启动端口
    open: true,
     proxy: {
        '/api': {
          target: 'https://localhost:8084',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      },
    cors:true
  }

})
