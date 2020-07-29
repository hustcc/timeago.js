const TK = ['sekunt', 'minut', 'sagat', 'gün', 'hepde', 'aý', 'ýyl'];
function getSuffix(unit: string): string {
  return unit.match(/[aouy]/) ? 'dan' : 'den';
}
export default function(diff: number, idx: number): [string, string] {
  if (idx === 0) return ['biraz öň', 'şuwagt'];
  const unit = TK[Math.floor(idx / 2)];
  return [`${diff} ${unit} öň`, `${diff} ${unit}${getSuffix(unit)}`];
}
