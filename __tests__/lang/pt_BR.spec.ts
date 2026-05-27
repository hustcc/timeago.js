import { format, register } from '../../src';
import pt_BR from '../../src/lang/pt_BR';

register('pt_BR', pt_BR);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('Brazilian Portuguese', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'pt_BR')).toEqual('agora mesmo');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'pt_BR')).toEqual('há 30 segundos');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'pt_BR')).toEqual('há um minuto');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'pt_BR')).toEqual('há 30 minutos');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'pt_BR')).toEqual('há uma hora');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'pt_BR')).toEqual('há 8 horas');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'pt_BR')).toEqual('há um dia');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'pt_BR')).toEqual('há 3 dias');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'pt_BR')).toEqual('há uma semana');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'pt_BR')).toEqual('há 3 semanas');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'pt_BR')).toEqual('há um mês');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'pt_BR')).toEqual('há 4 meses');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'pt_BR')).toEqual('há um ano');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'pt_BR')).toEqual('há 10 anos');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'pt_BR')).toEqual('agora');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'pt_BR')).toEqual('em 30 segundos');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'pt_BR')).toEqual('em um minuto');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'pt_BR')).toEqual('em 30 minutos');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'pt_BR')).toEqual('em uma hora');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'pt_BR')).toEqual('em 8 horas');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'pt_BR')).toEqual('em um dia');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'pt_BR')).toEqual('em 3 dias');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'pt_BR')).toEqual('em uma semana');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'pt_BR')).toEqual('em 3 semanas');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'pt_BR')).toEqual('em um mês');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'pt_BR')).toEqual('em 4 meses');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'pt_BR')).toEqual('em um ano');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'pt_BR')).toEqual('em 10 anos');
  });
});
