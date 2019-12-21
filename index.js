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
  var locale = navigator.language.replace('-', '_');
  timeago.render(document.querySelectorAll('.need_to_be_rendered'), locale);

// 2. demo
  document.getElementById('demo_now').innerHTML = timeago.format(new Date());
  document.getElementById('demo_20160907').innerHTML = timeago.format('2016-09-07');
  document.getElementById('demo_timestamp').innerHTML = timeago.format(1473245023718);
}

function init_test_page() {
  document.querySelectorAll('.native time').forEach(function(node) {
    node.setAttribute('datetime', iso8601(new Date()));
  });

  document.querySelectorAll('.native time').forEach(function(node) {
    node.setAttribute('datetime', iso8601(new Date()));
  });

  document.querySelectorAll('.locales time').forEach(function(node) {
    node.setAttribute('datetime', iso8601(new Date()));
  });

  document.querySelectorAll('.min-interval time').forEach(function(node) {
    node.setAttribute('datetime', iso8601(new Date()));
  });
}

