
var notifsCount = Number(document.getElementById('notificationsCountValue').childNodes[0].nodeValue);
var newNotifsCount = notifsCount;

var newJewelItems = document.getElementsByClassName('jewelItemNew');
for (var i = 0; i < newJewelItems.length; i++) {
  var node = newJewelItems[i];
  var outerSpanChild = getOuterSpanChild(node);
  var innerSpans = outerSpanChild.childNodes;
  for (var j = 0; j < innerSpans.length; j++) {
    if (!innerSpans[j].classList.contains('fwb') &&
        innerSpans[j].innerText.indexOf('like') > -1)
      // decrement jewel count
      newNotifsCount--;
  }
}

if (newNotifsCount != notifsCount) {
  // if it's zero, make notifs count disappear
  document.getElementsByClassName('jewelCount')[2].classList.add('hidden_elem');

  // if it's > 0, replace #
  document.getElementById('notificationsCountValue').childNodes[0].nodeValue = newNotifsCount;
}

function getOuterSpanChild(node) {
  if (!node.hasChildNodes()) return undefined;
  if (node instanceof HTMLSpanElement) return node;

  if (node.childNodes.length > 1 && node.classList.contains('clearfix')) {
    // if class is 'clearfix' use childNodes[1]
    return getOuterSpanChild(node.childNodes[1]);
  } else {
    // includes this case: if childNodes.contains(span type)
    // includes this case: if class is 'anchorContainer' use childNodes[0]
    return getOuterSpanChild(node.childNodes[0]);  
  }
}


// ('li.jewelItemNew').child('div/div/a/div/div[1]/div/div/div[1]/div/div/span/span[foreach, if find 'like']
