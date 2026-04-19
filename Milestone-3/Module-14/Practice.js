
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// const Burger = 501;
// if(Burger >= 500){
//           console.log('free Coke : 30tk');
// }
// else{
//           console.log('500tk');
// }



// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

// */

// const weight = 65;
// const height = 1.75;
// const BMI = weight / (height*height);
// console.log(BMI);

// if(BMI < 18.5){
//           console.log('you are underweight');
// }
// else {
//           if(BMI >=18.5 && BMI <=24.9){
//                     console.log('you are normal.');
//           }
//           else{
//                     if(BMI >=25 && BMI <= 29.9){
//                               console.log('you are overweight.')
//                     }
//                     else{
//                               console.log('you are obese')
//                     }
//           }
// }





// Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

// let marks=75;
// if(marks >= 90 && marks <=100){
//           console.log('A')
// }
// else if(marks >=80 && marks <=89){
//           console.log('B');
// }
// else if(marks >=70 && marks <=79){
//           console.log('C')
// }
// else if(marks >=60 && marks <=69){
//           console.log('D')
// }
// else{
//           console.log('F')
// }





// if you get more then 80 then inside your friend score. 
//     If your friend get more than 80. then go for a lunch. 
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

// Note: 
// use nested if-else-if-else

// let myScore = 79;
// let friendScore = 45;
// if(myScore > 80){
//           if(friendScore >= 80){
//                     console.log('Go for a lunch');
//           }
//           else{
//                     if(friendScore >=60  && friendScore<80){
//                     console.log('good luch next time');
//           }
//                     else{
//                               if(friendScore>40 && friendScore <60){
//                                         console.log('keep your friend message unseen');
//                               }else{
                                        
//                                         console.log('Block your friends')
                                     
//                               }
//                     }

//           }
// }
// else{
//           console.log('my go to home and sleep and act sad')
// }


// w declare a variable called result. 
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else. 

// also, write it using ternary operator.

// let num1=11;
// let num2=10;
// let result;
// if(num1>num2){
//           result=num1*2;
// }
// else{
//           result=num1+num2;
// }
// console.log(result);

// num1>num2?console.log(num1*2):console.log(num1+num2);




// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

// let ticket =800;
// let age=62;

// if(age < 10){
//           console.log('Free');
// }
// else if(age >=60){
//          let discount=ticket * 15/100;
//         let  ticketPay = ticket - discount;
//           console.log(ticketPay);

// }

// else{
//           console.log(ticket);
// }


// let age =70;
// let isStudent=true;
// let ticket = 800;
// if(age<10){
//           ticket=0;
// }
// else if(isStudent){
//         ticket=ticket-(ticket*50/100)
         
          
// }
// else if(age >=60){
//            ticket=ticket-(ticket*15/100)
          
          
// }
// else{
//           ticket=800;
// }
// console.log('Ticket :',ticket,'TK')


// let age = 9;
// let isStudent = true;
// let ticketFare = 800;

// if (age < 10) {
//     ticketFare = 0;
// } 
// else if (isStudent) {
//     ticketFare = ticketFare - (ticketFare * 50) / 100;
// } 
// else if (age >= 60) {
//     ticketFare = ticketFare - (ticketFare * 15) / 100;
// } 
// else {
//     ticketFare = 800;
// }

// console.log("Ticket Fare:", ticketFare , "tk");