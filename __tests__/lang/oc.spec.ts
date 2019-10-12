import { advanceTo, clear } from 'jest-date-mock';
import { register, format } from '../../src';
import oc from '../../src/lang/oc';

register('oc', oc);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('oc', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'oc')).toEqual('fa un moment');

    advanceTo(30 * 1000);
    expect(format(date, 'oc')).toEqual('fa 30 segondas');

    advanceTo(1000 * 60);
    expect(format(date, 'oc')).toEqual('fa 1 minuta');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'oc')).toEqual('fa 30 minutas');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'oc')).toEqual('fa 1 ora');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'oc')).toEqual('fa 8 oras');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'oc')).toEqual('fa 1 jorn');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'oc')).toEqual('fa 3 jorns');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'oc')).toEqual('fa 1 setmana');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'oc')).toEqual('fa 3 setmanas');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'oc')).toEqual('fa 1 mes');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'oc')).toEqual('fa 4 meses');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'oc')).toEqual('fa 1 an');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'oc')).toEqual('fa 10 ans');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'oc')).toEqual("d'aquí un moment");

    advanceTo(-30 * 1000);
    expect(format(date, 'oc')).toEqual("d'aquí 30 segondas");

    advanceTo(-1000 * 60);
    expect(format(date, 'oc')).toEqual("d'aquí 1 minuta");

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'oc')).toEqual("d'aquí 30 minutas");

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'oc')).toEqual("d'aquí 1 ora");

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'oc')).toEqual("d'aquí 8 oras");

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'oc')).toEqual("d'aquí 1 jorn");

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'oc')).toEqual("d'aquí 3 jorns");

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'oc')).toEqual("d'aquí 1 setmana");

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'oc')).toEqual("d'aquí 3 setmanas");

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'oc')).toEqual("d'aquí 1 mes");

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'oc')).toEqual("d'aquí 4 meses");

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'oc')).toEqual("d'aquí 1 an");

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'oc')).toEqual("d'aquí 10 ans");
  });
});
