// part of es6

const name = 'Pranav'
const age = 33
const job = 'Software Engineer'
const city = 'Miami'
let html;

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + 
// ' </li><li>Job: '+ job + '</li><li>City: '+ city +'</li></ul>'

// document.body.innerHTML = html;

// html = '<ul>' +
//         '<li>Name:' + name + '</li>' +
//         '<li>Name:' + name + '</li>' +
//         '<li>Name:' + name + '</li>' +
//         '<li>Name:' + name + '</li>' + 
//         '</ul>'

// document.body.innerHTML = html;

// with template string es6
function hello(){
    return 'hello';
}

html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>sum: ${7+2}</li>
    <li>Function: ${hello()}</li>
    <li>${age>30 ? 'Over 30' : 'under 30'}</li>


</ul>
`



document.body.innerHTML = html;
