import path from 'path'
export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      output:
      {
        format: 'es',
        strict: false,
        entryFileNames: "[name].js",
        dir: 'dist/'
      }
    }
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}