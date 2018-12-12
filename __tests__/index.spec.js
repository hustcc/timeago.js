/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import pkg from '../package.json';
import { format, render, cancel, register, version } from '../src/';

jest.useFakeTimers();

describe('index', () => {
  test('all', () => {
    expect(format).toBeFunction();
    expect(render).toBeFunction();
    expect(cancel).toBeFunction();
    expect(register).toBeFunction();

    expect(version).toBe(pkg.version);
  });

  test('format', () => {
    expect(format(new Date() - 7000)).toBe('just now');

    expect(format(new Date() - 1000 * 1000, 'zh_CN')).toBe('16 分钟前');
  });

  test('render', () => {
    // render array
    render([{}]);
    jest.advanceTimersByTime(30000);

    // render node
    render({});
    jest.advanceTimersByTime(30000);
    expect(format(new Date() - 1000 * 1000, 'zh_CN')).toBe('16 分钟前');
  });

  test('cancel', () => {
    cancel();

    const node = {
      getAttribute: () => 1,
    };

    cancel(node);
  });
});
