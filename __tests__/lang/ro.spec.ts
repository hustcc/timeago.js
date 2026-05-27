import { vi } from 'vitest';
import { register, format } from '../../src';
import ro from '../../src/lang/ro';

register('ro', ro);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ro', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'ro')).toEqual('chiar acum');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'ro')).toEqual('acum 30 de secunde');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'ro')).toEqual('acum un minut');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'ro')).toEqual('acum 30 de minute');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'ro')).toEqual('acum o oră');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'ro')).toEqual('acum 8 ore');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'ro')).toEqual('acum o zi');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ro')).toEqual('acum 3 zile');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ro')).toEqual('acum o săptămână');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ro')).toEqual('acum 3 săptămâni');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ro')).toEqual('acum o lună');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ro')).toEqual('acum 4 luni');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ro')).toEqual('acum un an');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ro')).toEqual('acum 10 ani');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'ro')).toEqual('chiar acum');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'ro')).toEqual('peste 30 de secunde');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'ro')).toEqual('peste un minut');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'ro')).toEqual('peste 30 de minute');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'ro')).toEqual('peste o oră');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'ro')).toEqual('peste 8 ore');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'ro')).toEqual('peste o zi');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ro')).toEqual('peste 3 zile');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ro')).toEqual('peste o săptămână');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ro')).toEqual('peste 3 săptămâni');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ro')).toEqual('peste o lună');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ro')).toEqual('peste 4 luni');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ro')).toEqual('peste un an');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ro')).toEqual('peste 10 ani');
  });
});
