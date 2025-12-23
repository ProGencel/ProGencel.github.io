import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // DİKKAT: Aşağıdaki 'repo-adin' kısmını kendi GitHub repo adınla değiştir.
  // Başında ve sonunda / işareti MUTLAKA olmalı.
  // Eğer reponun adı direkt "ahmet.github.io" gibi ise burayı sadece '/' yap.
  base: '/https://github.com/ProGencel/ProGencel.github.io/', 
})