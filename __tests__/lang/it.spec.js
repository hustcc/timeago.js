import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import { register, format } from '../../src';
import it from '../../src/lang/it';

register('it', it);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('it', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'it')).toEqual('poco fa');

    advanceTo(30 * 1000);
    expect(format(date, 'it')).toEqual('30 secondi fa');

    advanceTo(1000 * 60);
    expect(format(date, 'it')).toEqual('un minuto fa');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'it')).toEqual('30 minuti fa');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'it')).toEqual('un\'ora fa');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'it')).toEqual('8 ore fa');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'it')).toEqual('un giorno fa');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'it')).toEqual('3 giorni fa');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'it')).toEqual('una settimana fa');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'it')).toEqual('3 settimane fa');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'it')).toEqual('un mese fa');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'it')).toEqual('4 mesi fa');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'it')).toEqual('un anno fa');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'it')).toEqual('10 anni fa');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'it')).toEqual('fra poco');

    advanceTo(-30 * 1000);
    expect(format(date, 'it')).toEqual('fra 30 secondi');

    advanceTo(-1000 * 60);
    expect(format(date, 'it')).toEqual('fra un minuto');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'it')).toEqual('fra 30 minuti');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'it')).toEqual('fra un\'ora');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'it')).toEqual('fra 8 ore');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'it')).toEqual('fra un giorno');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'it')).toEqual('fra 3 giorni');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'it')).toEqual('fra una settimana');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'it')).toEqual('fra 3 settimane');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'it')).toEqual('fra un mese');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'it')).toEqual('fra 4 mesi');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'it')).toEqual('fra un anno');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'it')).toEqual('fra 10 anni');
  });
});
