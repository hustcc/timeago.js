/**
 * Created by hustcc on 18/5/24.
 * Contact: i@hust.cc
 */
import { advanceTo, clear } from 'jest-date-mock';
import { format, register } from '../../src';
import is from '../../src/lang/is';

register('is', is);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('is', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'is')).toEqual('rétt í þessu');

    advanceTo(30 * 1000);
    expect(format(date, 'is')).toEqual('30 sekúndum síðan');

    advanceTo(1000 * 60);
    expect(format(date, 'is')).toEqual('1 mínútu síðan');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'is')).toEqual('30 mínútum síðan');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'is')).toEqual('1 klukkutíma síðan');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'is')).toEqual('8 klukkutímum síðan');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'is')).toEqual('1 degi síðan');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'is')).toEqual('3 dögum síðan');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'is')).toEqual('1 viku síðan');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'is')).toEqual('3 vikum síðan');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'is')).toEqual('1 mánuði síðan');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'is')).toEqual('4 mánuðum síðan');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'is')).toEqual('1 ári síðan');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'is')).toEqual('10 árum síðan');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'is')).toEqual('núna');

    advanceTo(-30 * 1000);
    expect(format(date, 'is')).toEqual('eftir 30 sekúndur');

    advanceTo(-1000 * 60);
    expect(format(date, 'is')).toEqual('eftir 1 mínútu');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'is')).toEqual('eftir 30 mínútur');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'is')).toEqual('eftir 1 klukkutíma');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'is')).toEqual('eftir 8 klukkutíma');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'is')).toEqual('eftir 1 dag');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'is')).toEqual('eftir 3 daga');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'is')).toEqual('eftir 1 viku');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'is')).toEqual('eftir 3 vikur');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'is')).toEqual('eftir 1 mánuð');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'is')).toEqual('eftir 4 mánuði');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'is')).toEqual('eftir 1 ár');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'is')).toEqual('eftir 10 ár');
  });
});
