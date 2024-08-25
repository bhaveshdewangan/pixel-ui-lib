import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

const getBaseConfig = ({ plugins = [], lib }) => {
  console.log(lib);
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        outDir: './dist/types'
      }),
      ...plugins
    ],
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, 'src'), // eslint-disable-line
    //     '@Types': path.resolve(__dirname, 'src/utils'), // eslint-disable-line
    //     '@Constants': path.resolve(__dirname, 'src/utils') // eslint-disable-line
    //   }
    // },
    build: {
      lib,
      emptyOutDir: true,
      minify: 'esbuild',
      rollupOptions: {
        input: lib.entry,
        external: isExternal,
        output: {
          globals: {
            react: 'React'
          }
        }
      }
    }
  });
};

export default getBaseConfig;
