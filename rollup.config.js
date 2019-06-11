/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/timeago.min.js',
    name: 'timeago',
    format: 'umd',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
};
