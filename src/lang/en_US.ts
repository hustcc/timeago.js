const EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];

export default function(diff: number, idx: number): [string, string] {
  if (idx === 0) return ['just now', 'right now'];
  let unit = EN_US[Math.floor(idx / 2)];
  if (diff > 1) unit += 's';
  return [`${diff} ${unit} ago`, `in ${diff} ${unit}`];
}
