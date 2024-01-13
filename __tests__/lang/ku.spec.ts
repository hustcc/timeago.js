import { advanceTo, clear } from 'jest-date-mock';
import { register, format } from '../../src';
import ku from '../../src/lang/ku';

register('ku', ku);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('test kurdish dates', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'ku')).toEqual('هەر ئێستا');

    advanceTo(30 * 1000);
    expect(format(date, 'ku')).toEqual('٣٠ چرکە لەمەوپێش');

    advanceTo(1000 * 60);
    expect(format(date, 'ku')).toEqual('١ دەقە لەمەوپێش');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'ku')).toEqual('٣٠ دەقە لەمەوپێش');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'ku')).toEqual('١ کاتژمێر لەمەوپێش');

    advanceTo(1000 * 60 * 60 * 6);
    expect(format(date, 'ku')).toEqual('٦ کاتژمێر لەمەوپێش');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'ku')).toEqual('١ ڕۆژ لەمەوپێش');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ku')).toEqual('٣ ڕۆژ لەمەوپێش');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ku')).toEqual('١ هەفتە لەمەوپێش');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ku')).toEqual('٣ هەفتە لەمەوپێش');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ku')).toEqual('١ مانگ لەمەوپێش');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ku')).toEqual('٤ مانگ لەمەوپێش');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ku')).toEqual('١ ساڵ لەمەوپێش');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 11);
    expect(format(date, 'ku')).toEqual('١١ ساڵ لەمەوپێش');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'ku')).toEqual('ئێستا');

    advanceTo(-30 * 1000);
    expect(format(date, 'ku')).toEqual('٣٠ چرکەیتر');

    advanceTo(-1000 * 60);
    expect(format(date, 'ku')).toEqual('١ دەقەیتر');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'ku')).toEqual('٣٠ دەقەیتر');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'ku')).toEqual('١ کاتژمێریتر');

    advanceTo(-1000 * 60 * 60 * 6);
    expect(format(date, 'ku')).toEqual('٦ کاتژمێریتر');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'ku')).toEqual('١ ڕۆژیتر');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ku')).toEqual('٣ ڕۆژیتر');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ku')).toEqual('١ هەفتەیتر');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ku')).toEqual('٣ هەفتەیتر');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ku')).toEqual('١ مانگیتر');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ku')).toEqual('٤ مانگیتر');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ku')).toEqual('١ ساڵیتر');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 11);
    expect(format(date, 'ku')).toEqual('١١ ساڵیتر');
  });
});
