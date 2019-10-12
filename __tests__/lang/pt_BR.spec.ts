import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import { format, register } from '../../src';
import pt_BR from '../../src/lang/pt_BR';

register('pt_BR', pt_BR);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('Brazilian Portuguese', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'pt_BR')).toEqual('agora mesmo');

    advanceTo(30 * 1000);
    expect(format(date, 'pt_BR')).toEqual('há 30 segundos');

    advanceTo(1000 * 60);
    expect(format(date, 'pt_BR')).toEqual('há um minuto');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'pt_BR')).toEqual('há 30 minutos');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'pt_BR')).toEqual('há uma hora');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'pt_BR')).toEqual('há 8 horas');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'pt_BR')).toEqual('há um dia');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'pt_BR')).toEqual('há 3 dias');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'pt_BR')).toEqual('há uma semana');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'pt_BR')).toEqual('há 3 semanas');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'pt_BR')).toEqual('há um mês');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'pt_BR')).toEqual('há 4 meses');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'pt_BR')).toEqual('há um ano');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'pt_BR')).toEqual('há 10 anos');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'pt_BR')).toEqual('agora');

    advanceTo(-30 * 1000);
    expect(format(date, 'pt_BR')).toEqual('em 30 segundos');

    advanceTo(-1000 * 60);
    expect(format(date, 'pt_BR')).toEqual('em um minuto');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'pt_BR')).toEqual('em 30 minutos');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'pt_BR')).toEqual('em uma hora');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'pt_BR')).toEqual('em 8 horas');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'pt_BR')).toEqual('em um dia');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'pt_BR')).toEqual('em 3 dias');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'pt_BR')).toEqual('em uma semana');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'pt_BR')).toEqual('em 3 semanas');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'pt_BR')).toEqual('em um mês');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'pt_BR')).toEqual('em 4 meses');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'pt_BR')).toEqual('em um ano');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'pt_BR')).toEqual('em 10 anos');
  });
});
