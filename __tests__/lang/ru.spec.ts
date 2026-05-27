
import { format, register } from '../../src';
import ru from '../../src/lang/ru';

register('ru', ru);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ru', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'ru')).toEqual('только что');

    vi.setSystemTime(22 * 1000);
    expect(format(date, 'ru')).toEqual('22 секунды назад');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'ru')).toEqual('30 секунд назад');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'ru')).toEqual('минуту назад');

    vi.setSystemTime(1000 * 60 * 5);
    expect(format(date, 'ru')).toEqual('5 минут назад');

    vi.setSystemTime(1000 * 60 * 21);
    expect(format(date, 'ru')).toEqual('21 минуту назад');

    vi.setSystemTime(1000 * 60 * 22);
    expect(format(date, 'ru')).toEqual('22 минуты назад');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'ru')).toEqual('30 минут назад');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'ru')).toEqual('час назад');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'ru')).toEqual('8 часов назад');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'ru')).toEqual('вчера');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ru')).toEqual('3 дня назад');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ru')).toEqual('неделю назад');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ru')).toEqual('3 недели назад');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ru')).toEqual('месяц назад');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ru')).toEqual('4 месяца назад');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ru')).toEqual('год назад');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ru')).toEqual('10 лет назад');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'ru')).toEqual('через несколько секунд');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'ru')).toEqual('через 30 секунд');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'ru')).toEqual('через минуту');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'ru')).toEqual('через 30 минут');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'ru')).toEqual('через час');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'ru')).toEqual('через 8 часов');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'ru')).toEqual('завтра');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ru')).toEqual('через 3 дня');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 5);
    expect(format(date, 'ru')).toEqual('через 5 дней');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ru')).toEqual('через неделю');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ru')).toEqual('через 3 недели');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ru')).toEqual('через месяц');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ru')).toEqual('через 4 месяца');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 5);
    expect(format(date, 'ru')).toEqual('через 5 месяцев');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ru')).toEqual('через год');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 2);
    expect(format(date, 'ru')).toEqual('через 2 года');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ru')).toEqual('через 10 лет');
  });
});
