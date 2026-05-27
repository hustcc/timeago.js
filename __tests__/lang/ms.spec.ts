import { vi } from 'vitest';
import { register, format } from '../../src';
import ms from '../../src/lang/ms';

register('ms', ms);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ms', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'ms')).toEqual('baru sahaja');

    vi.setSystemTime(30000);
    expect(format(date, 'ms')).toEqual('30 saat yang lalu');

    vi.setSystemTime(60000);
    expect(format(date, 'ms')).toEqual('1 minit yang lalu');

    vi.setSystemTime(1800000);
    expect(format(date, 'ms')).toEqual('30 minit yang lalu');

    vi.setSystemTime(3600000);
    expect(format(date, 'ms')).toEqual('1 jam yang lalu');

    vi.setSystemTime(28800000);
    expect(format(date, 'ms')).toEqual('8 jam yang lalu');

    vi.setSystemTime(86400000);
    expect(format(date, 'ms')).toEqual('1 hari yang lalu');

    vi.setSystemTime(259200000);
    expect(format(date, 'ms')).toEqual('3 hari yang lalu');

    vi.setSystemTime(604800000);
    expect(format(date, 'ms')).toEqual('1 minggu yang lalu');

    vi.setSystemTime(1814400000);
    expect(format(date, 'ms')).toEqual('3 minggu yang lalu');

    vi.setSystemTime(2678400000);
    expect(format(date, 'ms')).toEqual('1 bulan yang lalu');

    vi.setSystemTime(10713600000);
    expect(format(date, 'ms')).toEqual('4 bulan yang lalu');

    vi.setSystemTime(31622400000);
    expect(format(date, 'ms')).toEqual('1 tahun yang lalu');

    vi.setSystemTime(316224000000);
    expect(format(date, 'ms')).toEqual('10 tahun yang lalu');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'ms')).toEqual('sebentar');

    vi.setSystemTime(-30000);
    expect(format(date, 'ms')).toEqual('dalam 30 saat');

    vi.setSystemTime(-60000);
    expect(format(date, 'ms')).toEqual('dalam 1 minit');

    vi.setSystemTime(-1800000);
    expect(format(date, 'ms')).toEqual('dalam 30 minit');

    vi.setSystemTime(-3600000);
    expect(format(date, 'ms')).toEqual('dalam 1 jam');

    vi.setSystemTime(-28800000);
    expect(format(date, 'ms')).toEqual('dalam 8 jam');

    vi.setSystemTime(-86400000);
    expect(format(date, 'ms')).toEqual('dalam 1 hari');

    vi.setSystemTime(-259200000);
    expect(format(date, 'ms')).toEqual('dalam 3 hari');

    vi.setSystemTime(-604800000);
    expect(format(date, 'ms')).toEqual('dalam 1 minggu');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'ms')).toEqual('dalam 3 minggu');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'ms')).toEqual('dalam 1 bulan');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'ms')).toEqual('dalam 4 bulan');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'ms')).toEqual('dalam 1 tahun');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'ms')).toEqual('dalam 10 tahun');
  });
});
