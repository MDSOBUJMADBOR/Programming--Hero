
const persons = ['rakib','nokib','sakib','Akib','Dakib','anis'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

//sort --->
// const numbers =[4,7,2,8,3,6];
/**
 * Ascending  --->smaller to larger :[2,3,4,6,7,8]
 * Descending --->larger to smaller: [8,7,6,4,3,2]
 */

const numbers =[4,7,12,8,43,6,1];
// const number_asc = numbers.sort()//not working
const number_asc = [...numbers].sort(function (a, b) { return a - b})
const number_dsc = [...numbers].sort(function (a, b) { return b - a})

console.log(number_asc);
console.log(number_dsc);
