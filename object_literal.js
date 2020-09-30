const Person = {
    firstName: 'pranav',
    lastName: 'Chandran',
    age: 30,
    email: 'oranav@aol.com',
    hobbies: ['music','programming'],
    address: {
        city: 'Miami',
        state: 'Fl'
    },
    getBirthYear: function(){
        return 2017 - this.age;
    }
}

let val;
val = Person;
val = Person.firstName;
val = Person.hobbies;
val = Person.hobbies[1];
val = Person.address.city;
val = Person.getBirthYear();
// console.log(val)

const People = [
{
    name: 'pranav',
    age:  '33'
},
{
    name: 'Neethu',
    age:  '26'
},
{
    name: 'Nakshathra',
    age:  '14'
},
]

for(let i=0;i<People.length;i++){
    console.log(People[i])
}
for(let i=0;i<People.length;i++){
    console.log(People[i].name)
}

