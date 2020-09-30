let val;
const today = new Date()
let birthday = new Date('26-3-1986')
birthday = new Date('March 26 1986')
birthday = new Date('26/3/1986');

val = today;
val = today.toString();
val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2)
birthday.setDate(12)
birthday.setFullYear(1986)
birthday.setHours(3)



console.log(birthday)
