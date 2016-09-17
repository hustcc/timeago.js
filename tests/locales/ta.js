module.exports = function(t, tb) {
  // test second
  t.equal(tb.subSeconds(1), 'இப்போது');
  t.equal(tb.subSeconds(10),  '10 நொடிக்கு முன்');
  t.equal(tb.subSeconds(21), '21 நொடிக்கு முன்');
  t.equal(tb.subSeconds(22), '22 நொடிக்கு முன்');
  t.equal(tb.addSeconds(1), 'சற்று நேரம் முன்பு');
  t.equal(tb.addSeconds(10), '10 நொடிகளில்');
  t.equal(tb.addSeconds(21), '21 நொடிகளில்');
  t.equal(tb.addSeconds(22), '22 நொடிகளில்');

  // test minute
  t.equal(tb.subMinutes(1), '1 நிமிடத்திற்க்கு முன்');
  t.equal(tb.subMinutes(2), '2 நிமிடத்திற்க்கு முன்');
  t.equal(tb.subMinutes(5), '5 நிமிடத்திற்க்கு முன்');
  t.equal(tb.subMinutes(21), '21 நிமிடத்திற்க்கு முன்');
  t.equal(tb.addMinutes(1), '1 நிமிடத்தில்');
  t.equal(tb.addMinutes(2), '2 நிமிடங்களில்');
  t.equal(tb.addMinutes(5), '5 நிமிடங்களில்');
  t.equal(tb.addMinutes(21), '21 நிமிடங்களில்');
  
  // test hour
  t.equal(tb.subHours(1), '1 மணி நேரத்திற்கு முன்');
  t.equal(tb.subHours(2), '2 மணி நேரத்திற்கு முன்');
  t.equal(tb.subHours(5), '5 மணி நேரத்திற்கு முன்');
  t.equal(tb.subHours(21), '21 மணி நேரத்திற்கு முன்');
  t.equal(tb.addHours(1), '1 மணி நேரத்திற்குள்');
  t.equal(tb.addHours(2), '2 மணி நேரத்திற்குள்');
  t.equal(tb.addHours(5), '5 மணி நேரத்திற்குள்');
  t.equal(tb.addHours(21), '21 மணி நேரத்திற்குள்');

  // test day
  t.equal(tb.subDays(1), '1 நாளுக்கு முன்');
  t.equal(tb.subDays(2), '2 நாட்களுக்கு முன்');
  t.equal(tb.subDays(5), '5 நாட்களுக்கு முன்');
  t.equal(tb.addDays(1), '1 நாளில்');
  t.equal(tb.addDays(2), '2 நாட்களில்');
  t.equal(tb.addDays(5), '5 நாட்களில்');

  // test week
  t.equal(tb.subWeeks(1), '1 வாரத்திற்கு முன்');
  t.equal(tb.subWeeks(2), '2 வாரங்களுக்கு முன்');
  t.equal(tb.addWeeks(1), '1 வாரத்தில்');
  t.equal(tb.addWeeks(2), '2 வாரங்களில்');

  // test month
  t.equal(tb.subMonths(1), '1 மாதத்திற்கு முன்');
  t.equal(tb.subMonths(2), '2 மாதங்களுக்கு முன்');
  t.equal(tb.subMonths(5), '5 மாதங்களுக்கு முன்');
  t.equal(tb.addMonths(1), '1 மாதத்தில்');
  t.equal(tb.addMonths(2), '2 மாதங்களில்');
  t.equal(tb.addMonths(5), '5 மாதங்களில்');

  // test year
  t.equal(tb.subYears(1), '1 வருடத்திற்கு முன்');
  t.equal(tb.subYears(2), '2 வருடங்களுக்கு முன்');
  t.equal(tb.subYears(5), '5 வருடங்களுக்கு முன்');
  t.equal(tb.subYears(21), '21 வருடங்களுக்கு முன்');
  t.equal(tb.addYears(1), '1 வருடத்தில்');
  t.equal(tb.addYears(2), '2 வருடங்களில்');
  t.equal(tb.addYears(5), '5 வருடங்களில்');
  t.equal(tb.addYears(21), '21 வருடங்களில்');
};