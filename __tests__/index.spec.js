/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { advanceBy, advanceTo, clear } from 'jest-date-mock';
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
    expect(format(new Date() - 11000)).toBe('11 seconds ago');

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

  test('render with minimal interval', () => {
    const minIntTest = (dt, minInt, duration, before, after) => {
      // Mock Date
      advanceTo(new Date());

      // Prepare the element
      let n = document.createElement('time');
      n.setAttribute('datetime', dt.toISOString());

      render(n, undefined, undefined, minInt);

      // Test the initial state
      expect(n.innerHTML).toBe(before);

      // Advance time
      for (var i = 0; i < duration; i++) {
        advanceBy(1000);
        jest.advanceTimersByTime(1000);
      }
      // Test the initial state
      expect(n.innerHTML).toBe(after);

      // Clean up Date mocking
      clear();
    };
    minIntTest(new Date(),  1, 14, 'just now', '14 seconds ago');
    minIntTest(new Date(),  5, 14, 'just now', '10 seconds ago');
    minIntTest(new Date(),  5, 15, 'just now', '15 seconds ago');
    minIntTest(new Date(), undefined, 14, 'just now', '14 seconds ago');
    minIntTest(new Date(), -1, 14, 'just now', '14 seconds ago');
    minIntTest(new Date(), 60, 59, 'just now', 'just now');
    const d = new Date();
    d.setSeconds(d.getSeconds() - 11);
    minIntTest(d, 1, 14, '11 seconds ago', '25 seconds ago');
    minIntTest(d, 5, 14, '11 seconds ago', '21 seconds ago');
  });

  test('cancel', () => {
    cancel();

    const node = {
      getAttribute: () => 1,
    };

    cancel(node);
  });
});
