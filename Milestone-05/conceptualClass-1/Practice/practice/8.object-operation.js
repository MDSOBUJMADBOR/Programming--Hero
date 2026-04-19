
let person = {
  name: "Utsho",
  age: 26,
  getInfo: () => {
    console.log(`My name is ${person.name}`);
  },
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    street: {
//       roadNumber: "27 Ab 10",
      test: "test",
    },
  },
};
let person2 = {
  name: "Rahim",
  age: 35,
  getInfo: () => {
    console.log(`My name is ${person.name}`);
  },
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    street: null,
  },
};

// console.log(person2['address']['street']);
// console.log(person.address?.street);

let keys = Object.keys(person);
let values =Object.values(person)
let entries=Object.entries(person)
// console.log(entries);



let car = {
  brand: "Toyota",
  color: "Black",
  model: "ABC",
};
// Object.seal(car);
Object.freeze(car);
delete car.brand;
car.color= 'white'
console.log(car);







