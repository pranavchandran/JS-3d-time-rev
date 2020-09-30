const numbers = [43,55,66,77,88,3]
const numbers2 = new Array(22,33,11,33,566)

const fruit = ['apple','banana','orange']
const mixed = ['ss',22,true,undefined,null,{a:1},new Date()]

console.log(mixed)
val = numbers.length;
console.log(val)

// check if is array
val = Array.isArray(numbers)
console.log(val)

val = Array.isArray('kkk')
console.log(val)

// get single value
val = numbers[3]
console.log(val)

// insert into array
numbers[2]=10
console.log(numbers)

// find index of the value
val = numbers.indexOf(10)
console.log(val)

// Mutating arrays
// add on to end
numbers.push(2000)
console.log(numbers)

// add on to front
numbers.unshift(1212)
console.log(numbers)

// take off from end
numbers.pop();
console.log(numbers)

c = numbers.pop();
console.log(c)

// take off from front
numbers.shift();
console.log(numbers)

// splice values
numbers.splice(1,1)
console.log(numbers)

// reverse
numbers.reverse()

// concatenate array
val = numbers.concat(numbers2);
console.log(val)

// sorting arrays
val = fruit.sort();
console.log(val)

val = numbers.sort();
console.log(val)

// compare function
val = numbers.sort((x,y)=>{
    x-y;
})
console.log(val)

// reverse sort
val = numbers.sort(function(x,y){
    return y-x;
});
console.log(val)

// find
function under50(num){
    return num < 50
}

val = numbers.find(under50);
console.log(val)





