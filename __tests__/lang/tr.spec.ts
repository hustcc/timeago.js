import { vi } from 'vitest';
import { register, format } from '../../src';
import tr from '../../src/lang/tr';

register('tr', tr);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('tr', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'tr')).toEqual('az önce');

    vi.setSystemTime(30000);
    expect(format(date, 'tr')).toEqual('30 saniye önce');

    vi.setSystemTime(60000);
    expect(format(date, 'tr')).toEqual('1 dakika önce');

    vi.setSystemTime(1800000);
    expect(format(date, 'tr')).toEqual('30 dakika önce');

    vi.setSystemTime(3600000);
    expect(format(date, 'tr')).toEqual('1 saat önce');

    vi.setSystemTime(28800000);
    expect(format(date, 'tr')).toEqual('8 saat önce');

    vi.setSystemTime(86400000);
    expect(format(date, 'tr')).toEqual('1 gün önce');

    vi.setSystemTime(259200000);
    expect(format(date, 'tr')).toEqual('3 gün önce');

    vi.setSystemTime(604800000);
    expect(format(date, 'tr')).toEqual('1 hafta önce');

    vi.setSystemTime(1814400000);
    expect(format(date, 'tr')).toEqual('3 hafta önce');

    vi.setSystemTime(2678400000);
    expect(format(date, 'tr')).toEqual('1 ay önce');

    vi.setSystemTime(10713600000);
    expect(format(date, 'tr')).toEqual('4 ay önce');

    vi.setSystemTime(31622400000);
    expect(format(date, 'tr')).toEqual('1 yıl önce');

    vi.setSystemTime(316224000000);
    expect(format(date, 'tr')).toEqual('10 yıl önce');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'tr')).toEqual('şimdi');

    vi.setSystemTime(-30000);
    expect(format(date, 'tr')).toEqual('30 saniye içinde');

    vi.setSystemTime(-60000);
    expect(format(date, 'tr')).toEqual('1 dakika içinde');

    vi.setSystemTime(-1800000);
    expect(format(date, 'tr')).toEqual('30 dakika içinde');

    vi.setSystemTime(-3600000);
    expect(format(date, 'tr')).toEqual('1 saat içinde');

    vi.setSystemTime(-28800000);
    expect(format(date, 'tr')).toEqual('8 saat içinde');

    vi.setSystemTime(-86400000);
    expect(format(date, 'tr')).toEqual('1 gün içinde');

    vi.setSystemTime(-259200000);
    expect(format(date, 'tr')).toEqual('3 gün içinde');

    vi.setSystemTime(-604800000);
    expect(format(date, 'tr')).toEqual('1 hafta içinde');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'tr')).toEqual('3 hafta içinde');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'tr')).toEqual('1 ay içinde');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'tr')).toEqual('4 ay içinde');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'tr')).toEqual('1 yıl içinde');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'tr')).toEqual('10 yıl içinde');
  });
});
