import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://madrid-zona-ser.vtolsolution.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
