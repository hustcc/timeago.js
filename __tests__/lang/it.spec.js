import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import Timeago from '../../src';
import it from '../../src/lang/it';

Timeago.register('it', it);

const timeago = Timeago();
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
    expect(timeago.format(date, 'en')).toEqual('poco fa');

    advanceTo(30 * 1000);
    expect(timeago.format(date, 'en')).toEqual('30 secondi fa');

    advanceTo(1000 * 60);
    expect(timeago.format(date, 'en')).toEqual('un minuto fa');

    advanceTo(1000 * 60 * 30);
    expect(timeago.format(date, 'en')).toEqual('30 minuti fa');

    advanceTo(1000 * 60 * 60);
    expect(timeago.format(date, 'en')).toEqual('un\'ora fa');

    advanceTo(1000 * 60 * 60 * 8);
    expect(timeago.format(date, 'en')).toEqual('8 ore fa');

    advanceTo(1000 * 60 * 60 * 24);
    expect(timeago.format(date, 'en')).toEqual('un giorno fa');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(timeago.format(date, 'en')).toEqual('3 giorni fa');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(timeago.format(date, 'en')).toEqual('una settimana fa');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(timeago.format(date, 'en')).toEqual('3 settimane fa');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(timeago.format(date, 'en')).toEqual('un mese fa');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(timeago.format(date, 'en')).toEqual('4 mesi fa');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(timeago.format(date, 'en')).toEqual('un anno fa');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(timeago.format(date, 'en')).toEqual('10 anni fa');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(timeago.format(date, 'en')).toEqual('fra poco');

    advanceTo(-30 * 1000);
    expect(timeago.format(date, 'en')).toEqual('fra 30 secondi');

    advanceTo(-1000 * 60);
    expect(timeago.format(date, 'en')).toEqual('fra un minuto');

    advanceTo(-1000 * 60 * 30);
    expect(timeago.format(date, 'en')).toEqual('fra 30 minuti');

    advanceTo(-1000 * 60 * 60);
    expect(timeago.format(date, 'en')).toEqual('fra un\'ora');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(timeago.format(date, 'en')).toEqual('fra 8 hours');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(timeago.format(date, 'en')).toEqual('fra un giorno');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(timeago.format(date, 'en')).toEqual('fra 3 giorni');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(timeago.format(date, 'en')).toEqual('fra una settimana');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(timeago.format(date, 'en')).toEqual('fra 3 settimane');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(timeago.format(date, 'en')).toEqual('fra un mese');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(timeago.format(date, 'en')).toEqual('fra 4 mesi');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(timeago.format(date, 'en')).toEqual('fra un anno');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(timeago.format(date, 'en')).toEqual('fra 10 anni');
  });
});
