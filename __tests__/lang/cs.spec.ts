
import { register, format } from '../../src';
import cs from '../../src/lang/cs';

register('cs', cs);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('cs', () => {
  describe('time ago', () => {
    test('just now', () => {
      vi.setSystemTime(9 * 1000);
      expect(format(date, 'cs')).toEqual('právě teď');
    });

    test('seconds', () => {
      vi.setSystemTime(30 * 1000);
      expect(format(date, 'cs')).toEqual('před 30 vteřinami');
    });

    test('minute', () => {
      vi.setSystemTime(1000 * 60);
      expect(format(date, 'cs')).toEqual('před minutou');
    });

    test('minutes', () => {
      vi.setSystemTime(1000 * 60 * 30);
      expect(format(date, 'cs')).toEqual('před 30 minutami');
    });

    test('hour', () => {
      vi.setSystemTime(1000 * 60 * 60);
      expect(format(date, 'cs')).toEqual('před hodinou');
    });

    test('hours', () => {
      vi.setSystemTime(1000 * 60 * 60 * 8);
      expect(format(date, 'cs')).toEqual('před 8 hodinami');
    });

    test('yesterday', () => {
      vi.setSystemTime(1000 * 60 * 60 * 24);
      expect(format(date, 'cs')).toEqual('včera');
    });

    test('days', () => {
      vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
      expect(format(date, 'cs')).toEqual('před 3 dny');
    });

    test('last week', () => {
      vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
      expect(format(date, 'cs')).toEqual('minulý týden');
    });

    test('weeks', () => {
      vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
      expect(format(date, 'cs')).toEqual('před 3 týdny');
    });

    test('last month', () => {
      vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
      expect(format(date, 'cs')).toEqual('minulý měsíc');
    });

    test('months', () => {
      vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
      expect(format(date, 'cs')).toEqual('před 4 měsíci');
    });

    test('last year', () => {
      vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
      expect(format(date, 'cs')).toEqual('před rokem');
    });

    test('years', () => {
      vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
      expect(format(date, 'cs')).toEqual('před 10 lety');
    });
  });

  describe('time in', () => {
    test('just now', () => {
      vi.setSystemTime(-9 * 1000);
      expect(format(date, 'cs')).toEqual('právě teď');
    });

    test('seconds', () => {
      vi.setSystemTime(-30 * 1000);
      expect(format(date, 'cs')).toEqual('za 30 vteřin');
    });

    test('minute', () => {
      vi.setSystemTime(-1000 * 60);
      expect(format(date, 'cs')).toEqual('za minutu');
    });

    test('4 minutes', () => {
      vi.setSystemTime(-1000 * 60 * 4);
      expect(format(date, 'cs')).toEqual('za 4 minuty');
    });

    test('5 minutes', () => {
      vi.setSystemTime(-1000 * 60 * 5);
      expect(format(date, 'cs')).toEqual('za 5 minut');
    });

    test('hour', () => {
      vi.setSystemTime(-1000 * 60 * 60);
      expect(format(date, 'cs')).toEqual('za hodinu');
    });

    test('4 hours', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 4);
      expect(format(date, 'cs')).toEqual('za 4 hodiny');
    });

    test('5 hours', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 5);
      expect(format(date, 'cs')).toEqual('za 5 hodin');
    });

    test('tomorrow', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24);
      expect(format(date, 'cs')).toEqual('zítra');
    });

    test('4 days', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 4);
      expect(format(date, 'cs')).toEqual('za 4 dny');
    });

    test('5 days', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 5);
      expect(format(date, 'cs')).toEqual('za 5 dnů');
    });

    test('next week', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
      expect(format(date, 'cs')).toEqual('příští týden');
    });

    test('4 weeks', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 4);
      expect(format(date, 'cs')).toEqual('za 4 týdny');
    });

    test('next month', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
      expect(format(date, 'cs')).toEqual('přístí měsíc');
    });

    test('4 months', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
      expect(format(date, 'cs')).toEqual('za 4 měsíce');
    });

    test('5 months', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 5);
      expect(format(date, 'cs')).toEqual('za 5 měsíců');
    });

    test('next year', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
      expect(format(date, 'cs')).toEqual('přístí rok');
    });

    test('4 years', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 4);
      expect(format(date, 'cs')).toEqual('za 4 roky');
    });

    test('5 years', () => {
      vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 5);
      expect(format(date, 'cs')).toEqual('za 5 let');
    });
  });
});
