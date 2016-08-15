javascript:(
function() {
  function simulateMouseover(node) {
    var evt = new MouseEvent('mouseover')
    node.dispatchEvent(evt);
  }
  function hideLikes(notifsCount) {
    var reactRoot = document.getElementById('fbNotificationsFlyout').childNodes[2].firstChild.firstChild;
    console.log(reactRoot);
    var newNotifsCount = notifsCount;
    var jewelItems = reactRoot.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes;
    for (var i = 0; i < jewelItems.length; i++) {
      var node = jewelItems[i];
      var dataGt = (node.attributes['data-gt'] != undefined) ? JSON.parse(node.attributes['data-gt'].nodeValue) : {};
      if (node.classList.contains('jewelItemNew') && dataGt.hasOwnProperty('notif_type')) {
        if (dataGt['notif_type'] == 'like' || dataGt['notif_type'] == 'feedback_reaction_generic') {
          console.log('removing jewelItemNew class');
          node.classList.remove('jewelItemNew');
          console.log('decrementing newNotifsCount');
          newNotifsCount--;
        }
      }
    }
    if (newNotifsCount != notifsCount) {
      var notifsCountVal = document.getElementById('notificationsCountValue');
      var notifsCountNode = notifsCountVal.firstChild;
      if (newNotifsCount == 0) {
        console.log('removing hasNew class');
        jewel.classList.remove('hasNew');
        console.log('adding hidden_elem class to notificationsCountValue elem');
        notifsCountVal.classList.add('hidden_elem');
      } else if (newNotifsCount > 0) {
        console.log('changing notifs count val');
        notifsCountNode.nodeValue = newNotifsCount;
      }
    }
  }
  var notifsCount = Number(document.getElementById('notificationsCountValue').firstChild.nodeValue);
  if (notifsCount > 0) {
    var jewel = document.getElementById('fbNotificationsJewel');
    simulateMouseover(jewel);
    this.setTimeout(hideLikes, 2000, notifsCount);
  }
}
)();