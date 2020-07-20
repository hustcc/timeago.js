const is = ['sekúnd', 'mínút', 'klukkutím', 'd', 'vik', 'mánuð', 'ár'];
const plural_in = ['ur', 'ur', 'a', 'aga', 'ur', 'i', ''];
const plural_ago = ['um', 'um', 'um', 'ögum', 'um', 'um', 'um'];

const singular_in = ['u', 'u', 'a', 'ag', 'u', '', ''];
const singular_ago = ['u', 'u', 'a', 'egi', 'u', 'i', 'i'];

export default function(diff: number, idx: number): [string, string] {
  if (idx === 0) return ['rétt í þessu', 'núna'];
  const is_indx = Math.floor(idx / 2);
  const unit = is[is_indx];
  let unit_in, unit_ago;
  if (diff === 1) {
    unit_in = singular_in[is_indx];
    unit_ago = singular_ago[is_indx];
  } else {
    unit_in = plural_in[is_indx];
    unit_ago = plural_ago[is_indx];
  }

  return [`${diff} ${unit + unit_ago} síðan`, `eftir ${diff} ${unit + unit_in}`];
}
