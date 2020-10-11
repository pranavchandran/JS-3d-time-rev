
// create element
// const li = document.createElement('li');

// add class
// li.className = 'collection-item'

// Add id
// li.id = 'new-item'

// Add attribute
// li.setAttribute('title', 'New Item')

// create text node and append
// li.appendChild(document.createTextNode('Pranav Chandran'))

// create new element
// const link = document.createElement('a')

// add class
// link.className = 'delete-item secondary-content';

// add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>'

// append link to li
// li.appendChild(link)


// Append li as child to ui
// document.querySelector('ul.collection').appendChild(li);

// console.log(li)

// Replacement Element

// create element
const newHeading = document.createElement('h2')

// Add id
newHeading.id = 'task-title'

// add textnode
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');

// parent
const cardAction = document.querySelector('.card-action')

// replace
cardAction.replaceChild(newHeading, oldHeading)

// remove element
// const lis = document.querySelectorAll('li')
// const list = document.querySelector('ul');

// remove list item
// lis[0].remove()

// remove child element
// list.removeChild(lis[3])

// classes and attr
const firstLi = document.querySelector('li:nth-child(2)')
const link = firstLi.children[0]

let val;
// classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.add('remove');

val = link;

// attributes
val = link.getAttribute('href')
val = link.setAttribute('href', 'http://google.com')
val = link.hasAttribute('href')
val = link.setAttribute('title','Google')
link.removeAttribute('title')
val = link;    


// console.log(firstLi.children[0]);
console.log(val)