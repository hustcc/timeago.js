/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

module.exports = [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/timeago.min.js',
      name: 'timeago',
      format: 'umd',
    },
    plugins: [
      resolve(),
      typescript(),
      uglify(),
    ],
  },
  {
    input: 'src/full.ts',
    output: {
      file: 'dist/timeago.full.min.js',
      name: 'timeago',
      format: 'umd',
    },
    plugins: [
      resolve(),
      typescript(),
      uglify(),
    ],
  },
];
