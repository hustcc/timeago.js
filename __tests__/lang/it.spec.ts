
import { register, format } from '../../src';
import it from '../../src/lang/it';

register('it', it);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('it', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'it')).toEqual('poco fa');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'it')).toEqual('30 secondi fa');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'it')).toEqual('un minuto fa');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'it')).toEqual('30 minuti fa');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'it')).toEqual("un'ora fa");

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'it')).toEqual('8 ore fa');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'it')).toEqual('un giorno fa');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'it')).toEqual('3 giorni fa');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'it')).toEqual('una settimana fa');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'it')).toEqual('3 settimane fa');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'it')).toEqual('un mese fa');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'it')).toEqual('4 mesi fa');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'it')).toEqual('un anno fa');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'it')).toEqual('10 anni fa');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'it')).toEqual('fra poco');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'it')).toEqual('fra 30 secondi');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'it')).toEqual('fra un minuto');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'it')).toEqual('fra 30 minuti');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'it')).toEqual("fra un'ora");

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'it')).toEqual('fra 8 ore');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'it')).toEqual('fra un giorno');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'it')).toEqual('fra 3 giorni');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'it')).toEqual('fra una settimana');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'it')).toEqual('fra 3 settimane');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'it')).toEqual('fra un mese');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'it')).toEqual('fra 4 mesi');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'it')).toEqual('fra un anno');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'it')).toEqual('fra 10 anni');
  });
});
