// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

// let val;
// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all[1];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0];
// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts)

// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute('src'))
// });

// console.log(val);

// document.getElementById()

// console.log(document.getElementById('task-title'));

// get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// document.getElementById('task-title').style.background = '#333'
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change Content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My taskss';

// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List<span>';

// we can make it as a variable and do it
// const taskTitle = document.getElementById('task-title')
// taskTitle.innerHTML='<span style="color:green">Task List<span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'green';
document.querySelector('ul li').style.color = 'green';

document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(3)').style.color = 'pink';
document.querySelector('li:nth-child(4)').textContent = 'Pranav C';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';












