// Indonesian (Indonesia)
export default function(number: number, index: number): [string, string] {
  return [
    ['baru saja', 'sebentar lagi'],
    ['%s detik yang lalu', 'dalam %s detik'],
    ['semenit yang lalu', 'dalam semenit'],
    ['%s menit yang lalu', 'dalam %s menit'],
    ['sejam yang lalu', 'dalam sejam'],
    ['%s jam yang lalu', 'dalam %s jam'],
    ['sehari yang lalu', 'dalam sehari'],
    ['%s hari yang lalu', 'dalam %s hari'],
    ['seminggu yang lalu', 'dalam seminggu'],
    ['%s minggu yang lalu', 'dalam %s minggu'],
    ['sebulan yang lalu', 'dalam sebulan'],
    ['%s bulan yang lalu', 'dalam %s bulan'],
    ['setahun yang lalu', 'dalam setahun'],
    ['%s tahun yang lalu', 'dalam %s tahun'],
  ][index] as [string, string];
}
