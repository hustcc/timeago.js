const kurdishDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

// change digits from English to Kurdish
function toKurdishNumeric(number: number): string {
  return number.toString().replace(/\d/g, (x: string) => kurdishDigits[x]);
}

const kurdishFuzzyDates = [
  ['%s چرکە لەمەوپێش', '%s چرکەی داهاتوو'], // Seconds
  ['%s دەقە لەمەوپێش', '%s دەقەی داهاتوو'], // Minutes
  ['%s کاتژمێر لەمەوپێش', '%s کاتژمێری داهاتوو'], // Hours
  ['%s ڕۆژ لەمەوپێش', '%s ڕۆژی داهاتوو'], // Days
  ['%s هەفتە لەمەوپێش', '%s هەفتەی داهاتوو'], // Weeks
  ['%s مانگ لەمەوپێش', '%s مانگی داهاتوو'], // Months
  ['%s ساڵ لەمەوپێش', '%s ساڵی داهاتوو'], // Years
];

export default function(number: number, index: number): [string, string] {
  if (index === 0) return ['هەر ئێستا', 'ئێستا'];
  return [
    kurdishFuzzyDates[Math.floor(index / 2)][0].replace('%s', toKurdishNumeric(number)),
    kurdishFuzzyDates[Math.floor(index / 2)][1].replace('%s', toKurdishNumeric(number)),
  ];
}
