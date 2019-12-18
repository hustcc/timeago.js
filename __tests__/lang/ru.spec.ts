import { advanceTo, clear } from 'jest-date-mock';
import { format, register } from '../../src';
import ru from '../../src/lang/ru';

register('ru', ru);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('ru', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'ru')).toEqual('только что');

    advanceTo(22 * 1000);
    expect(format(date, 'ru')).toEqual('22 секунды назад');

    advanceTo(30 * 1000);
    expect(format(date, 'ru')).toEqual('30 секунд назад');

    advanceTo(1000 * 60);
    expect(format(date, 'ru')).toEqual('минуту назад');

    advanceTo(1000 * 60 * 5);
    expect(format(date, 'ru')).toEqual('5 минут назад');

    advanceTo(1000 * 60 * 21);
    expect(format(date, 'ru')).toEqual('21 минуту назад');

    advanceTo(1000 * 60 * 22);
    expect(format(date, 'ru')).toEqual('22 минуты назад');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'ru')).toEqual('30 минут назад');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'ru')).toEqual('час назад');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'ru')).toEqual('8 часов назад');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'ru')).toEqual('вчера');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ru')).toEqual('3 дня назад');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ru')).toEqual('неделю назад');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ru')).toEqual('3 недели назад');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ru')).toEqual('месяц назад');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ru')).toEqual('4 месяца назад');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ru')).toEqual('год назад');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ru')).toEqual('10 лет назад');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'ru')).toEqual('через несколько секунд');

    advanceTo(-30 * 1000);
    expect(format(date, 'ru')).toEqual('через 30 секунд');

    advanceTo(-1000 * 60);
    expect(format(date, 'ru')).toEqual('через минуту');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'ru')).toEqual('через 30 минут');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'ru')).toEqual('через час');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'ru')).toEqual('через 8 часов');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'ru')).toEqual('завтра');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ru')).toEqual('через 3 дня');

    advanceTo(-1000 * 60 * 60 * 24 * 5);
    expect(format(date, 'ru')).toEqual('через 5 дней');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ru')).toEqual('через неделю');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ru')).toEqual('через 3 недели');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ru')).toEqual('через месяц');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ru')).toEqual('через 4 месяца');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 5);
    expect(format(date, 'ru')).toEqual('через 5 месяцев');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ru')).toEqual('через год');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 2);
    expect(format(date, 'ru')).toEqual('через 2 года');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ru')).toEqual('через 10 лет');
  });
});
