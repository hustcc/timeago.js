/**
 * Created by lazehang on 2022/05/06.
 * Contact: hello@lazehang.com
 */

import { format, register } from '../../src';
import { ne } from '../../src/lang';

register('ne', ne);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ne', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'ne')).toEqual('अहिले');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'ne')).toEqual('30 सेकेन्ड अघि');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'ne')).toEqual('1 मिनेट अघि');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'ne')).toEqual('30 मिनेट अघि');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'ne')).toEqual('1 घण्टा अघि');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'ne')).toEqual('8 घण्टा अघि');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'ne')).toEqual('1 दिन अघि');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ne')).toEqual('3 दिन अघि');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ne')).toEqual('1 हप्ता अघि');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ne')).toEqual('3 हप्ता अघि');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ne')).toEqual('1 महिना अघि');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ne')).toEqual('4 महिना अघि');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ne')).toEqual('1 वर्ष अघि');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ne')).toEqual('10 वर्ष अघि');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'ne')).toEqual('केहि समय');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'ne')).toEqual('30 सेकेन्डमा');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'ne')).toEqual('1 मिनेटमा');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'ne')).toEqual('30 मिनेटमा');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'ne')).toEqual('1 घण्टामा');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'ne')).toEqual('8 घण्टामा');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'ne')).toEqual('1 दिनमा');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ne')).toEqual('3 दिनमा');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ne')).toEqual('1 हप्तामा');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ne')).toEqual('3 हप्तामा');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ne')).toEqual('1 महिनामा');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ne')).toEqual('4 महिनामा');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ne')).toEqual('1 वर्षमा');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ne')).toEqual('10 वर्षमा');
  });
});
