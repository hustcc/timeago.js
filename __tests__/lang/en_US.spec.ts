import { vi } from 'vitest';
import { register, format } from '../../src';
import en_US from '../../src/lang/en_US';

register('en_US', en_US);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('en_US', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'en_US')).toEqual('just now');

    vi.setSystemTime(30000);
    expect(format(date, 'en_US')).toEqual('30 seconds ago');

    vi.setSystemTime(60000);
    expect(format(date, 'en_US')).toEqual('1 minute ago');

    vi.setSystemTime(1800000);
    expect(format(date, 'en_US')).toEqual('30 minutes ago');

    vi.setSystemTime(3600000);
    expect(format(date, 'en_US')).toEqual('1 hour ago');

    vi.setSystemTime(28800000);
    expect(format(date, 'en_US')).toEqual('8 hours ago');

    vi.setSystemTime(86400000);
    expect(format(date, 'en_US')).toEqual('1 day ago');

    vi.setSystemTime(259200000);
    expect(format(date, 'en_US')).toEqual('3 days ago');

    vi.setSystemTime(604800000);
    expect(format(date, 'en_US')).toEqual('1 week ago');

    vi.setSystemTime(1814400000);
    expect(format(date, 'en_US')).toEqual('3 weeks ago');

    vi.setSystemTime(2678400000);
    expect(format(date, 'en_US')).toEqual('1 month ago');

    vi.setSystemTime(10713600000);
    expect(format(date, 'en_US')).toEqual('4 months ago');

    vi.setSystemTime(31622400000);
    expect(format(date, 'en_US')).toEqual('1 year ago');

    vi.setSystemTime(316224000000);
    expect(format(date, 'en_US')).toEqual('10 years ago');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'en_US')).toEqual('right now');

    vi.setSystemTime(-30000);
    expect(format(date, 'en_US')).toEqual('in 30 seconds');

    vi.setSystemTime(-60000);
    expect(format(date, 'en_US')).toEqual('in 1 minute');

    vi.setSystemTime(-1800000);
    expect(format(date, 'en_US')).toEqual('in 30 minutes');

    vi.setSystemTime(-3600000);
    expect(format(date, 'en_US')).toEqual('in 1 hour');

    vi.setSystemTime(-28800000);
    expect(format(date, 'en_US')).toEqual('in 8 hours');

    vi.setSystemTime(-86400000);
    expect(format(date, 'en_US')).toEqual('in 1 day');

    vi.setSystemTime(-259200000);
    expect(format(date, 'en_US')).toEqual('in 3 days');

    vi.setSystemTime(-604800000);
    expect(format(date, 'en_US')).toEqual('in 1 week');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'en_US')).toEqual('in 3 weeks');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'en_US')).toEqual('in 1 month');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'en_US')).toEqual('in 4 months');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'en_US')).toEqual('in 1 year');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'en_US')).toEqual('in 10 years');
  });
});
