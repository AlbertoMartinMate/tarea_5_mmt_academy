import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: {
      app: {
        name: 'google chrome',
        arguments: ['--new-window']
      }
    }
  }
})