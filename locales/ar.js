module.exports = function(number, index) {
    if (index === 0) {
        return [ 'منذ لحظات', 'بعد لحظات' ];
    }

    var timeType;
    switch (index) {
        case 1: timeType = 0; break;
        case 2:
        case 3: timeType = 1; break;
        case 4:
        case 5: timeType = 2; break;
        case 6:
        case 7: timeType = 3; break;
        case 8:
        case 9: timeType = 4; break;
        case 10:
        case 11: timeType = 5; break;
        case 12:
        case 13: timeType = 6; break;
    }

    return ['منذ' + ' ' + formatTime(timeType, number), 'بعد' + ' ' + formatTime(timeType, number)];
}

var timeTypes = [
    [ 'ثانية', 'ثانيتان', '%s ثوان', '%s ثانية' ],   // Seconds
    [ 'دقيقة', 'دقيقتان', '%s دقائق', '%s دقيقة' ],  // Minutes
    [ 'ساعة', 'ساعتان', '%s ساعات', '%s ساعة' ],     // Hours
    [ 'يوم', 'يومان', '%s أيام', '%s يوم' ],         // Days
    [ 'أسبوع', 'أسبوعان', '%s أسابيع', '%s أسبوع' ], // Weeks
    [ 'شهر', 'شهران', '%s أشهر', '%s شهر' ],         // Months
    [ 'سنة', 'سنتان', '%s سنين', '%s سنة' ]          // Years
];

function formatTime(type, n) {
    if (n === 1)
        return timeTypes[type][0];
    else if (n == 2)
        return timeTypes[type][1];
    else if (n >= 3 && n <= 10)
        return timeTypes[type][2];
    else
        return timeTypes[type][3];
}