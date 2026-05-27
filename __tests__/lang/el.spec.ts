import { vi } from 'vitest';
import { register, format } from '../../src';
import el from '../../src/lang/el';

register('el', el);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('el', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'el')).toEqual('μόλις τώρα');

    vi.setSystemTime(30000);
    expect(format(date, 'el')).toEqual('30 δευτερόλεπτα πριν');

    vi.setSystemTime(60000);
    expect(format(date, 'el')).toEqual('1 λεπτό πριν');

    vi.setSystemTime(1800000);
    expect(format(date, 'el')).toEqual('30 λεπτά πριν');

    vi.setSystemTime(3600000);
    expect(format(date, 'el')).toEqual('1 ώρα πριν');

    vi.setSystemTime(28800000);
    expect(format(date, 'el')).toEqual('8 ώρες πριν');

    vi.setSystemTime(86400000);
    expect(format(date, 'el')).toEqual('1 μέρα πριν');

    vi.setSystemTime(259200000);
    expect(format(date, 'el')).toEqual('3 μέρες πριν');

    vi.setSystemTime(604800000);
    expect(format(date, 'el')).toEqual('1 εβδομάδα πριν');

    vi.setSystemTime(1814400000);
    expect(format(date, 'el')).toEqual('3 εβδομάδες πριν');

    vi.setSystemTime(2678400000);
    expect(format(date, 'el')).toEqual('1 μήνα πριν');

    vi.setSystemTime(10713600000);
    expect(format(date, 'el')).toEqual('4 μήνες πριν');

    vi.setSystemTime(31622400000);
    expect(format(date, 'el')).toEqual('1 χρόνο πριν');

    vi.setSystemTime(316224000000);
    expect(format(date, 'el')).toEqual('10 χρόνια πριν');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'el')).toEqual('σε λίγο');

    vi.setSystemTime(-30000);
    expect(format(date, 'el')).toEqual('σε 30 δευτερόλεπτα');

    vi.setSystemTime(-60000);
    expect(format(date, 'el')).toEqual('σε 1 λεπτό');

    vi.setSystemTime(-1800000);
    expect(format(date, 'el')).toEqual('σε 30 λεπτά');

    vi.setSystemTime(-3600000);
    expect(format(date, 'el')).toEqual('σε 1 ώρα');

    vi.setSystemTime(-28800000);
    expect(format(date, 'el')).toEqual('σε 8 ώρες');

    vi.setSystemTime(-86400000);
    expect(format(date, 'el')).toEqual('σε 1 μέρα');

    vi.setSystemTime(-259200000);
    expect(format(date, 'el')).toEqual('σε 3 μέρες');

    vi.setSystemTime(-604800000);
    expect(format(date, 'el')).toEqual('σε 1 εβδομάδα');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'el')).toEqual('σε 3 εβδομάδες');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'el')).toEqual('σε 1 μήνα');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'el')).toEqual('σε 4 μήνες');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'el')).toEqual('σε 1 χρόνο');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'el')).toEqual('σε 10 χρόνια');
  });
});
