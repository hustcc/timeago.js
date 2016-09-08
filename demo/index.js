function iso8601(date) {
  return date.getUTCFullYear()
    + "-" + (date.getUTCMonth()+1)
    + "-" + date.getUTCDate()
    + "T" + date.getUTCHours()
    + ":" + date.getUTCMinutes()
    + ":" + date.getUTCSeconds() + "Z";
}

document.querySelector('.load_time').setAttribute('data-timeago', iso8601(new Date()));
timeago().render(document.querySelectorAll('.need_to_be_rendered'));

// 2. demo
document.getElementById('demo_now').innerHTML = timeago().format(new Date());
document.getElementById('demo_20160907').innerHTML = timeago().format("2016-09-07", 'zh_CN');
document.getElementById('demo_timestamp').innerHTML = timeago().format(1473245023718); 