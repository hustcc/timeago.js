import { vi } from 'vitest';
import { register, format } from '../../src';
import be from '../../src/lang/be';

register('be', be);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('be', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'be')).toEqual('толькі што');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'be')).toEqual('30 секунд таму');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'be')).toEqual('хвіліну таму');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'be')).toEqual('30 хвілін таму');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'be')).toEqual('гадзіну таму');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'be')).toEqual('8 гадзін таму');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'be')).toEqual('дзень таму');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'be')).toEqual('3 дні таму');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'be')).toEqual('тыдзень таму');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'be')).toEqual('3 тыдні таму');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'be')).toEqual('месяц таму');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'be')).toEqual('4 месяцы таму');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'be')).toEqual('год таму');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'be')).toEqual('10 гадоў таму');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'be')).toEqual('праз некалькі секунд');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'be')).toEqual('праз 30 секунд');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'be')).toEqual('праз хвіліну');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'be')).toEqual('праз 30 хвілін');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'be')).toEqual('праз гадзіну');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'be')).toEqual('праз 8 гадзін');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'be')).toEqual('праз дзень');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'be')).toEqual('праз 3 дні');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'be')).toEqual('праз тыдзень');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'be')).toEqual('праз 3 тыдні');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'be')).toEqual('праз месяц');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'be')).toEqual('праз 4 месяцы');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'be')).toEqual('праз год');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'be')).toEqual('праз 10 гадоў');
  });
});
