import { vi } from 'vitest';
import { register, format } from '../../src';
import en_short from '../../src/lang/en_short';

register('en_short', en_short);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('en_short', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'en_short')).toEqual('just now');

    vi.setSystemTime(30000);
    expect(format(date, 'en_short')).toEqual('30s ago');

    vi.setSystemTime(60000);
    expect(format(date, 'en_short')).toEqual('1m ago');

    vi.setSystemTime(1800000);
    expect(format(date, 'en_short')).toEqual('30m ago');

    vi.setSystemTime(3600000);
    expect(format(date, 'en_short')).toEqual('1h ago');

    vi.setSystemTime(28800000);
    expect(format(date, 'en_short')).toEqual('8h ago');

    vi.setSystemTime(86400000);
    expect(format(date, 'en_short')).toEqual('1d ago');

    vi.setSystemTime(259200000);
    expect(format(date, 'en_short')).toEqual('3d ago');

    vi.setSystemTime(604800000);
    expect(format(date, 'en_short')).toEqual('1w ago');

    vi.setSystemTime(1814400000);
    expect(format(date, 'en_short')).toEqual('3w ago');

    vi.setSystemTime(2678400000);
    expect(format(date, 'en_short')).toEqual('1mo ago');

    vi.setSystemTime(10713600000);
    expect(format(date, 'en_short')).toEqual('4mo ago');

    vi.setSystemTime(31622400000);
    expect(format(date, 'en_short')).toEqual('1yr ago');

    vi.setSystemTime(316224000000);
    expect(format(date, 'en_short')).toEqual('10yr ago');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'en_short')).toEqual('right now');

    vi.setSystemTime(-30000);
    expect(format(date, 'en_short')).toEqual('in 30s');

    vi.setSystemTime(-60000);
    expect(format(date, 'en_short')).toEqual('in 1m');

    vi.setSystemTime(-1800000);
    expect(format(date, 'en_short')).toEqual('in 30m');

    vi.setSystemTime(-3600000);
    expect(format(date, 'en_short')).toEqual('in 1h');

    vi.setSystemTime(-28800000);
    expect(format(date, 'en_short')).toEqual('in 8h');

    vi.setSystemTime(-86400000);
    expect(format(date, 'en_short')).toEqual('in 1d');

    vi.setSystemTime(-259200000);
    expect(format(date, 'en_short')).toEqual('in 3d');

    vi.setSystemTime(-604800000);
    expect(format(date, 'en_short')).toEqual('in 1w');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'en_short')).toEqual('in 3w');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'en_short')).toEqual('in 1mo');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'en_short')).toEqual('in 4mo');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'en_short')).toEqual('in 1yr');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'en_short')).toEqual('in 10yr');
  });
});
