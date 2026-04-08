import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/tarea_5_mmt_academy/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienes_somos: resolve(__dirname, 'quienes_somos.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        blog: resolve(__dirname, 'blog.html'),
        registro: resolve(__dirname, 'registro.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        curso_1: resolve(__dirname, 'curso_1.html'),
        curso_2: resolve(__dirname, 'curso_2.html'),
      }
    }
  },
  server: {
    open: {
      app: {
        name: 'google chrome',
        arguments: ['--new-window']
      }
    }
  }
})