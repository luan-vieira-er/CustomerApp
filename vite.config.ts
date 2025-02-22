import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3030,
    allowedHosts: ['localhost', '127.0.0.1', 'customer-lb-1291552512.us-east-2.elb.amazonaws.com'],
  },
  preview: {
    port: 8080
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
      external: ['*'],
    },
  },
});
