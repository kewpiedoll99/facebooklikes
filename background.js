

function isJewelButtonBadged() {
  var countNode = document.getElementById('notificationsCountValue');
  return countNode != null && countNode.nodeValue > 0;
}

alert(isJewelButtonBadged());
