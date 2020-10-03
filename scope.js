// Global scope
var a = 1;
let b = 2;
const c = 3;

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function scope: ', a, b, c);
// }
// test();

// blockscope ex
// if(true){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('IF Scope: ',a,b,c)
// }
// var is not safe 

for(var a=0; a <10; a++){
    console.log(`Loop ${a}`)
}

console.log('Gloal scope',a,b,c);
