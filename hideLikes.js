function kewpiedoll99HideFBLikes() {
  function simulateMouseover(node) {
    var evt = new MouseEvent('mouseover');
    node.dispatchEvent(evt);
  }
  function hideLikes(notifsCount) {
    var reactRoot = document.getElementById('fbNotificationsFlyout').childNodes[2].firstChild.firstChild;
    var newNotifsCount = notifsCount;
    var jewelItems = reactRoot.firstChild.firstChild.firstChild.firstChild.firstChild.childNodes;
    for (var i = 0; i < jewelItems.length; i++) {
      var node = jewelItems[i];
      var dataGt = (node.attributes['data-gt'] != undefined) ? JSON.parse(node.attributes['data-gt'].nodeValue) : {};
      if (node.classList.contains('jewelItemNew') && dataGt.hasOwnProperty('notif_type')) {
        if (dataGt['notif_type'] == 'like' || dataGt['notif_type'] == 'feedback_reaction_generic') {
          node.classList.remove('jewelItemNew');
          newNotifsCount--;
        }
      }
    }
    if (newNotifsCount != notifsCount) {
      var notifsCountVal = document.getElementById('notificationsCountValue');
      var notifsCountNode = notifsCountVal.firstChild;
      var title = document.title;
      if (newNotifsCount == 0) {
        jewel.classList.remove('hasNew');
        notifsCountVal.classList.add('hidden_elem');
        title = 'Facebook';
      } else if (newNotifsCount > 0) {
        notifsCountNode.nodeValue = newNotifsCount;
        title = '(' + newNotifsCount + ') Facebook';
      }
    }
  }
  var notifsCount = Number(document.getElementById('notificationsCountValue').firstChild.nodeValue);
  if (notifsCount > 0) {
    var jewel = document.getElementById('fbNotificationsJewel');
    simulateMouseover(jewel);
    this.setTimeout(hideLikes, 2000, notifsCount);
  }
}();
