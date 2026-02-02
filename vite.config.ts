import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const mainEntry = new URL('./index.html', import.meta.url)
const cartaStoicaEntry = new URL('./carta-stoica/index.html', import.meta.url)
const pensarClaroEntry = new URL('./pensar-claro/index.html', import.meta.url)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: mainEntry.pathname,
        cartaStoica: cartaStoicaEntry.pathname,
        pensarClaro: pensarClaroEntry.pathname
      }
    }
  }
})
