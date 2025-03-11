const goodList = document.querySelector(".harry-potter-characters");
const badList = document.querySelector(".evil-harry-potter-characters");

function removeLastNode(list) {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

function returnFirstNode(list) {
  if (list.firstElementChild) {
    return list.firstElementChild.innerText;
  } else {
    return "No more characters :(";
  }
}

function returnLastNode(list) {
  if (list.lastElementChild) {
    return list.lastElementChild.innerText;
  } else {
    return "No more characters :(";
  }
}

console.log(returnFirstNode(goodList));
// console.log(returnLastNode(badList));
// console.log(removeLastNode(goodList));

//2
//okay i did that by doing document.getElementsByTagName("*") and it pulled up over 7,000 tags
