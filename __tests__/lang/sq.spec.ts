import { vi } from 'vitest';
import { register, format } from '../../src';
import sq from '../../src/lang/sq';

register('sq', sq);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('sq', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'sq')).toEqual('pak më parë');

    vi.setSystemTime(30000);
    expect(format(date, 'sq')).toEqual('para 30 sekondash');

    vi.setSystemTime(60000);
    expect(format(date, 'sq')).toEqual('para një minute');

    vi.setSystemTime(1800000);
    expect(format(date, 'sq')).toEqual('para 30 minutash');

    vi.setSystemTime(3600000);
    expect(format(date, 'sq')).toEqual('para një ore');

    vi.setSystemTime(28800000);
    expect(format(date, 'sq')).toEqual('para 8 orësh');

    vi.setSystemTime(86400000);
    expect(format(date, 'sq')).toEqual('dje');

    vi.setSystemTime(259200000);
    expect(format(date, 'sq')).toEqual('para 3 ditësh');

    vi.setSystemTime(604800000);
    expect(format(date, 'sq')).toEqual('para një jave');

    vi.setSystemTime(1814400000);
    expect(format(date, 'sq')).toEqual('para 3 javësh');

    vi.setSystemTime(2678400000);
    expect(format(date, 'sq')).toEqual('para një muaji');

    vi.setSystemTime(10713600000);
    expect(format(date, 'sq')).toEqual('para 4 muajsh');

    vi.setSystemTime(31622400000);
    expect(format(date, 'sq')).toEqual('para një viti');

    vi.setSystemTime(316224000000);
    expect(format(date, 'sq')).toEqual('para 10 vjetësh');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'sq')).toEqual('pas pak');

    vi.setSystemTime(-30000);
    expect(format(date, 'sq')).toEqual('pas 30 sekondash');

    vi.setSystemTime(-60000);
    expect(format(date, 'sq')).toEqual('pas një minute');

    vi.setSystemTime(-1800000);
    expect(format(date, 'sq')).toEqual('pas 30 minutash');

    vi.setSystemTime(-3600000);
    expect(format(date, 'sq')).toEqual('pas një ore');

    vi.setSystemTime(-28800000);
    expect(format(date, 'sq')).toEqual('pas 8 orësh');

    vi.setSystemTime(-86400000);
    expect(format(date, 'sq')).toEqual('nesër');

    vi.setSystemTime(-259200000);
    expect(format(date, 'sq')).toEqual('pas 3 ditësh');

    vi.setSystemTime(-604800000);
    expect(format(date, 'sq')).toEqual('pas një jave');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'sq')).toEqual('pas 3 javësh');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'sq')).toEqual('pas një muaji');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'sq')).toEqual('pas 4 muajsh');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'sq')).toEqual('pas një viti');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'sq')).toEqual('pas 10 vjetësh');
  });
});
