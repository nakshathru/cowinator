import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const copyConfig = {
  targets: [
    { src: 'public/index.html', dest: 'build', rename: 'index.html' }
  ],
};

const config = {
  input: 'src/router.ts',
  output: {
    dir: 'build',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    typescript(),
    replace({
      'preventAssignment': true,
      'Reflect.decorate': 'undefined'
    }),
    resolve(),
    copy(copyConfig),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};


export default config
