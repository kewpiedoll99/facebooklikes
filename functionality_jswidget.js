javascript:(function() {
function simulateMouseover(node, callback) {
  var evt = new MouseEvent('mouseover')
  node.dispatchEvent(evt);
  callback();
}
function setGrandchild() {
    grandchild = notifsFlyout.childNodes[2].firstChild.firstChild.firstChild;
}
var notifsCountVal = document.getElementById('notificationsCountValue');
var notifsCountNode = notifsCountVal.firstChild;
var notifsCount = Number(notifsCountNode.nodeValue);
var grandchild;
if (notifsCount > 0) {
  var newNotifsCount = notifsCount;
  var jewel = document.getElementById('fbNotificationsJewel');
  var notifsFlyout = document.getElementById('fbNotificationsFlyout');
  simulateMouseover(jewel, setGrandchild);
  var count = 0;
  while (grandchild == undefined && count < 1000) {
    setGrandchild();
    count++;
  }
  var jewelItems = grandchild.firstChild.firstChild.firstChild.firstChild.childNodes;
  for (var i = 0; i < jewelItems.length; i++) {
    var node = jewelItems[i];
    var dataGt = (node.attributes['data-gt'] != undefined) ? JSON.parse(node.attributes['data-gt'].nodeValue) : {};
    if (node.classList.contains('jewelItemNew') && dataGt.hasOwnProperty('notif_type')) {
      if (dataGt['notif_type'] == 'like' || dataGt['notif_type'] == 'feedback_reaction_generic') {
        alert('removing jewelItemNew class');
        node.classList.remove('jewelItemNew');
        alert('decrementing newNotifsCount');
        newNotifsCount--;
      }
    }
  }
  if (newNotifsCount != notifsCount) {
    if (newNotifsCount == 0) {
      alert('removing hasNew class');
      jewel.classList.remove('hasNew');
      alert('adding hidden_elem class to notificationsCountValue elem');
      notifsCountVal.classList.add('hidden_elem');
    } else if (newNotifsCount > 0) {
      alert('changing notifs count val');
      notifsCountNode.nodeValue = newNotifsCount;
    }
  }
}
}
)();