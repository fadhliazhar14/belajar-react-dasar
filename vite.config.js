import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello_world: "hello-world.html",
        contact: "contact.html",
        task: "task.html",
        counter: "counter.html",
        note: "note.html",
        profile: "profile.html",
        timer: "timer.html",
        guestbook: "guestbook.html",
        product: "product.html"
      }
    }
  }
})
