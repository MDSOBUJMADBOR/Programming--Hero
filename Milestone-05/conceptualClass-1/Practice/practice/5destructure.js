
const  numbers = [10,20,30,40,1,2,3,45];
// let first =numbers[0]
// let second =numbers[2]
// let five=numbers[4];
// let [first,second,,,five,...rest] = numbers;

// console.log(first,second ,five);



let person ={
          name:'sobuj',
          roll:29,
          address:{
                    city:"Dhaka",
                    country:"Bangladesh",
                    street:{
                              roadNumber:'27 Ab 10',
                              test:'test',
                    },
          },
          isMaried:false,
          isMillioner:false,
          homeTown:null,
          hobby:['Reading','Travling','Watching movie'],

};
let {name:myName
,roll,
address:{
          city,
          street:{
                    roadNumber,
          }


},
isMaried,
homeTown,
...rest
} = person;

console.log(homeTown,myName,roll,city,isMaried,roadNumber);