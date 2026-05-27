
import { register, format } from '../../src';
import ku from '../../src/lang/ku';

register('ku', ku);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('test kurdish dates', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'ku')).toEqual('هەر ئێستا');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'ku')).toEqual('٣٠ چرکە لەمەوپێش');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'ku')).toEqual('١ دەقە لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'ku')).toEqual('٣٠ دەقە لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'ku')).toEqual('١ کاتژمێر لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60 * 6);
    expect(format(date, 'ku')).toEqual('٦ کاتژمێر لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'ku')).toEqual('١ ڕۆژ لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ku')).toEqual('٣ ڕۆژ لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ku')).toEqual('١ هەفتە لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ku')).toEqual('٣ هەفتە لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ku')).toEqual('١ مانگ لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ku')).toEqual('٤ مانگ لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ku')).toEqual('١ ساڵ لەمەوپێش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 11);
    expect(format(date, 'ku')).toEqual('١١ ساڵ لەمەوپێش');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'ku')).toEqual('ئێستا');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'ku')).toEqual('٣٠ چرکەیتر');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'ku')).toEqual('١ دەقەیتر');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'ku')).toEqual('٣٠ دەقەیتر');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'ku')).toEqual('١ کاتژمێریتر');

    vi.setSystemTime(-1000 * 60 * 60 * 6);
    expect(format(date, 'ku')).toEqual('٦ کاتژمێریتر');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'ku')).toEqual('١ ڕۆژیتر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ku')).toEqual('٣ ڕۆژیتر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ku')).toEqual('١ هەفتەیتر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ku')).toEqual('٣ هەفتەیتر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ku')).toEqual('١ مانگیتر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ku')).toEqual('٤ مانگیتر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ku')).toEqual('١ ساڵیتر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 11);
    expect(format(date, 'ku')).toEqual('١١ ساڵیتر');
  });
});
