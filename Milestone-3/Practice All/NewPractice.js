
// let salary=25000;
// let height=6;
// let weight=59;

// if(salary>20000 || 5> height){
//           console.log('su---patro');
// }
// else{
//           console.log('bad');
// }

// let age=200;
// let price=500;

// if(age<=12){
//           console.log('You can eat for free');
// }
// else if(age>=60){
//           //50% discount
//           let discount=price*50/100;
//           let payAmount=price - discount;
//           console.log(payAmount);
// }
// else if(age>=50){
//          // 40%discount
//          let discount=price*40/100;
//          let payAmount=price-discount;
//          console.log(payAmount);
// }

// else{
//           console.log(price);
// }

// let result=3.50;
// if(result==5){
//           console.log('Good Boy');
// }
// else if(result >4){
//           console.log('Good');
// }
// else if(result>3){
//           console.log('Valo');
// }
// else if(result>2){
//           console.log('min valo');
// }
// else{
//           console.log('Fail');
// }

// let number=5;
// if(number>0){
//           console.log('positive');
// }
// else if(number <0){
//         console.log('Nagetive');  
// }
// else{
//           console.log('Zoro');
// }

// let result = number >0?'positive':'Negative';
// console.log(result);

// let mark=65;

// let Result=mark>80?'A+':mark>70?'A':mark>60?'B':mark>50?'C':'fail';
// console.log(Result);

// number=-2;
// let result=number>0?'positive':'Nagative';
// console.log(result);

// for(let i=1;i<=20;i++){
//           if(i%2===1){
//                     console.log(i);
//           }


// }


// let i=0;
// while(i<=20){
//        if(i%2===1){
//           console.log(i);
//        }
//           i++;
// }
// console.log(i);

// for(let x=1;x<=20;x++){
//           if(x==10){
//                     continue;  
//           }
//           console.log(x);
// }

// let age='25';
// let age2=Number(age);
// console.log(typeof age2);

// let age2=parseInt(age);
// console.log(typeof age2);

// let Gpa='3.50';
// let gpa2=parseFloat(Gpa);
// console.log( gpa2);

// let floatSum=0.1+0.2;
// console.log(floatSum.toFixed(4));
// let num=40;
// let nu=String(num);
// console.log(typeof nu);

// let num1=5;
// let num2=2;

// console.log('Addition', num1 + num2);
// console.log('Subtraction',num1 - num2);
// console.log('multiplication',num1 * num2);
// console.log('Exponentiation',num1 ** num2);
// console.log('division',num1 / num2);
// console.log('Modulus',num1 % num2);

// let physics=50;
// let math='50';
// console.log(physics == math);
// console.log(physics === math);

// let biology=65;
// let ict=55;
// console.log(biology > ict);
// console.log(biology >= ict);
// console.log(biology < ict);
// console.log(biology != ict);
// console.log(biology !== ict);

// let isMatured=true;
// let isInterested=true;
// let isRich=false;

// let isMarried=isMatured && isInterested && isRich;
// console.log(isMarried);

// let number=[1,5,8,6,9,12,51,46,85];
// number[0]=999;
// console.log(number);

// let friend=['abul','babul','cabul','dabul','sobuj'];
// friend[5]='sathi'
// friend[4]='jothi'
// console.log(friend);

// let numbers=[12,87,98,45];
// numbers.push(50,51);
// numbers.pop();
// console.log(numbers);


// let friend=['abul','babul','cabul','dabul','sobuj'];

// friend[4]='sathi';
// console.log(friend.includes('sobuj'))
// console.log(friend.indexOf('sobuj'));
// console.log(friend)


// let friend='sobuj';
// let num=34;
// let food=['sobuj is a good boy'];
// console.log(Array.isArray(friend));
// console.log(Array.isArray(num));
// console.log(Array.isArray(food));

// let country1=['Bangladesh','Napal'];
// let country2=['Italy','japan','Maldip'];
// let country3=['India','shariatpur'];
// let county=country1.concat(country2).concat(country3);
// console.log(county);


// let arr=[1,5,6];
// arr.splice(1,0,2,3,4);
// console.log(arr);

// let str=['sobuj','sathi','jothi','halima'];
// str.splice(3,0,'sorna');
// str.splice(5,0,'ikra','morsalin');
// console.log(str);


// let str=['sobuj','sathi','jothi','halima'];
// let Result=str.slice(1,2)
// console.log(Result);

// let arr=['I','love','javascript'];
// let result=arr.join('');
// // console.log(result);
// let str='I am sobuj madbor';
// let arr=str.includes('bad');
// console.log(arr);
let numbers=[12,5,4,54,62,];
for(let num of numbers){
          console.log(num);
}



