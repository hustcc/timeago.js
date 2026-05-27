
import { register, format } from '../../src';
import he from '../../src/lang/he';

register('he', he);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('he', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'he')).toEqual('זה עתה');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'he')).toEqual('לפני 30 שניות');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'he')).toEqual('לפני דקה');

    vi.setSystemTime(1000 * 60 * 2);
    expect(format(date, 'he')).toEqual('לפני 2 דקות');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'he')).toEqual('לפני 30 דקות');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'he')).toEqual('לפני שעה');

    vi.setSystemTime(1000 * 60 * 60 * 2);
    expect(format(date, 'he')).toEqual('לפני שעתיים');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'he')).toEqual('לפני 8 שעות');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'he')).toEqual('אתמול');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 2);
    expect(format(date, 'he')).toEqual('לפני יומיים');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'he')).toEqual('לפני 3 ימים');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'he')).toEqual('לפני שבוע');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 2);
    expect(format(date, 'he')).toEqual('לפני שבועיים');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'he')).toEqual('לפני 3 שבועות');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'he')).toEqual('לפני חודש');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 2);
    expect(format(date, 'he')).toEqual('לפני חודשיים');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'he')).toEqual('לפני 4 חודשים');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'he')).toEqual('לפני שנה');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 2);
    expect(format(date, 'he')).toEqual('לפני שנתיים');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'he')).toEqual('לפני 10 שנים');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'he')).toEqual('עכשיו');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'he')).toEqual('בעוד 30 שניות');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'he')).toEqual('בעוד דקה');

    vi.setSystemTime(-1000 * 60 * 2);
    expect(format(date, 'he')).toEqual('בעוד 2 דקות');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'he')).toEqual('בעוד 30 דקות');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'he')).toEqual('בעוד שעה');

    vi.setSystemTime(-1000 * 60 * 60 * 2);
    expect(format(date, 'he')).toEqual('בעוד שעתיים');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'he')).toEqual('בעוד 8 שעות');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'he')).toEqual('מחר');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 2);
    expect(format(date, 'he')).toEqual('בעוד יומיים');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'he')).toEqual('בעוד 3 ימים');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'he')).toEqual('בעוד שבוע');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 2);
    expect(format(date, 'he')).toEqual('בעוד שבועיים');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'he')).toEqual('בעוד 3 שבועות');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'he')).toEqual('בעוד חודש');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 2);
    expect(format(date, 'he')).toEqual('בעוד חודשיים');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'he')).toEqual('בעוד 4 חודשים');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'he')).toEqual('בעוד שנה');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 2);
    expect(format(date, 'he')).toEqual('בעוד שנתיים');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'he')).toEqual('בעוד 10 שנים');
  });
});
