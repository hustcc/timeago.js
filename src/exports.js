/* jshint expr: true */ 
!function (root, factory) {
  if (typeof module === 'object' && module.exports)
    module.exports = factory(root);
  else
    root.timeago = factory(root);
}(typeof window !== 'undefined' ? window : this, function () {

<%=contents%>

  return timeago;
});