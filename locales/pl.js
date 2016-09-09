
module.exports = function(number, index) {
  var locale = [
    ['w tej chwili', 'za chwilę'],
    ['%s sekund temu', 'za %s sekund'],
    ['1 minutę temu', 'za 1 minutę'],
    ['%s minut temu', 'za %s minut'],
    ['1 godzina temu', 'za 1 godzinę'],
    ['%s godzin temu', 'za %s godzin'],
    ['1 dzień temu', 'za 1 dzień'],
    ['%s dni temu', 'za %s dni'],
    ['1 tydzień temu', 'za 1 tydzień'],
    ['%s tygodni temu', 'za %s tygodni'],
    ['1 miesiąc temu', 'za 1 miesiąc'],
    ['%s miesiące temu', 'za %s miesiące'],
    ['1 rok temu', 'za 1 rok'],
    ['%s lata temu', 'za %s lata']
  ];
  var str = number.toString();
  if (index == 1 && ((str.length == 2 && str[0] == "1" && str[1] != '0') || [2,3,4].indexOf(number % 10) != -1 || [2,3,4].indexOf(number) != -1)) {
    return ['%s sekundy temu', 'za %s sekundy'];
  } else if (index == 3 && ([2,3,4].indexOf(number % 10) != -1 || [2,3,4].indexOf(number) != -1)) {
    return ['%s minuty temu', 'za %s minuty'];
  } else if (index == 5 && ([2,3,4].indexOf(number % 10) != -1 || [2,3,4].indexOf(number) != -1)) {
    return ['%s godziny temu', 'za %s godziny'];
  } else if (index == 9 && [2,3,4].indexOf(number) != -1) {
    return ['%s tygodnie temu', 'za %s tygodnie'];
  } else if (index == 11 && (number % 10 == 0 || (str.length == 2 && str[0] == "1") || [1,5,6,7,8,9].indexOf(number % 10) != -1)) {
    return ['%s miesięcy temu', 'za %s miesięcy'];
  } else if (index == 13 && (number % 10 == 0 || (str.length == 2 && str[0] == "1") || [1,5,6,7,8,9].indexOf(number % 10) != -1)) {
    return ['%s lat temu', 'za %s lat'];
  } else {
    return locale[index];
  }
};
