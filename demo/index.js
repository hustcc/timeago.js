function iso8601(date) {
  return date.getUTCFullYear()
    + "-" + (date.getUTCMonth()+1)
    + "-" + date.getUTCDate()
    + "T" + date.getUTCHours()
    + ":" + date.getUTCMinutes()
    + ":" + date.getUTCSeconds() + "Z";
}

document.querySelector('.load_time').setAttribute('datetime', iso8601(new Date()));
var timeagoInstance = new timeago(null, navigator.language.replace('-', '_'));
timeagoInstance.render(document.querySelectorAll('.need_to_be_rendered'));

// 2. demo
document.getElementById('demo_now').innerHTML = new timeago().format(new Date());
document.getElementById('demo_20160907').innerHTML = new timeago(null, 'zh_CN').format('2016-09-07');
document.getElementById('demo_timestamp').innerHTML = new timeago().format(1473245023718); 