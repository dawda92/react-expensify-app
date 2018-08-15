//
// Object Destructuring
//

// const person = {
//     name: 'Dawda',
//     age: 26,
//     location: {
//         city: 'Copenhagen',
//         temp: 92
//     }
// };

// // Destructuring - Best way, only one line of code
// const {name, age} = person;

// // Old way to do it
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const {temp: tempetaure, city} = person.location;
// if (city && tempetaure) {
//     console.log(`Its ${tempetaure} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(`${publisherName}`);


//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium] = item;

console.log(`A medium ${itemName} cost ${medium}`);

