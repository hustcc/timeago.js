import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import { register, format } from '../../src';
import he from '../../src/lang/he';

register('he', he);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('he', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'he')).toEqual('זה עתה');

    advanceTo(30 * 1000);
    expect(format(date, 'he')).toEqual('לפני 30 שניות');

    advanceTo(1000 * 60);
    expect(format(date, 'he')).toEqual('לפני דקה');

    advanceTo(1000 * 60 * 2);
    expect(format(date, 'he')).toEqual('לפני 2 דקות');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'he')).toEqual('לפני 30 דקות');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'he')).toEqual('לפני שעה');

    advanceTo(1000 * 60 * 60 * 2);
    expect(format(date, 'he')).toEqual('לפני שעתיים');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'he')).toEqual('לפני 8 שעות');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'he')).toEqual('אתמול');

    advanceTo(1000 * 60 * 60 * 24 * 2);
    expect(format(date, 'he')).toEqual('לפני יומיים');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'he')).toEqual('לפני 3 ימים');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'he')).toEqual('לפני שבוע');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 2);
    expect(format(date, 'he')).toEqual('לפני שבועיים');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'he')).toEqual('לפני 3 שבועות');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'he')).toEqual('לפני חודש');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 2);
    expect(format(date, 'he')).toEqual('לפני חודשיים');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'he')).toEqual('לפני 4 חודשים');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'he')).toEqual('לפני שנה');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 2);
    expect(format(date, 'he')).toEqual('לפני שנתיים');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'he')).toEqual('לפני 10 שנים');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'he')).toEqual('עכשיו');

    advanceTo(-30 * 1000);
    expect(format(date, 'he')).toEqual('בעוד 30 שניות');

    advanceTo(-1000 * 60);
    expect(format(date, 'he')).toEqual('בעוד דקה');

    advanceTo(-1000 * 60 * 2);
    expect(format(date, 'he')).toEqual('בעוד 2 דקות');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'he')).toEqual('בעוד 30 דקות');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'he')).toEqual('בעוד שעה');

    advanceTo(-1000 * 60 * 60 * 2);
    expect(format(date, 'he')).toEqual('בעוד שעתיים');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'he')).toEqual('בעוד 8 שעות');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'he')).toEqual('מחר');

    advanceTo(-1000 * 60 * 60 * 24 * 2);
    expect(format(date, 'he')).toEqual('בעוד יומיים');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'he')).toEqual('בעוד 3 ימים');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'he')).toEqual('בעוד שבוע');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 2);
    expect(format(date, 'he')).toEqual('בעוד שבועיים');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'he')).toEqual('בעוד 3 שבועות');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'he')).toEqual('בעוד חודש');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 2);
    expect(format(date, 'he')).toEqual('בעוד חודשיים');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'he')).toEqual('בעוד 4 חודשים');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'he')).toEqual('בעוד שנה');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 2);
    expect(format(date, 'he')).toEqual('בעוד שנתיים');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'he')).toEqual('בעוד 10 שנים');
  });
});
