'use strict';

Object.defineProperty(exports, "__esModule", {
value: true
});

exports.default = function (number, index) {
switch (index) {
case 0:
return ['malo prije', 'upravo sad'];
case 1:
return ['prije ' + seconds(number), 'za ' + seconds(number)];
case 2:
case 3:
return ['prije ' + minutes(number), 'za ' + minutes(number)];
case 4:
case 5:
return ['prije ' + hours(number), 'za ' + hours(number)];
case 6:
case 7:
return ['prije ' + days(number), 'za ' + days(number)];
case 8:
case 9:
return ['prije ' + weeks(number), 'za ' + weeks(number)];
case 10:
case 11:
return ['prije ' + months(number), 'za ' + months(number)];
case 12:
case 13:
return ['prije ' + years(number), 'za ' + years(number)];
default:
return ['', ''];
}
};

var seconds = formatNum.bind(null, '1 sekunda', '%s sekunda', '%s sekunde', '%s sekundi'),
minutes = formatNum.bind(null, '1 minuta', '%s minuta', '%s minute', '%s minuta'),
hours = formatNum.bind(null, 'sat vremena', '%s sat', '%s sata', '%s sati'),
days = formatNum.bind(null, '1 dan', '%s dan', '%s dana', '%s dana'),
weeks = formatNum.bind(null, 'tjedan dana', '%s tjedan', '%s tjedna', '%s tjedana'),
months = formatNum.bind(null, 'mjesec dana', '%s mjesec', '%s mjeseca', '%s mjeseci'),
years = formatNum.bind(null, 'godinu dana', '%s godinu', '%s godine', '%s godina');

;

function formatNum(single, one, few, other, n) {
var rem10 = n % 10;
var rem100 = n % 100;

if (n == 1) {
return single;
} else if (rem10 == 1 && rem100 != 11) {
return one;
} else if (rem10 >= 2 && rem10 <= 4 && !(rem100 >= 12 && rem100 <= 14)) {
return few;
} else {
return other;
}
}
module.exports = exports['default'];
