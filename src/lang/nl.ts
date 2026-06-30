export default function(number: number, index: number): [string, string] {
  return [
    ['recent', 'binnenkort'],
    ['%s seconden geleden', 'over %s seconden'],
    ['1 minuut geleden', 'over 1 minuut'],
    ['%s minuten geleden', 'over %s minuten'],
    ['1 uur geleden', 'over 1 uur'],
    ['%s uur geleden', 'over %s uur'],
    ['1 dag geleden', 'over 1 dag'],
    ['%s dagen geleden', 'over %s dagen'],
    ['1 week geleden', 'over 1 week'],
    ['%s weken geleden', 'over %s weken'],
    ['1 maand geleden', 'over 1 maand'],
    ['%s maanden geleden', 'over %s maanden'],
    ['1 jaar geleden', 'over 1 jaar'],
    ['%s jaar geleden', 'over %s jaar'],
  ][index] as [string, string];
}
