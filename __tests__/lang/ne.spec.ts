/**
 * Created by lazehang on 2022/05/06.
 * Contact: hello@lazehang.com
 */
import { advanceTo, clear } from 'jest-date-mock';
import { format, register } from '../../src';
import { ne } from '../../src/lang';

register('ne', ne);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('ne', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'ne')).toEqual('अहिले');

    advanceTo(30 * 1000);
    expect(format(date, 'ne')).toEqual('30 सेकेन्ड अघि');

    advanceTo(1000 * 60);
    expect(format(date, 'ne')).toEqual('1 मिनेट अघि');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'ne')).toEqual('30 मिनेट अघि');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'ne')).toEqual('1 घण्टा अघि');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'ne')).toEqual('8 घण्टा अघि');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'ne')).toEqual('1 दिन अघि');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ne')).toEqual('3 दिन अघि');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ne')).toEqual('1 हप्ता अघि');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ne')).toEqual('3 हप्ता अघि');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ne')).toEqual('1 महिना अघि');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ne')).toEqual('4 महिना अघि');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ne')).toEqual('1 वर्ष अघि');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ne')).toEqual('10 वर्ष अघि');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'ne')).toEqual('केहि समय');

    advanceTo(-30 * 1000);
    expect(format(date, 'ne')).toEqual('30 सेकेन्डमा');

    advanceTo(-1000 * 60);
    expect(format(date, 'ne')).toEqual('1 मिनेटमा');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'ne')).toEqual('30 मिनेटमा');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'ne')).toEqual('1 घण्टामा');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'ne')).toEqual('8 घण्टामा');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'ne')).toEqual('1 दिनमा');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ne')).toEqual('3 दिनमा');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ne')).toEqual('1 हप्तामा');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ne')).toEqual('3 हप्तामा');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ne')).toEqual('1 महिनामा');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ne')).toEqual('4 महिनामा');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ne')).toEqual('1 वर्षमा');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ne')).toEqual('10 वर्षमा');
  });
});
