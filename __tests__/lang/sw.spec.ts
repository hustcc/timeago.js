import { vi } from 'vitest';
import { register, format } from '../../src';
import sw from '../../src/lang/sw';

register('sw', sw);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('sw', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'sw')).toEqual('sasa hivi');

    vi.setSystemTime(30000);
    expect(format(date, 'sw')).toEqual('sekunde 30 zilizopita');

    vi.setSystemTime(60000);
    expect(format(date, 'sw')).toEqual('dakika 1 iliopita');

    vi.setSystemTime(1800000);
    expect(format(date, 'sw')).toEqual('dakika 30 zilizopita');

    vi.setSystemTime(3600000);
    expect(format(date, 'sw')).toEqual('saa 1 iliyopita');

    vi.setSystemTime(28800000);
    expect(format(date, 'sw')).toEqual('saa 8 zilizopita');

    vi.setSystemTime(86400000);
    expect(format(date, 'sw')).toEqual('siku 1 iliyopita');

    vi.setSystemTime(259200000);
    expect(format(date, 'sw')).toEqual('siku 3 zilizopita');

    vi.setSystemTime(604800000);
    expect(format(date, 'sw')).toEqual('wiki 1 iliyopita');

    vi.setSystemTime(1814400000);
    expect(format(date, 'sw')).toEqual('wiki 3 zilizopita');

    vi.setSystemTime(2678400000);
    expect(format(date, 'sw')).toEqual('mwezi 1 uliopita');

    vi.setSystemTime(10713600000);
    expect(format(date, 'sw')).toEqual('miezi 4 iliyopita');

    vi.setSystemTime(31622400000);
    expect(format(date, 'sw')).toEqual('mwaka 1 uliopita');

    vi.setSystemTime(316224000000);
    expect(format(date, 'sw')).toEqual('miaka 10 iliyopita');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'sw')).toEqual('hivi sasa');

    vi.setSystemTime(-30000);
    expect(format(date, 'sw')).toEqual('katika sekunde 30');

    vi.setSystemTime(-60000);
    expect(format(date, 'sw')).toEqual('katika dakika 1');

    vi.setSystemTime(-1800000);
    expect(format(date, 'sw')).toEqual('katika dakika 30');

    vi.setSystemTime(-3600000);
    expect(format(date, 'sw')).toEqual('ndani ya saa 1');

    vi.setSystemTime(-28800000);
    expect(format(date, 'sw')).toEqual('ndani ya saa 8');

    vi.setSystemTime(-86400000);
    expect(format(date, 'sw')).toEqual('katika siku 1');

    vi.setSystemTime(-259200000);
    expect(format(date, 'sw')).toEqual('ndani ya siku 3');

    vi.setSystemTime(-604800000);
    expect(format(date, 'sw')).toEqual('katika wiki 1');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'sw')).toEqual('katika wiki 3');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'sw')).toEqual('katika mwezi');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'sw')).toEqual('katika miezi 4');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'sw')).toEqual('katika mwaka 1');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'sw')).toEqual('katika miaka 10');
  });
});
