import { vi } from 'vitest';
import { register, format } from '../../src';
import bn_IN from '../../src/lang/bn_IN';

register('bn_IN', bn_IN);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('bn_IN', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'bn_IN')).toEqual('এইমাত্র');

    vi.setSystemTime(30000);
    expect(format(date, 'bn_IN')).toEqual('30 সেকেন্ড আগে');

    vi.setSystemTime(60000);
    expect(format(date, 'bn_IN')).toEqual('1 মিনিট আগে');

    vi.setSystemTime(1800000);
    expect(format(date, 'bn_IN')).toEqual('30 এর মিনিট আগে');

    vi.setSystemTime(3600000);
    expect(format(date, 'bn_IN')).toEqual('1 ঘন্টা আগে');

    vi.setSystemTime(28800000);
    expect(format(date, 'bn_IN')).toEqual('8 ঘণ্টা আগে');

    vi.setSystemTime(86400000);
    expect(format(date, 'bn_IN')).toEqual('1 দিন আগে');

    vi.setSystemTime(259200000);
    expect(format(date, 'bn_IN')).toEqual('3 এর দিন আগে');

    vi.setSystemTime(604800000);
    expect(format(date, 'bn_IN')).toEqual('1 সপ্তাহ আগে');

    vi.setSystemTime(1814400000);
    expect(format(date, 'bn_IN')).toEqual('3 এর সপ্তাহ আগে');

    vi.setSystemTime(2678400000);
    expect(format(date, 'bn_IN')).toEqual('1 মাস আগে');

    vi.setSystemTime(10713600000);
    expect(format(date, 'bn_IN')).toEqual('4 মাস আগে');

    vi.setSystemTime(31622400000);
    expect(format(date, 'bn_IN')).toEqual('1 বছর আগে');

    vi.setSystemTime(316224000000);
    expect(format(date, 'bn_IN')).toEqual('10 বছর আগে');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'bn_IN')).toEqual('একটা সময়');

    vi.setSystemTime(-30000);
    expect(format(date, 'bn_IN')).toEqual('30 এর সেকেন্ডের মধ্যে');

    vi.setSystemTime(-60000);
    expect(format(date, 'bn_IN')).toEqual('1 মিনিটে');

    vi.setSystemTime(-1800000);
    expect(format(date, 'bn_IN')).toEqual('30 এর মিনিটের মধ্যে');

    vi.setSystemTime(-3600000);
    expect(format(date, 'bn_IN')).toEqual('1 ঘন্টা');

    vi.setSystemTime(-28800000);
    expect(format(date, 'bn_IN')).toEqual('8 এর ঘন্টার মধ্যে');

    vi.setSystemTime(-86400000);
    expect(format(date, 'bn_IN')).toEqual('1 দিনের মধ্যে');

    vi.setSystemTime(-259200000);
    expect(format(date, 'bn_IN')).toEqual('3 এর দিন');

    vi.setSystemTime(-604800000);
    expect(format(date, 'bn_IN')).toEqual('1 সপ্তাহের মধ্যে');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'bn_IN')).toEqual('3 সপ্তাহের মধ্যে');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'bn_IN')).toEqual('1 মাসে');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'bn_IN')).toEqual('4 মাসে');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'bn_IN')).toEqual('1 বছরের মধ্যে');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'bn_IN')).toEqual('10 বছরে');
  });
});
