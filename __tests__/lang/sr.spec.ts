import { vi } from 'vitest';
import { register, format } from '../../src';
import sr from '../../src/lang/sr';

register('sr', sr);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('sr', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'sr')).toEqual('малопре');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'sr')).toEqual('пре 30 секунди');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'sr')).toEqual('пре 1 минут');

    vi.setSystemTime(1000 * 60 * 2);
    expect(format(date, 'sr')).toEqual('пре 2 минуте');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'sr')).toEqual('пре 30 минута');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'sr')).toEqual('пре сат времена');

    vi.setSystemTime(1000 * 60 * 60 * 2);
    expect(format(date, 'sr')).toEqual('пре 2 сата');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'sr')).toEqual('пре 8 сати');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'sr')).toEqual('пре 1 дан');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'sr')).toEqual('пре 3 дана');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'sr')).toEqual('пре недељу дана');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'sr')).toEqual('пре 3 недеље');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'sr')).toEqual('пре месец дана');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'sr')).toEqual('пре 4 месеца');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'sr')).toEqual('пре годину дана');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'sr')).toEqual('пре 10 година');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'sr')).toEqual('управо сад');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'sr')).toEqual('за 30 секунди');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'sr')).toEqual('за 1 минут');

    vi.setSystemTime(-1000 * 60 * 2);
    expect(format(date, 'sr')).toEqual('за 2 минуте');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'sr')).toEqual('за 30 минута');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'sr')).toEqual('за сат времена');

    vi.setSystemTime(-1000 * 60 * 60 * 2);
    expect(format(date, 'sr')).toEqual('за 2 сата');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'sr')).toEqual('за 8 сати');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'sr')).toEqual('за 1 дан');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'sr')).toEqual('за 3 дана');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'sr')).toEqual('за недељу дана');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'sr')).toEqual('за 3 недеље');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'sr')).toEqual('за месец дана');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'sr')).toEqual('за 4 месеца');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'sr')).toEqual('за годину дана');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'sr')).toEqual('за 10 година');
  });
});
