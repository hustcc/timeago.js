const kurdishDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

// change digits from English to Kurdish
function toKurdishNumeric(number: number): string {
  return number.toString().replace(/\d/g, (x: string) => kurdishDigits[x]);
}

const kurdishFuzzyDates = [
  ['%s چرکە لەمەوپێش'], // Seconds
  ['%s دەقە لەمەوپێش'], // Minutes
  ['%s کاتژمێر لەمەوپێش'], // Hours
  ['%s ڕۆژ لەمەوپێش'], // Days
  ['%s هەفتە لەمەوپێش'], // Weeks
  ['%s مانگ لەمەوپێش'], // Months
  ['%s ساڵ لەمەوپێش'], // Years
];

export default function(number: number, index: number): [string] {
  if (index === 0) return ['هەر ئێستا'];
  return [kurdishFuzzyDates[Math.floor(index / 2)][0].replace('%s', toKurdishNumeric(number))];
}
