// Task-1  
// Take four parameters. Multiply the four numbers and then return the result
// function Multiply(a,b,c,d){
//           const result=a*b*c*d;
//           return result;
// }
// const result=Multiply(2,2,2,2);
// console.log(result);

// Take a number if the number is odd multiply it by 2 and return the result.
//  If the number is even divide it by two and return the result.
// function num(result){
//          if(result%2===1){
//           const result1=result*2;
//           return result1;
//          }else{
//           const result1=result/2;
//           return result1;
//          }
// }
// const result=num(13);
// console.log(result);


// Task-3
// Write a function called make_avg() which will take an array of integers and
//  the size of that array and return the average of those values.
function make_avg(arr,size){
          let sum=0;
          for(let i=0;i<size;i++){
                    sum=sum+arr[i];
                    // console.log(arr[i])
          }
          const average=sum/size;
          return average;
}
const numbers=[10,20,30,40];
const result=make_avg(numbers,numbers.length);
console.log(result);






