
const numbers = [1,2,3,4,5];
// let sum =0;
// for(let num of numbers){
//           sum = sum + num;
// }
// console.log(sum);


const total = numbers.reduce((acc , num) => acc + num ,0);
console.log(total);

