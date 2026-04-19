
// console.log(add(10,20));
//function declaration
function add (num1, num2) {
          return num1 + num2;
}


//function expression
// console.log(add2(30,40));
const add2 = function(num1,num2) {
          return num1 + num2;
}
// console.log(add2(30,40));


//arrow function
const add3 = (num1 , num2) => num1+num2;
console.log(add3(50,60));

const multiply = (a,b) => a*b;

const temTimes = (x) => x*10;
const temTimes2 = x => x*10;

const getPi = () => 3.1416;

const addAll = ( a, b, c, d, e, f) => a + b + c + d + e + f;
const isEven = num => num % 2 === 0;


const doMath = (x,y) => {
          const sum = x+y;
          const diff=x-y;
          const result = sum * diff;
          return result;
}


const divide = (p ,q) => p / q;


document.getElementById('btn').addEventListener('click', () => {

});

document.getElementById('btn').addEventListener('click', (event) => {

});