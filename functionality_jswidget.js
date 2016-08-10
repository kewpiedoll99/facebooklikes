javascript:(function() {
var notifsCount = Number(document.getElementById('notificationsCountValue').childNodes[0].nodeValue);
var newNotifsCount = notifsCount;
alert('newNotifsCount: ' + newNotifsCount);
var jewelItems = document.getElementsByClassName('uiScrollableAreaContent')[0].childNodes[0].childNodes;
for (var i = 0; i < jewelItems.length; i++) {
  var node = jewelItems[i];
  var dataGt = (node.attributes['data-gt'] != undefined) ? JSON.parse(node.attributes['data-gt'].nodeValue) : {};
  if (node.classList.contains('jewelItemNew') && dataGt.hasOwnProperty('notif_type')) {
    alert('notif type: ' + dataGt['notif_type']);
    if (dataGt['notif_type'] == 'like' || dataGt['notif_type'] == 'feedback_reaction_generic') {
      alert('gettinghere');
      node.classList.remove('jewelItemNew');
      alert('gettinghere2');
      newNotifsCount--;
      alert('newNotifsCount: ' + newNotifsCount);
    }
  }
}
alert('newNotifsCount: ' + newNotifsCount);
if (newNotifsCount != notifsCount) {
  if (newNotifsCount == 0)
    document.getElementsByClassName('jewelCount')[2].classList.remove('hasNew');
  else if (newNotifsCount > 0)
    document.getElementById('notificationsCountValue').childNodes[0].nodeValue = newNotifsCount;
}
}
)();