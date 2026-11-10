import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wangbinyq.github.io',
  base: '/dankoe-cn',
  build: { format: 'file' },
  trailingSlash: 'never',
  devToolbar: { enabled: false },
});
