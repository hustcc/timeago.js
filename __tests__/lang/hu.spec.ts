import { vi } from 'vitest';
import { register, format } from '../../src';
import hu from '../../src/lang/hu';

register('hu', hu);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('hu', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'hu')).toEqual('éppen most');

    vi.setSystemTime(30000);
    expect(format(date, 'hu')).toEqual('30 másodperce');

    vi.setSystemTime(60000);
    expect(format(date, 'hu')).toEqual('1 perce');

    vi.setSystemTime(1800000);
    expect(format(date, 'hu')).toEqual('30 perce');

    vi.setSystemTime(3600000);
    expect(format(date, 'hu')).toEqual('1 órája');

    vi.setSystemTime(28800000);
    expect(format(date, 'hu')).toEqual('8 órája');

    vi.setSystemTime(86400000);
    expect(format(date, 'hu')).toEqual('1 napja');

    vi.setSystemTime(259200000);
    expect(format(date, 'hu')).toEqual('3 napja');

    vi.setSystemTime(604800000);
    expect(format(date, 'hu')).toEqual('1 hete');

    vi.setSystemTime(1814400000);
    expect(format(date, 'hu')).toEqual('3 hete');

    vi.setSystemTime(2678400000);
    expect(format(date, 'hu')).toEqual('1 hónapja');

    vi.setSystemTime(10713600000);
    expect(format(date, 'hu')).toEqual('4 hónapja');

    vi.setSystemTime(31622400000);
    expect(format(date, 'hu')).toEqual('1 éve');

    vi.setSystemTime(316224000000);
    expect(format(date, 'hu')).toEqual('10 éve');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'hu')).toEqual('éppen most');

    vi.setSystemTime(-30000);
    expect(format(date, 'hu')).toEqual('30 másodpercen belül');

    vi.setSystemTime(-60000);
    expect(format(date, 'hu')).toEqual('1 percen belül');

    vi.setSystemTime(-1800000);
    expect(format(date, 'hu')).toEqual('30 percen belül');

    vi.setSystemTime(-3600000);
    expect(format(date, 'hu')).toEqual('1 órán belül');

    vi.setSystemTime(-28800000);
    expect(format(date, 'hu')).toEqual('8 órán belül');

    vi.setSystemTime(-86400000);
    expect(format(date, 'hu')).toEqual('1 napon belül');

    vi.setSystemTime(-259200000);
    expect(format(date, 'hu')).toEqual('3 napon belül');

    vi.setSystemTime(-604800000);
    expect(format(date, 'hu')).toEqual('1 héten belül');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'hu')).toEqual('3 héten belül');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'hu')).toEqual('1 hónapon belül');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'hu')).toEqual('4 hónapon belül');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'hu')).toEqual('1 éven belül');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'hu')).toEqual('10 éven belül');
  });
});
