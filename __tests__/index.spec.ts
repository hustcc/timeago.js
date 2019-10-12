/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { format, render, cancel, register } from '../src/';

describe('timeago.js core', () => {
  test('export', () => {
    expect(format).toBeInstanceOf(Function);
    expect(render).toBeInstanceOf(Function);
    expect(cancel).toBeInstanceOf(Function);
    expect(register).toBeInstanceOf(Function);
  });
});
