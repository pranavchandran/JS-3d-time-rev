let val;

const list = document.querySelector('ul.collection');
const listitem = document.querySelector('li.collection-item:first-child');

// val = list;
// val = listitem;
// get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;


// get children element nodes
// val = list.children;
// val = list.children[1];
// val = list.children[0].textContent = 'Hello';

// Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// val = list.firstChild;
// val =list.firstElementChild;

// val = list.lastChild;
// val =list.lastElementChild;

// count child elements
// val = list.childElementCount;

// get parent node
val = listitem.parentNode;
val = listitem.parentElement;

// parents of parent
val = listitem.parentElement.parentElement;

// get next sibling
val = listitem.nextSibling;
val = listitem.nextElementSibling;
val = listitem.nextElementSibling.nextElementSibling;

// prev sibiling
val = listitem.previousSibling;
val = listitem.previousElementSibling;




console.log(val);