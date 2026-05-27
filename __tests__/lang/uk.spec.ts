import { vi } from 'vitest';
import { register, format } from '../../src';
import uk from '../../src/lang/uk';

register('uk', uk);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('uk', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'uk')).toEqual('щойно');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'uk')).toEqual('30 секунд тому');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'uk')).toEqual('хвилину тому');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'uk')).toEqual('30 хвилин тому');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'uk')).toEqual('годину тому');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'uk')).toEqual('8 годин тому');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'uk')).toEqual('день тому');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'uk')).toEqual('3 дні тому');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'uk')).toEqual('тиждень тому');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'uk')).toEqual('3 тижні тому');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'uk')).toEqual('місяць тому');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'uk')).toEqual('4 місяці тому');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'uk')).toEqual('рік тому');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'uk')).toEqual('10 років тому');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'uk')).toEqual('через декілька секунд');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'uk')).toEqual('через 30 секунд');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'uk')).toEqual('через хвилину');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'uk')).toEqual('через 30 хвилин');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'uk')).toEqual('через годину');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'uk')).toEqual('через 8 годин');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'uk')).toEqual('через день');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'uk')).toEqual('через 3 дні');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'uk')).toEqual('через тиждень');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'uk')).toEqual('через 3 тижні');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'uk')).toEqual('через місяць');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'uk')).toEqual('через 4 місяці');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'uk')).toEqual('через рік');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'uk')).toEqual('через 10 років');
  });
});
