import { vi } from 'vitest';
import { register, format } from '../../src';
import bg from '../../src/lang/bg';

register('bg', bg);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('bg', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'bg')).toEqual('току що');

    vi.setSystemTime(30000);
    expect(format(date, 'bg')).toEqual('преди 30 секунди');

    vi.setSystemTime(60000);
    expect(format(date, 'bg')).toEqual('преди 1 минута');

    vi.setSystemTime(1800000);
    expect(format(date, 'bg')).toEqual('преди 30 минути');

    vi.setSystemTime(3600000);
    expect(format(date, 'bg')).toEqual('преди 1 час');

    vi.setSystemTime(28800000);
    expect(format(date, 'bg')).toEqual('преди 8 часа');

    vi.setSystemTime(86400000);
    expect(format(date, 'bg')).toEqual('преди 1 ден');

    vi.setSystemTime(259200000);
    expect(format(date, 'bg')).toEqual('преди 3 дни');

    vi.setSystemTime(604800000);
    expect(format(date, 'bg')).toEqual('преди 1 седмица');

    vi.setSystemTime(1814400000);
    expect(format(date, 'bg')).toEqual('преди 3 седмици');

    vi.setSystemTime(2678400000);
    expect(format(date, 'bg')).toEqual('преди 1 месец');

    vi.setSystemTime(10713600000);
    expect(format(date, 'bg')).toEqual('преди 4 месеца');

    vi.setSystemTime(31622400000);
    expect(format(date, 'bg')).toEqual('преди 1 година');

    vi.setSystemTime(316224000000);
    expect(format(date, 'bg')).toEqual('преди 10 години');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'bg')).toEqual('съвсем скоро');

    vi.setSystemTime(-30000);
    expect(format(date, 'bg')).toEqual('след 30 секунди');

    vi.setSystemTime(-60000);
    expect(format(date, 'bg')).toEqual('след 1 минута');

    vi.setSystemTime(-1800000);
    expect(format(date, 'bg')).toEqual('след 30 минути');

    vi.setSystemTime(-3600000);
    expect(format(date, 'bg')).toEqual('след 1 час');

    vi.setSystemTime(-28800000);
    expect(format(date, 'bg')).toEqual('след 8 часа');

    vi.setSystemTime(-86400000);
    expect(format(date, 'bg')).toEqual('след 1 ден');

    vi.setSystemTime(-259200000);
    expect(format(date, 'bg')).toEqual('след 3 дни');

    vi.setSystemTime(-604800000);
    expect(format(date, 'bg')).toEqual('след 1 седмица');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'bg')).toEqual('след 3 седмици');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'bg')).toEqual('след 1 месец');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'bg')).toEqual('след 4 месеца');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'bg')).toEqual('след 1 година');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'bg')).toEqual('след 10 години');
  });
});
