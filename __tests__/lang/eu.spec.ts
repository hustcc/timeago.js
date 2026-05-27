import { vi } from 'vitest';
import { register, format } from '../../src';
import eu from '../../src/lang/eu';

register('eu', eu);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('eu', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'eu')).toEqual('orain');

    vi.setSystemTime(30000);
    expect(format(date, 'eu')).toEqual('duela 30 segundu');

    vi.setSystemTime(60000);
    expect(format(date, 'eu')).toEqual('duela minutu 1');

    vi.setSystemTime(1800000);
    expect(format(date, 'eu')).toEqual('duela 30 minutu');

    vi.setSystemTime(3600000);
    expect(format(date, 'eu')).toEqual('duela ordu 1');

    vi.setSystemTime(28800000);
    expect(format(date, 'eu')).toEqual('duela 8 ordu');

    vi.setSystemTime(86400000);
    expect(format(date, 'eu')).toEqual('duela egun 1');

    vi.setSystemTime(259200000);
    expect(format(date, 'eu')).toEqual('duela 3 egun');

    vi.setSystemTime(604800000);
    expect(format(date, 'eu')).toEqual('duela aste 1');

    vi.setSystemTime(1814400000);
    expect(format(date, 'eu')).toEqual('duela 3 aste');

    vi.setSystemTime(2678400000);
    expect(format(date, 'eu')).toEqual('duela hillabete 1');

    vi.setSystemTime(10713600000);
    expect(format(date, 'eu')).toEqual('duela 4 hillabete');

    vi.setSystemTime(31622400000);
    expect(format(date, 'eu')).toEqual('duela urte 1');

    vi.setSystemTime(316224000000);
    expect(format(date, 'eu')).toEqual('duela 10 urte');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'eu')).toEqual('denbora bat barru');

    vi.setSystemTime(-30000);
    expect(format(date, 'eu')).toEqual('30 segundu barru');

    vi.setSystemTime(-60000);
    expect(format(date, 'eu')).toEqual('minutu 1 barru');

    vi.setSystemTime(-1800000);
    expect(format(date, 'eu')).toEqual('30 minutu barru');

    vi.setSystemTime(-3600000);
    expect(format(date, 'eu')).toEqual('ordu 1 barru');

    vi.setSystemTime(-28800000);
    expect(format(date, 'eu')).toEqual('8 ordu barru');

    vi.setSystemTime(-86400000);
    expect(format(date, 'eu')).toEqual('egun 1 barru');

    vi.setSystemTime(-259200000);
    expect(format(date, 'eu')).toEqual('3 egun barru');

    vi.setSystemTime(-604800000);
    expect(format(date, 'eu')).toEqual('aste 1 barru');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'eu')).toEqual('3 aste barru');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'eu')).toEqual('hillabete 1 barru');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'eu')).toEqual('4 hillabete barru');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'eu')).toEqual('urte 1 barru');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'eu')).toEqual('10 urte barru');
  });
});
