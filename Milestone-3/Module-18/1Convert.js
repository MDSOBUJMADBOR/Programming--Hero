// 12 inch 1 feet
function inchToFeet(inch) {
          const feet= inch/12;
          return feet;
}
let shuvoHeight=inchToFeet(75);
// console.log(shuvoHeight);



function inchToFeet2(inch){
          const feetFraction=inch/12;
          const feetNumber=parseInt(feetFraction);
          const inchRemaining=inch%12;
          const result= feetNumber + ' ft '+inchRemaining + ' inch ';
          return result;
}
// const shuvoHeight=inchToFeet2(75);
//  console.log(shuvoHeight);



//১মাইল কত কিলোমিটার;
function mileToKilometer (mile){
          const kilo=mile*1.60934;
          return kilo;
}
let result=mileToKilometer(5);
// console.log(result);




function kiloMeterToMiles(kilo){
          const mile=kilo*0.621371;
          return mile;
}
const kilo=kiloMeterToMiles(5);
console.log(kilo);