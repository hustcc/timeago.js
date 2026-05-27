import { vi } from 'vitest';
import { register, format } from '../../src';
import nn_NO from '../../src/lang/nn_NO';

register('nn_NO', nn_NO);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('nn_NO', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'nn_NO')).toEqual('nett no');

    vi.setSystemTime(30000);
    expect(format(date, 'nn_NO')).toEqual('30 sekund sidan');

    vi.setSystemTime(60000);
    expect(format(date, 'nn_NO')).toEqual('1 minutt sidan');

    vi.setSystemTime(1800000);
    expect(format(date, 'nn_NO')).toEqual('30 minutt sidan');

    vi.setSystemTime(3600000);
    expect(format(date, 'nn_NO')).toEqual('1 time sidan');

    vi.setSystemTime(28800000);
    expect(format(date, 'nn_NO')).toEqual('8 timar sidan');

    vi.setSystemTime(86400000);
    expect(format(date, 'nn_NO')).toEqual('1 dag sidan');

    vi.setSystemTime(259200000);
    expect(format(date, 'nn_NO')).toEqual('3 dagar sidan');

    vi.setSystemTime(604800000);
    expect(format(date, 'nn_NO')).toEqual('1 veke sidan');

    vi.setSystemTime(1814400000);
    expect(format(date, 'nn_NO')).toEqual('3 veker sidan');

    vi.setSystemTime(2678400000);
    expect(format(date, 'nn_NO')).toEqual('1 månad sidan');

    vi.setSystemTime(10713600000);
    expect(format(date, 'nn_NO')).toEqual('4 månadar sidan');

    vi.setSystemTime(31622400000);
    expect(format(date, 'nn_NO')).toEqual('1 år sidan');

    vi.setSystemTime(316224000000);
    expect(format(date, 'nn_NO')).toEqual('10 år sidan');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'nn_NO')).toEqual('om litt');

    vi.setSystemTime(-30000);
    expect(format(date, 'nn_NO')).toEqual('om 30 sekund');

    vi.setSystemTime(-60000);
    expect(format(date, 'nn_NO')).toEqual('om 1 minutt');

    vi.setSystemTime(-1800000);
    expect(format(date, 'nn_NO')).toEqual('om 30 minutt');

    vi.setSystemTime(-3600000);
    expect(format(date, 'nn_NO')).toEqual('om 1 time');

    vi.setSystemTime(-28800000);
    expect(format(date, 'nn_NO')).toEqual('om 8 timar');

    vi.setSystemTime(-86400000);
    expect(format(date, 'nn_NO')).toEqual('om 1 dag');

    vi.setSystemTime(-259200000);
    expect(format(date, 'nn_NO')).toEqual('om 3 dagar');

    vi.setSystemTime(-604800000);
    expect(format(date, 'nn_NO')).toEqual('om 1 veke');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'nn_NO')).toEqual('om 3 veker');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'nn_NO')).toEqual('om 1 månad');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'nn_NO')).toEqual('om 4 månadar');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'nn_NO')).toEqual('om 1 år');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'nn_NO')).toEqual('om 10 år');
  });
});
