module.export = function(number, index) {
  return [
    ['baru saja', 'sebentar'],
    ['% detik yang lalu', 'dalam % detik'],
    ['1 menit yang lalu', 'dalam 1 menit'],
    ['% menit yang lalu', 'dalam % menit'],
    ['1 jam yang lalu', 'dalam 1 jam'],
    ['% jam yang lalu', 'dalam % jam'],
    ['1 hari yang lalu', 'dalam 1 hari'],
    ['% hari yang lalu', 'dalam % hari'],
    ['1 minggu yang lalu', 'dalam 1 minggu'],
    ['% minggu yang lalu', 'dalam % minggu'],
    ['1 bulan yang lalu', 'dalam 1 bulan'],
    ['% bulan yang lalu', 'dalam % bulan'],
    ['1 tahun yang lalu', 'dalam 1 tahun'],
    ['% tahun yang lalu', 'dalam % tahun']
  ][index];
}
