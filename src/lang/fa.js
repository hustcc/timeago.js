export default function (number, index) {
  var formattedString = [
    ['همین حالا', 'لحظاتی پیش'],
    ['%s ثانیه پیش', 'حدود %s ثانیه پیش'],
    ['۱ دقیقه پیش', 'حدود ۱ دقیقه پیش'],
    ['%s دقیقه پیش', 'حدود %s دقیقه پیش'],
    ['۱ ساعت پیش', 'حدود ۱ ساعت پیش'],
    ['%s ساعت پیش', 'حدود %s ساعت پیش'],
    ['۱ روز پیش', 'حدود ۱ روز پیش'],
    ['%s روز پیش', 'حدود %s روز پیش'],
    ['۱ هفته پیش', 'حدود ۱ هفته پیش'],
    ['%s هفته پیش', 'حدود %s هفته پیش'],
    ['۱ ماه پیش', 'حدود ۱ ماه پیش'],
    ['%s ماه پیش', 'حدود %s ماه پیش'],
    ['۱ سال پیش', 'حدود ۱ سال پیش'],
    ['%s سال پیش', 'حدود %s سال پیش']
  ][index];

  // We convert regular numbers (%s) to standard persian numbers using toPersianNumber function
  return [formattedString[0].replace('%s', toPersianNumber(number)), formattedString[1].replace('%s', toPersianNumber(number))];
}

// As persian language has different number symbols we need to replace regular numbers
// to standard persian numbres.
function toPersianNumber(number) {
  // List of standard persian numbers from 0 to 9
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return number
    .toString()
    .replace(/\d/g, x => persianDigits[x]);
}