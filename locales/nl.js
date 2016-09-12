module.exports = function(number, index) {
  return [
    ['recent', 'binnenkort'],
    ['%s seconden geleden', 'in %s seconden'],
    ['1 minuut geleden', 'in 1 minuut'],
    ['%s minuten geleden', 'in %s minuten'],
    ['1 uur geleden', 'in 1 uur'],
    ['%s uren geleden', 'in %s uren'],
    ['1 dag geleden', 'in 1 dag'],
    ['%s dagen geleden', 'in %s dagen'],
    ['1 week geleden', 'in 1 week'],
    ['%s weken geleden', 'in %s weken'],
    ['1 maand geleden', 'in 1 maand'],
    ['%s maanden geleden', 'in %s maanden'],
    ['1 jaar geleden', 'in 1 jaar'],
    ['%s jaren geleden', 'in %s jaren']
  ][index];
}