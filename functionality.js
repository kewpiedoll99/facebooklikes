
var notifsCount = Number(document.getElementById('notificationsCountValue').childNodes[0].nodeValue);
var newNotifsCount = notifsCount;

var jewelItems = document.getElementsByClassName('uiScrollableAreaContent')[0].childNodes[0].childNodes;
for (var i = 0; i < jewelItems.length; i++) {
  var node = jewelItems[i];
  var dataGt = JSON.parse(node.attributes['data-gt'].nodeValue)
  if (dataGt['notif_type'] === 'like' || dataGt['notif_type'] === 'feedback_reaction_generic') {
    node.classList.remove('jewelItemNew');
    newNotifsCount--;
  }
}
if (newNotifsCount != notifsCount) {
  if (newNotifsCount == 0)
    document.getElementsByClassName('jewelCount')[2].classList.remove('hasNew');
  else if (newNotifsCount > 0)
    document.getElementById('notificationsCountValue').childNodes[0].nodeValue = newNotifsCount;
}
