
const numbers = [1,2,3,4,5];

// const doubled = [];
// for(const num of numbers){
//           doubled.push(num *2);
// }

// const doubleIt = num => num*2;
// const doubled = numbers.map(doubleIt);
const doubled = numbers.map(num => num*2);
const squared = numbers.map(num => num*num);


console.log(doubled);
console.log(squared);


const friends = ['zaved','naved','khaled','sajed'];
const firstLatter = friends.map(frd => frd[0]);
console.log(firstLatter);



const products = [
          { name:'laptop',price:4500},
          { name:'phone',price:15000},
          { name:'tablet',price:25000},
]
const price = products.map(pd => pd.price);
console.log(price);
 
const names = products.map((pd,index,productsArray) => {
          const upperCaseName = pd.name.toUpperCase();
          console.log(index,upperCaseName,productsArray);
          return upperCaseName;
          
})

 console.log(names);



 const result = products.forEach(pd => console.log(pd.name));
 console.log(result);  



 
