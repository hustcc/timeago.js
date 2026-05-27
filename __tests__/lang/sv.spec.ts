import { vi } from 'vitest';
import { register, format } from '../../src';
import sv from '../../src/lang/sv';

register('sv', sv);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('sv', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'sv')).toEqual('just nu');

    vi.setSystemTime(30000);
    expect(format(date, 'sv')).toEqual('30 sekunder sedan');

    vi.setSystemTime(60000);
    expect(format(date, 'sv')).toEqual('1 minut sedan');

    vi.setSystemTime(1800000);
    expect(format(date, 'sv')).toEqual('30 minuter sedan');

    vi.setSystemTime(3600000);
    expect(format(date, 'sv')).toEqual('1 timme sedan');

    vi.setSystemTime(28800000);
    expect(format(date, 'sv')).toEqual('8 timmar sedan');

    vi.setSystemTime(86400000);
    expect(format(date, 'sv')).toEqual('1 dag sedan');

    vi.setSystemTime(259200000);
    expect(format(date, 'sv')).toEqual('3 dagar sedan');

    vi.setSystemTime(604800000);
    expect(format(date, 'sv')).toEqual('1 vecka sedan');

    vi.setSystemTime(1814400000);
    expect(format(date, 'sv')).toEqual('3 veckor sedan');

    vi.setSystemTime(2678400000);
    expect(format(date, 'sv')).toEqual('1 månad sedan');

    vi.setSystemTime(10713600000);
    expect(format(date, 'sv')).toEqual('4 månader sedan');

    vi.setSystemTime(31622400000);
    expect(format(date, 'sv')).toEqual('1 år sedan');

    vi.setSystemTime(316224000000);
    expect(format(date, 'sv')).toEqual('10 år sedan');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'sv')).toEqual('om en stund');

    vi.setSystemTime(-30000);
    expect(format(date, 'sv')).toEqual('om 30 sekunder');

    vi.setSystemTime(-60000);
    expect(format(date, 'sv')).toEqual('om 1 minut');

    vi.setSystemTime(-1800000);
    expect(format(date, 'sv')).toEqual('om 30 minuter');

    vi.setSystemTime(-3600000);
    expect(format(date, 'sv')).toEqual('om 1 timme');

    vi.setSystemTime(-28800000);
    expect(format(date, 'sv')).toEqual('om 8 timmar');

    vi.setSystemTime(-86400000);
    expect(format(date, 'sv')).toEqual('om 1 dag');

    vi.setSystemTime(-259200000);
    expect(format(date, 'sv')).toEqual('om 3 dagar');

    vi.setSystemTime(-604800000);
    expect(format(date, 'sv')).toEqual('om 1 vecka');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'sv')).toEqual('om 3 veckor');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'sv')).toEqual('om 1 månad');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'sv')).toEqual('om 4 månader');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'sv')).toEqual('om 1 år');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'sv')).toEqual('om 10 år');
  });
});
