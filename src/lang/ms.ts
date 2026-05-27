// Malaysian (Malaysia)
export default function(number: number, index: number): [string, string] {
  return [
    ['baru sahaja', 'sebentar'],
    ['%s saat yang lalu', 'dalam %s saat'],
    ['1 minit yang lalu', 'dalam 1 minit'],
    ['%s minit yang lalu', 'dalam %s minit'],
    ['1 jam yang lalu', 'dalam 1 jam'],
    ['%s jam yang lalu', 'dalam %s jam'],
    ['1 hari yang lalu', 'dalam 1 hari'],
    ['%s hari yang lalu', 'dalam %s hari'],
    ['1 minggu yang lalu', 'dalam 1 minggu'],
    ['%s minggu yang lalu', 'dalam %s minggu'],
    ['1 bulan yang lalu', 'dalam 1 bulan'],
    ['%s bulan yang lalu', 'dalam %s bulan'],
    ['1 tahun yang lalu', 'dalam 1 tahun'],
    ['%s tahun yang lalu', 'dalam %s tahun'],
  ][index] as [string, string];
}
