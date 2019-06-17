/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/all.js',
  output: {
    file: 'dist/timeago.locales.min.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
};
