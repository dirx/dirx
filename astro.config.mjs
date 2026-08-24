import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  integrations: [
    icon({
      include: {
        'material-symbols-light': [
          'light-mode-outline-rounded',
          'dark-mode-outline-rounded',
          'menu-outline-rounded',
          'monitor-outline-rounded',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
