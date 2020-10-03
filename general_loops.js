// for loop
// for(let i=0;i < 10; i++){
//     console.log(i);
// };

// for(let i=0;i < 10; i++){
//     // console.log(i);
//     if(i===2){
//         console.log('2 its my fav number')
//         continue;
//     }
//     console.log('number ' + i);
// };

// for(let i=0;i < 10; i++){
//     // console.log(i);
//     if(i===2){
//         console.log('2 its my fav number')
//         continue;
//     }
//     if (i===5){
//         console.log('stopping the loop')
//         break;
//     }
//     console.log('number ' + i);
// };

// while loop

// let i = 0;

// while(i<10){
//     console.log('number '+ i)
//     i++;
// }

// do while

// let i = 0;

// do{
//     console.log(i)
//     i++;
// }
// while(i<10)

// loop through array
// const cars = ['bmw','ford','chevy','benz'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

// much cleaner approach is forEach

// const cars = ['bmw','ford','chevy','benz'];
// cars.forEach(function(car){
//     console.log(car)
// })

// Map
// const users = [
//     {id:1,name:'john'},
//     {id:1,name:'sasi'},
//     {id:1,name:'soman'}

// ];
// const ids = users.map(function(user){
//     console.log(user.id);
// })
// console.log(ids)

// const cars = ['bmw','ford','chevy','benz'];
// cars.forEach(function(car,index,array){
//     console.log(`${index}: ${car}`)
//     console.log(array)
// })

const user = {
    first:'sasi',
    last:'soman',
    age:31
}

// for(let x in user){
//     console.log(x);
// }

for(let x in user){
    console.log(`${x}: ${user[x]}`);
}


