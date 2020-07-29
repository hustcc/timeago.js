import { advanceTo, clear } from 'jest-date-mock';
import { register, format } from '../../src';
import oc from '../../src/lang/an';

register('an', an);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('an', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'an')).toEqual('fa un momento');

    advanceTo(30 * 1000);
    expect(format(date, 'an')).toEqual('fa 30 segundos');

    advanceTo(1000 * 60);
    expect(format(date, 'an')).toEqual('fa 1 minuto');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'an')).toEqual('fa 30 minutos');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'an')).toEqual('fa 1 hora');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'an')).toEqual('fa 8 horas');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'an')).toEqual('fa 1 día');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'an')).toEqual('fa 3 días');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'an')).toEqual('fa 1 semana');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'an')).toEqual('fa 3 semanas');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'an')).toEqual('fa 1 mes');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'an')).toEqual('fa 4 meses');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'an')).toEqual('fa 1 anyo');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'an')).toEqual('fa 10 anyos');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'an')).toEqual("d'aquí a un momento");

    advanceTo(-30 * 1000);
    expect(format(date, 'an')).toEqual("d'aquí a 30 segundos");

    advanceTo(-1000 * 60);
    expect(format(date, 'an')).toEqual("d'aquí a 1 minuto");

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'an')).toEqual("d'aquí a 30 minutos");

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'an')).toEqual("d'aquí a 1 hora");

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'an')).toEqual("d'aquí a 8 horas");

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'an')).toEqual("d'aquí a 1 día");

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'an')).toEqual("d'aquí a 3 días");

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'an')).toEqual("d'aquí a 1 semana");

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'an')).toEqual("d'aquí a 3 semanas");

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'an')).toEqual("d'aquí a 1 mes");

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'an')).toEqual("d'aquí a 4 meses");

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'an')).toEqual("d'aquí a 1 anyo");

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'an')).toEqual("d'aquí a 10 anyos");
  });
});
