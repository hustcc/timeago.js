/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { format, render, cancel, register } from '../src/';

describe('index', () => {
  test('all', () => {
    expect(format).toBeInstanceOf(Function);
    expect(render).toBeInstanceOf(Function);
    expect(cancel).toBeInstanceOf(Function);
    expect(register).toBeInstanceOf(Function);
  });

  test('format', () => {
    expect(format(+new Date() - 5000)).toBe('just now');

    expect(format(+new Date() - 1000 * 1000, 'zh_CN')).toBe('16 分钟前');
  });

  test('cancel', () => {
    cancel();

    const node = {
      getAttribute: () => 1,
    };

    // @ts-ignore
    cancel(node);
  });
});
