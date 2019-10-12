/**
 * Created by porcus on 2018/10/09.
 * Contact: avoicefromthedust@gmail.com
 */
import { advanceTo, clear } from 'jest-date-mock';
import { format, register } from '../../src';
import hi_IN from '../../src/lang/hi_IN';

register('hi_IN', hi_IN);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('hi_IN', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'hi_IN')).toEqual('अभी');

    advanceTo(30 * 1000);
    expect(format(date, 'hi_IN')).toEqual('30 सेकंड पहले');

    advanceTo(1000 * 60);
    expect(format(date, 'hi_IN')).toEqual('1 मिनट पहले');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'hi_IN')).toEqual('30 मिनट पहले');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'hi_IN')).toEqual('1 घंटे पहले');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'hi_IN')).toEqual('8 घंटे पहले');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'hi_IN')).toEqual('1 दिन पहले');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'hi_IN')).toEqual('3 दिन पहले');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'hi_IN')).toEqual('1 सप्ताह पहले');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'hi_IN')).toEqual('3 हफ्ते पहले');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'hi_IN')).toEqual('1 महीने पहले');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'hi_IN')).toEqual('4 महीने पहले');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'hi_IN')).toEqual('1 साल पहले');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'hi_IN')).toEqual('10 साल पहले');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'hi_IN')).toEqual('कुछ समय');

    advanceTo(-30 * 1000);
    expect(format(date, 'hi_IN')).toEqual('30 सेकंड में');

    advanceTo(-1000 * 60);
    expect(format(date, 'hi_IN')).toEqual('1 मिनट में');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'hi_IN')).toEqual('30 मिनट में');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'hi_IN')).toEqual('1 घंटे में');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'hi_IN')).toEqual('8 घंटे में');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'hi_IN')).toEqual('1 दिन में');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'hi_IN')).toEqual('3 दिनों में');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'hi_IN')).toEqual('1 सप्ताह में');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'hi_IN')).toEqual('3 हफ्तों में');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'hi_IN')).toEqual('1 महीने में');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'hi_IN')).toEqual('4 महीनों में');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'hi_IN')).toEqual('1 साल में');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'hi_IN')).toEqual('10 साल में');
  });
});
