import { advanceTo, clear } from 'jest-date-mock';
import { register, format } from '../../src';
import it from '../../src/lang/eo';

register('eo', eo);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('eo', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'it')).toEqual('ĵus');

    advanceTo(30 * 1000);
    expect(format(date, 'it')).toEqual('antaŭ 30 sekundoj');

    advanceTo(1000 * 60);
    expect(format(date, 'it')).toEqual('antaŭ 1 minuto');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'it')).toEqual('antaŭ 30 minutoj');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'it')).toEqual('antaŭ 1 horo');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'it')).toEqual('antaŭ 8 horoj');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'it')).toEqual('antaŭ 1 tago');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'it')).toEqual('antaŭ 3 tagoj');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'it')).toEqual('antaŭ unu semajno');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'it')).toEqual('antaŭ 3 semajnoj');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'it')).toEqual('antaŭ 1 monato');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'it')).toEqual('antaŭ 4 monatoj');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'it')).toEqual('antaŭ 1 jaro');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'it')).toEqual('antaŭ 10 jaroj');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'it')).toEqual('post momento');

    advanceTo(-30 * 1000);
    expect(format(date, 'it')).toEqual('post 30 sekundoj');

    advanceTo(-1000 * 60);
    expect(format(date, 'it')).toEqual('post 1 minuto');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'it')).toEqual('post 30 minutoj');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'it')).toEqual('post 1 horo');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'it')).toEqual('post 8 horoj');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'it')).toEqual('post 1 tago');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'it')).toEqual('post 3 tagoj');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'it')).toEqual('post 1 semajno');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'it')).toEqual('post 3 semajnoj');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'it')).toEqual('post 1 monato');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'it')).toEqual('post 4 monatoj');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'it')).toEqual('post 1 jaro');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'it')).toEqual('post 10 jaroj');
  });
});
