const kurdishDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

// change digits from English to Kurdish
function toKurdishNumeric(number: number): string {
  return number.toString().replace(/\d/g, (x: string) => kurdishDigits[x]);
}

const kurdishFuzzyDates = [
  ['%s چرکە لەمەوپێش', '%s چرکەیتر'], // Seconds
  ['%s دەقە لەمەوپێش', '%s دەقەیتر'], // Minutes
  ['%s کاتژمێر لەمەوپێش', '%s کاتژمێریتر'], // Hours
  ['%s ڕۆژ لەمەوپێش', '%s ڕۆژیتر'], // Days
  ['%s هەفتە لەمەوپێش', '%s هەفتەیتر'], // Weeks
  ['%s مانگ لەمەوپێش', '%s مانگیتر'], // Months
  ['%s ساڵ لەمەوپێش', '%s ساڵیتر'], // Years
];

export default function(number: number, index: number): [string, string] {
  if (index === 0) return ['هەر ئێستا', 'ئێستا'];
  return [
    kurdishFuzzyDates[Math.floor(index / 2)][0].replace('%s', toKurdishNumeric(number)),
    kurdishFuzzyDates[Math.floor(index / 2)][1].replace('%s', toKurdishNumeric(number)),
  ];
}
