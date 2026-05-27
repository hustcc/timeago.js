/**
 * Created by porcus on 2018/10/09.
 * Contact: avoicefromthedust@gmail.com
 */

import { format, register } from '../../src';
import hi_IN from '../../src/lang/hi_IN';

register('hi_IN', hi_IN);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('hi_IN', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'hi_IN')).toEqual('अभी');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'hi_IN')).toEqual('30 सेकंड पहले');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'hi_IN')).toEqual('1 मिनट पहले');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'hi_IN')).toEqual('30 मिनट पहले');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'hi_IN')).toEqual('1 घंटे पहले');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'hi_IN')).toEqual('8 घंटे पहले');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'hi_IN')).toEqual('1 दिन पहले');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'hi_IN')).toEqual('3 दिन पहले');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'hi_IN')).toEqual('1 सप्ताह पहले');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'hi_IN')).toEqual('3 हफ्ते पहले');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'hi_IN')).toEqual('1 महीने पहले');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'hi_IN')).toEqual('4 महीने पहले');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'hi_IN')).toEqual('1 साल पहले');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'hi_IN')).toEqual('10 साल पहले');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'hi_IN')).toEqual('कुछ समय');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'hi_IN')).toEqual('30 सेकंड में');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'hi_IN')).toEqual('1 मिनट में');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'hi_IN')).toEqual('30 मिनट में');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'hi_IN')).toEqual('1 घंटे में');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'hi_IN')).toEqual('8 घंटे में');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'hi_IN')).toEqual('1 दिन में');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'hi_IN')).toEqual('3 दिनों में');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'hi_IN')).toEqual('1 सप्ताह में');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'hi_IN')).toEqual('3 हफ्तों में');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'hi_IN')).toEqual('1 महीने में');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'hi_IN')).toEqual('4 महीनों में');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'hi_IN')).toEqual('1 साल में');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'hi_IN')).toEqual('10 साल में');
  });
});
