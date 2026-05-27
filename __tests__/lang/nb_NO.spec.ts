import { vi } from 'vitest';
import { register, format } from '../../src';
import nb_NO from '../../src/lang/nb_NO';

register('nb_NO', nb_NO);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('nb_NO', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'nb_NO')).toEqual('akkurat nå');

    vi.setSystemTime(30000);
    expect(format(date, 'nb_NO')).toEqual('30 sekunder siden');

    vi.setSystemTime(60000);
    expect(format(date, 'nb_NO')).toEqual('1 minutt siden');

    vi.setSystemTime(1800000);
    expect(format(date, 'nb_NO')).toEqual('30 minutter siden');

    vi.setSystemTime(3600000);
    expect(format(date, 'nb_NO')).toEqual('1 time siden');

    vi.setSystemTime(28800000);
    expect(format(date, 'nb_NO')).toEqual('8 timer siden');

    vi.setSystemTime(86400000);
    expect(format(date, 'nb_NO')).toEqual('1 dag siden');

    vi.setSystemTime(259200000);
    expect(format(date, 'nb_NO')).toEqual('3 dager siden');

    vi.setSystemTime(604800000);
    expect(format(date, 'nb_NO')).toEqual('1 uke siden');

    vi.setSystemTime(1814400000);
    expect(format(date, 'nb_NO')).toEqual('3 uker siden');

    vi.setSystemTime(2678400000);
    expect(format(date, 'nb_NO')).toEqual('1 måned siden');

    vi.setSystemTime(10713600000);
    expect(format(date, 'nb_NO')).toEqual('4 måneder siden');

    vi.setSystemTime(31622400000);
    expect(format(date, 'nb_NO')).toEqual('1 år siden');

    vi.setSystemTime(316224000000);
    expect(format(date, 'nb_NO')).toEqual('10 år siden');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'nb_NO')).toEqual('om litt');

    vi.setSystemTime(-30000);
    expect(format(date, 'nb_NO')).toEqual('om 30 sekunder');

    vi.setSystemTime(-60000);
    expect(format(date, 'nb_NO')).toEqual('om 1 minutt');

    vi.setSystemTime(-1800000);
    expect(format(date, 'nb_NO')).toEqual('om 30 minutter');

    vi.setSystemTime(-3600000);
    expect(format(date, 'nb_NO')).toEqual('om 1 time');

    vi.setSystemTime(-28800000);
    expect(format(date, 'nb_NO')).toEqual('om 8 timer');

    vi.setSystemTime(-86400000);
    expect(format(date, 'nb_NO')).toEqual('om 1 dag');

    vi.setSystemTime(-259200000);
    expect(format(date, 'nb_NO')).toEqual('om 3 dager');

    vi.setSystemTime(-604800000);
    expect(format(date, 'nb_NO')).toEqual('om 1 uke');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'nb_NO')).toEqual('om 3 uker');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'nb_NO')).toEqual('om 1 måned');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'nb_NO')).toEqual('om 4 måneder');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'nb_NO')).toEqual('om 1 år');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'nb_NO')).toEqual('om 10 år');
  });
});
