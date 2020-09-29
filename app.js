let val;

// number to string
val = String(5);
val = String(5+6);
Val = String(true)
val = String(new Date());
val = String([1,2,3,4]);

// strings to numbers
val = '5';
val = Number('5');

val = Number([1,2,3])
val = parseInt('100.30')
val = parseFloat('100.30')
// val = (5).toString();
// val = (true).toString();

console.log(val)
console.log(typeof val)
console.log(val.toFixed(2))
// console.log(val.length)