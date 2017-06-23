function iso8601(date) {
  return date.getUTCFullYear()
    + "-" + (date.getUTCMonth()+1)
    + "-" + date.getUTCDate()
    + "T" + date.getUTCHours()
    + ":" + date.getUTCMinutes()
    + ":" + date.getUTCSeconds() + "Z";
}

function init_index_page() {
  document.querySelector('.load_time').setAttribute('datetime', iso8601(new Date()));
  var timeagoInstance = timeago(null, navigator.language.replace('-', '_'));
  timeagoInstance.render(document.querySelectorAll('.need_to_be_rendered'));

// 2. demo
  document.getElementById('demo_now').innerHTML = timeago().format(new Date());
  document.getElementById('demo_20160907').innerHTML = timeago(null, 'zh_CN').format('2016-09-07');
  document.getElementById('demo_timestamp').innerHTML = timeago().format(1473245023718);
}

function init_test_page() {
  $('.native time').attr('datetime', iso8601(new Date()));
  $('.jquery time').attr('data-timeago', iso8601(new Date()));
}

