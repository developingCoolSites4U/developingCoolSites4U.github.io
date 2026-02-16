import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  // ============================================================================
  // GITHUB PAGES — Personalizza questi valori per il tuo repository:
  //
  // 1. Cambia 'site' con il tuo URL GitHub Pages:
  //    site: 'https://TUO-USERNAME.github.io'
  //
  // 2. Cambia 'base' con il nome del tuo repository:
  //    base: '/nome-del-tuo-repo'
  //
  // 3. Se usi un dominio personalizzato (es. www.sorrisoluminoso.it):
  //    site: 'https://www.sorrisoluminoso.it'
  //    base: '/'
  // ============================================================================
  site: 'https://developingcoolsites4u.github.io',
  base: '/',

  output: 'static',

  integrations: [
    react(),
    tailwind(),
  ],

  vite: {
    ssr: {
      noExternal: ['lucide-react'],
    },
  },
});
