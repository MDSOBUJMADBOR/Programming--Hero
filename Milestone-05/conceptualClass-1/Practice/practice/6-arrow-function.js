
// function multiply(a,b) {
//           return a*b;
// }
// const result = multiply(2,3);
// console.log('Multiplication ->',result);

// const result1 =(a,b) => {
//          return a*b};
// console.log(result1(2,2));


// const sum = (a,b) =>a +b;
// console.log(sum(2,2));

// const sqrt = (a) => a *a;
// console.log(sqrt(5));


const myFuncArrow = () => {
          console.log(this);
}

// let person = {
//           name:'sobuj',
//           age:26,
//           showMyInfo: function() {
//                     console.log(this.name);
//           }
// }
// person.showMyInfo();

let person = {
          name:'sobuj',
          age:26,
          showMyName: () => {
                    console.log(this.name);
          }
}
person.showMyName();