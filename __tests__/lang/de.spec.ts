import { vi } from 'vitest';
import { register, format } from '../../src';
import de from '../../src/lang/de';

register('de', de);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('de', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'de')).toEqual('gerade eben');

    vi.setSystemTime(30000);
    expect(format(date, 'de')).toEqual('vor 30 Sekunden');

    vi.setSystemTime(60000);
    expect(format(date, 'de')).toEqual('vor 1 Minute');

    vi.setSystemTime(1800000);
    expect(format(date, 'de')).toEqual('vor 30 Minuten');

    vi.setSystemTime(3600000);
    expect(format(date, 'de')).toEqual('vor 1 Stunde');

    vi.setSystemTime(28800000);
    expect(format(date, 'de')).toEqual('vor 8 Stunden');

    vi.setSystemTime(86400000);
    expect(format(date, 'de')).toEqual('vor 1 Tag');

    vi.setSystemTime(259200000);
    expect(format(date, 'de')).toEqual('vor 3 Tagen');

    vi.setSystemTime(604800000);
    expect(format(date, 'de')).toEqual('vor 1 Woche');

    vi.setSystemTime(1814400000);
    expect(format(date, 'de')).toEqual('vor 3 Wochen');

    vi.setSystemTime(2678400000);
    expect(format(date, 'de')).toEqual('vor 1 Monat');

    vi.setSystemTime(10713600000);
    expect(format(date, 'de')).toEqual('vor 4 Monaten');

    vi.setSystemTime(31622400000);
    expect(format(date, 'de')).toEqual('vor 1 Jahr');

    vi.setSystemTime(316224000000);
    expect(format(date, 'de')).toEqual('vor 10 Jahren');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'de')).toEqual('gleich');

    vi.setSystemTime(-30000);
    expect(format(date, 'de')).toEqual('in 30 Sekunden');

    vi.setSystemTime(-60000);
    expect(format(date, 'de')).toEqual('in 1 Minute');

    vi.setSystemTime(-1800000);
    expect(format(date, 'de')).toEqual('in 30 Minuten');

    vi.setSystemTime(-3600000);
    expect(format(date, 'de')).toEqual('in 1 Stunde');

    vi.setSystemTime(-28800000);
    expect(format(date, 'de')).toEqual('in 8 Stunden');

    vi.setSystemTime(-86400000);
    expect(format(date, 'de')).toEqual('in 1 Tag');

    vi.setSystemTime(-259200000);
    expect(format(date, 'de')).toEqual('in 3 Tagen');

    vi.setSystemTime(-604800000);
    expect(format(date, 'de')).toEqual('in 1 Woche');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'de')).toEqual('in 3 Wochen');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'de')).toEqual('in 1 Monat');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'de')).toEqual('in 4 Monaten');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'de')).toEqual('in 1 Jahr');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'de')).toEqual('in 10 Jahren');
  });
});
