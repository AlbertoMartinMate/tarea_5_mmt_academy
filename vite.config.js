import { defineConfig } from 'vite'

export default defineConfig({
  base: '/tarea_5_mmt_academy/',
  server: {
    open: {
      app: {
        name: 'google chrome',
        arguments: ['--new-window']
      }
    }
  }
})