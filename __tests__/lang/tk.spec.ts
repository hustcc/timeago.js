
import { format, register } from '../../src';
import tk from '../../src/lang/tk';

register('tk', tk);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('tk', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'tk')).toEqual('biraz öň');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'tk')).toEqual('30 sekunt öň');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'tk')).toEqual('1 minut öň');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'tk')).toEqual('30 minut öň');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'tk')).toEqual('1 sagat öň');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'tk')).toEqual('8 sagat öň');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'tk')).toEqual('1 gün öň');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'tk')).toEqual('3 gün öň');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'tk')).toEqual('1 hepde öň');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'tk')).toEqual('3 hepde öň');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'tk')).toEqual('1 aý öň');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'tk')).toEqual('4 aý öň');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'tk')).toEqual('1 ýyl öň');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'tk')).toEqual('10 ýyl öň');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'tk')).toEqual('şuwagt');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'tk')).toEqual('30 sekuntdan');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'tk')).toEqual('1 minutdan');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'tk')).toEqual('30 minutdan');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'tk')).toEqual('1 sagatdan');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'tk')).toEqual('8 sagatdan');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'tk')).toEqual('1 günden');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'tk')).toEqual('3 günden');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'tk')).toEqual('1 hepdeden');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'tk')).toEqual('3 hepdeden');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'tk')).toEqual('1 aýdan');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'tk')).toEqual('4 aýdan');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'tk')).toEqual('1 ýyldan');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'tk')).toEqual('10 ýyldan');
  });
});
