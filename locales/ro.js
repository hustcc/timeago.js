module.exports = function(number, index) {
  return [
    ['chiar acum', 'imediat'],
    ['acum %s secunde', 'peste %s secunde'],
    ['acum 1 minut', 'peste 1 minut'],
    ['acum %s minute', 'peste %s minute'],
    ['acum 1 oră', 'peste 1 oră'],
    ['acum %s ore', 'peste %s ore'],
    ['acum 1 zi', 'peste 1 zi'],
    ['acum %s zile', 'peste %s zile'],
    ['acum 1 săptămână', 'peste 1 săptămână'],
    ['acum %s săptămâni', 'peste %s săptămâni'],
    ['acum 1 lună', 'peste 1 lună'],
    ['acum %s luni', 'peste %s luni'],
    ['acum 1 an ', 'peste 1 an'],
    ['acum %s ani', 'peste %s ani']
  ][index];
}
