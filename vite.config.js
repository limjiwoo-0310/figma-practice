import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 주소(https://limjiwoo-0310.github.io/figma-practice/)의 하위 경로
  base: '/figma-practice/',
  plugins: [react()],
})
