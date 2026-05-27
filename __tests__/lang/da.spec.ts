import { vi } from 'vitest';
import { register, format } from '../../src';
import da from '../../src/lang/da';

register('da', da);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('da', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'da')).toEqual('for et øjeblik siden');

    vi.setSystemTime(30000);
    expect(format(date, 'da')).toEqual('for 30 sekunder siden');

    vi.setSystemTime(60000);
    expect(format(date, 'da')).toEqual('for 1 minut siden');

    vi.setSystemTime(1800000);
    expect(format(date, 'da')).toEqual('for 30 minutter siden');

    vi.setSystemTime(3600000);
    expect(format(date, 'da')).toEqual('for 1 time siden');

    vi.setSystemTime(28800000);
    expect(format(date, 'da')).toEqual('for 8 timer siden');

    vi.setSystemTime(86400000);
    expect(format(date, 'da')).toEqual('for 1 dag siden');

    vi.setSystemTime(259200000);
    expect(format(date, 'da')).toEqual('for 3 dage siden');

    vi.setSystemTime(604800000);
    expect(format(date, 'da')).toEqual('for 1 uge siden');

    vi.setSystemTime(1814400000);
    expect(format(date, 'da')).toEqual('for 3 uger siden');

    vi.setSystemTime(2678400000);
    expect(format(date, 'da')).toEqual('for 1 måned siden');

    vi.setSystemTime(10713600000);
    expect(format(date, 'da')).toEqual('for 4 måneder siden');

    vi.setSystemTime(31622400000);
    expect(format(date, 'da')).toEqual('for 1 år siden');

    vi.setSystemTime(316224000000);
    expect(format(date, 'da')).toEqual('for 10 år siden');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'da')).toEqual('om et øjeblik');

    vi.setSystemTime(-30000);
    expect(format(date, 'da')).toEqual('om 30 sekunder');

    vi.setSystemTime(-60000);
    expect(format(date, 'da')).toEqual('om 1 minut');

    vi.setSystemTime(-1800000);
    expect(format(date, 'da')).toEqual('om 30 minutter');

    vi.setSystemTime(-3600000);
    expect(format(date, 'da')).toEqual('om 1 time');

    vi.setSystemTime(-28800000);
    expect(format(date, 'da')).toEqual('om 8 timer');

    vi.setSystemTime(-86400000);
    expect(format(date, 'da')).toEqual('om 1 dag');

    vi.setSystemTime(-259200000);
    expect(format(date, 'da')).toEqual('om 3 dage');

    vi.setSystemTime(-604800000);
    expect(format(date, 'da')).toEqual('om 1 uge');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'da')).toEqual('om 3 uger');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'da')).toEqual('om 1 måned');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'da')).toEqual('om 4 måneder');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'da')).toEqual('om 1 år');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'da')).toEqual('om 10 år');
  });
});
