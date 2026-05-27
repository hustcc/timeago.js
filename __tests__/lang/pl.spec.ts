import { vi } from 'vitest';
import { register, format } from '../../src';
import pl from '../../src/lang/pl';

register('pl', pl);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('pl', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'pl')).toEqual('w tej chwili');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'pl')).toEqual('30 sekund temu');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'pl')).toEqual('1 minutę temu');

    vi.setSystemTime(1000 * 60 * 2);
    expect(format(date, 'pl')).toEqual('2 minuty temu');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'pl')).toEqual('30 minut temu');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'pl')).toEqual('1 godzinę temu');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'pl')).toEqual('8 godzin temu');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'pl')).toEqual('1 dzień temu');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'pl')).toEqual('3 dni temu');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'pl')).toEqual('1 tydzień temu');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'pl')).toEqual('3 tygodnie temu');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'pl')).toEqual('1 miesiąc temu');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'pl')).toEqual('4 miesiące temu');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'pl')).toEqual('1 rok temu');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'pl')).toEqual('10 lat temu');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'pl')).toEqual('za chwilę');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'pl')).toEqual('za 30 sekund');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'pl')).toEqual('za 1 minutę');

    vi.setSystemTime(-1000 * 60 * 2);
    expect(format(date, 'pl')).toEqual('za 2 minuty');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'pl')).toEqual('za 30 minut');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'pl')).toEqual('za 1 godzinę');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'pl')).toEqual('za 8 godzin');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'pl')).toEqual('za 1 dzień');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'pl')).toEqual('za 3 dni');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'pl')).toEqual('za 1 tydzień');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'pl')).toEqual('za 3 tygodnie');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'pl')).toEqual('za 1 miesiąc');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'pl')).toEqual('za 4 miesiące');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'pl')).toEqual('za 1 rok');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'pl')).toEqual('za 10 lat');
  });
});
