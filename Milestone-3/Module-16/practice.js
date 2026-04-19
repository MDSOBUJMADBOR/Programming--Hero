// Access the `golden rod` color value in output.
// ```
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// const colors = {
//           red:'#ff0000',
//           green:'#00ff00',
//           blue:'#0000ff',
//           "golden rod":'#daa520'
// }
// console.log(colors["golden rod"]);





// For this object below add a property named `passenger capacity` with value 5
// ```js
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// const car = {
//           make:'Toyata',
//           model:'Corolla',
//           year:2020,
//           'passenger capacity':5
// }

// console.log(car);


// Display the physics marks as output.
// ```js
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics);




// Count the `number of properties`.

// **Input:**
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// const propertiesCount =Object.keys(student).length;
// console.log(propertiesCount);


// Loop through an object and print the key-value pairs with their `types`

// **Input:**
// <br>

// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true

// };

// for(let key in myObject){
    
//           let value =myObject[key];
//           console.log(`${key}: ${value} | (type: ${typeof value})`);
// }



let country ='Bangladesh';
let count = country.toLocaleLowerCase().split('a').length -1;
console.log(count);


