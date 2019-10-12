const timeTypes = [
  ['ثانية', 'ثانيتين', '%s ثوان', '%s ثانية'], // Seconds
  ['دقيقة', 'دقيقتين', '%s دقائق', '%s دقيقة'], // Minutes
  ['ساعة', 'ساعتين', '%s ساعات', '%s ساعة'], // Hours
  ['يوم', 'يومين', '%s أيام', '%s يوماً'], // Days
  ['أسبوع', 'أسبوعين', '%s أسابيع', '%s أسبوعاً'], // Weeks
  ['شهر', 'شهرين', '%s أشهر', '%s شهراً'], // Months
  ['عام', 'عامين', '%s أعوام', '%s عاماً'], // Years
];

function formatTime(type: number, n: number): string {
  if (n < 3) return timeTypes[type][n - 1];
  if (n >= 3 && n <= 10) return timeTypes[type][2];
  return timeTypes[type][3];
}

export default function(number: number, index: number): [string, string] {
  if (index === 0) {
    return ['منذ لحظات', 'بعد لحظات'];
  }

  const timeStr = formatTime(Math.floor(index / 2), number);
  return ['منذ' + ' ' + timeStr, 'بعد' + ' ' + timeStr];
}
