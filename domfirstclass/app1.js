// dom selectors for multiple elements

// const items = document.getElementsByClassName('collection-item')
// console.log(items)
// items[0].style.color = 'red';
// items[3].textContent = 'Hello'

// const listItems = document.querySelector('ul').getElementsByClassName
// ('collection-item');
// console.log(listItems)

// 
// convert html collection into array
// lis = Array.from(lis);
// lis.reverse();
// console.log(lis);

// lis.forEach(function(li){
//     console.log(li.className)
// })

// lis.forEach(function(li, index){
//     console.log(li.className)
//     li.textContent = `${index}: Hello`
// })

// document.querySelectorAll
const items = document.querySelectorAll('li.collection-item');
// console.log(items);

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
    item.style.color = 'gold';
})
const liodd = document.querySelectorAll('li:nth-child(odd)')
const lieven = document.querySelectorAll('li:nth-child(even)')

liodd.forEach(function(li){
    li.style.background = 'red';
});

for(let i = 0; i < lieven.length; i++){
    lieven[i].style.background = 'green';
}

console.log(items)

