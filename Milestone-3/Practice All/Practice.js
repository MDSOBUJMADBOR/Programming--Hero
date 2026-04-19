// let Arr =['sobuj','sathi','jothi','sorna'];
// console.log(Arr.slice(1,3));

// let number=[10,20,30,40,50,60];
// console.log(number.slice(3,6))


// const address='andorkilla';
// const part=address.slice(2,5);
// console.log(part);

// let str='Bangladesh';
// console.log(str.slice(-3));
// console.log(str.slice(-5,-2));


// const str ='I, love ,javaScript';
// console.log(str.split(' '));
// console.log(str.split(''));
// console.log(str.split(','));
// let str ='2026-01-30';
// console.log(str.split('-'));


// let arr=['I','love','javaScript'];
// let str =' ';
// for(let i=0;i<arr.length;i++){
//           str+=arr[i];
// }
// console.log(str);




// let str='';
// for(let num of arr){
          //           str=str+num;
          // }
          // console.log(str);
          
          
          // let str='';
          // for(i=0;i<arr.length;i++){
                    //           str=str+arr[i];
                    // }
//                     // console.log(str);
                    
// let arr=['H','E','L','L','O'];
// let str='';
// let i=0;
// while(i<arr.length){
//           str=str+arr[i];
//           i++;
// }
// console.log(str);




// let str=['HELLO','sobuj'];
// for(const num of str){
//           console.log(num);
// }

// let str='HELLO';
// let arr=[];
// for(let i=0;i<str.length;i++){
//           arr.push(str[i]);
// }
// console.log(arr);
// let arr=[];
// let i=0;
// while(i<str.length){
//           arr.push(str[i]);
//           i++;
// }
// console.log(arr);


// for(let num=0;num<5;num++){
//           console.log(num);
// }

// const numbers = [12,52,42,15,63,75,12];
// for(const num of numbers){
//           console.log(num);
// }



// for(i=0;i<=10;i++){
//           console.log(i);
// }
// for(i=10;i>=0;i--){
//           console.log(i);
// }

// for(let i=0;i<20;i++){
//           if(i%2 !== 0){
//           console.log(i);
//           }
// }
// sum=0;
// for(let i=1;i<=30;i++){
//           if(i%3===0 && i%5===0){
//           console.log(i);
//           sum=sum+i;
//           }
// }
// console.log(sum);

// let sum=0;
// for(i=0;i<=20;i=i+2){
//           sum+=i;
//           console.log(i);

// }
// console.log('sum',sum);

// let sum=0;
// for(i=1;i<=20;i++){
//           if(i%3===0){
//           sum=sum+i;

//           console.log(i);
//           }
// }
// console.log('All sum : ',sum);

// let i=1;
// while(i<20){
// console.log(i);
// i=i+2;

// }

// let i=0;
// while(i<20){
//           if(i%3==0){
//                     console.log(i);
                  
//           }
//             i++;
// }

// i=1;
// while(i<20){
//           console.log(i);
//           i=i+2;

// }

// for(i=0;i<20;i++){
//           if(i>10){
//                  break
                    
//           }
// console.log(i);
       
// }


// const subject='Math';
// const book ='math';
// if(subject.toLowerCase() == book.toLowerCase()){
//           console.log('true');
// }
// else{
//           console.log('false');
// }


// const drink='water ';
// const drink1 =' water  ';
// if(drink.trim() === drink1.trim()){
//           console.log('true');
// }
// else{
//           console.log('false');
// }

// const sentence='I am learning web dev';
// let reverse='';
// for(const letter of sentence){
//           reverse=letter+reverse;

// }
// console.log(reverse);

// console.log(sentence.split('').reverse().join(''))
// console.log(sentence.split(' ').reverse().join(' '))

// const bottle= {
//           brand:'apple',
//           price:45,
//           color:'white',
//           isClean:false
// }
// console.log(bottle);

// const subject = {
//           name:'biology',
//           teacher:'rasheda mam',
//           examDate:'30 Feb',
//           chapters:['first','second','third'],
//           exam:{
//                     name:'Final Exam',
//                     marks:100
//           }
// }
// subject.chapters[2]='sobuj'
// subject.exam.marks=50;
// console.log(subject.chapters[0]);
// console.log(subject);


// const person={
//           name:'sodor uddin',
//           age:25,
//           profession:'developer',
//           salary:25000,
//           married:true,
//           'fav places':['bandorban','saintmartin','kuakata'],
//           class:{
//                     a:'ten',
//                     b:'nine',
//                     c:{
//                               bari:'shariatpur',
//                               thana:'sadar'
//                     }
//           }
// }
// let key=Object.values(person.class.c);
// console.log(key);


// const college = {
//           name:'vnc',
//           class:['10','11','12'],
//           events:['science fair','bijoy dibos','21 Feb'],
//           unique:{
//                     color:'blue',
//                     resule:{
//                               gpa:5,
//                               merit:'top'
//                     }
//           }
// }


// college.unique.resule.merit='top top merit'
// college.events[2]='16 Dec';
// delete college.unique.color
// console.log(college);
// console.log(college.events[2])


// const mobile = {
//           brand:'samsung',
//           price:25000,
//           color:'Black',
//           camera:'12mp',
//           isNew:true
// }

// for(let prop in mobile){
//           console.log(mobile[prop]);
// }

// const pen ={brand:'econe',price:10}
// console.log(pen);


// let str ='hello';
// let st=str[0]+str.slice(1,'H')
// console.log(st)

// console.log('hello'[0].toUpperCase()+'hello'.slice(1));




// let str='hello';
// let newStr='H'+str.slice(1);
// console.log(newStr);

// let str='hello';
// let newStr=str.slice(0,2)+'Z'+str.slice(3);
// console.log(newStr);

// let str='javascript';
// let newStr=str.slice(0,4)+'SCRIP';
// console.log(newStr);








// let str='hello';
// // console.log(str.includes('s'));
// let count=0;
// for(let i=0;i < str.length;i++){
//           if(str[i].toLowerCase() === 'l'){
//                     count++;
//           }
// }
// console.log(count);


// let str='hello';
// let count=str.toLowerCase().split('e').length-1;
// console.log(count);





// if you get more then 80 then inside your friend score. 
//  If your friend get more than 80. then go for a lunch. 
// if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
// if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
// if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad


// function doubleIt(number){
//           const doubled=number*2;
//           console.log(doubled);
// }
// doubleIt(2);
// doubleIt(20);


// function difference(num1,num2){
//           const diff=num1-num2;
//           console.log('different is:',diff);
// }
// const fatherAge=40;
// const myAge=10;
// difference(fatherAge,myAge);


// function sumOfNumber(numbers){
//         let sum=0;
//           for(const number of numbers){
//                     console.log(number);
//                     sum=sum+number;
//           }
//         return sum;

// }
// const nums=[54,62,12,6];
// const sum=sumOfNumber(nums);
// console.log('Sum of Number is:',sum);



// function Allsum(numbers){
//           let sum=0;
//           for(const number of numbers){
//           console.log(number);
//            sum=sum+number;
//           }
//           return sum;
// }
// const sums=[1,2,3,4,5,6,7,8,9];
// const sum=Allsum(sums);
// console.log('All Number Sum:',sum);


// function isEven(number){
//          if(number%2===0){
//           return true;
//          }else{
//           return false;
//          }
// }
// const num=isEven(119);
// console.log(num);


// function oddNumber(number){
//          if(number%2 ===1){
//           return 'Number Odd';
//          }else{
//           return 'Number even';
//          }
// }
// const num=oddNumber(112);
// console.log(num);



// function evenNumberSum(numbers){
//           let evens=[];
//           for(const number of numbers){
//                     if(number%2===0){
//                     evens.push(number);
//                     }

//           }
// return evens;

// }
// const numbers=[5,6,10,45,50,60,65,72];
// const evenNumber=evenNumberSum(numbers);
// console.log(evenNumber);


// function  evenNumberSum(numbers){
//           let sum=0;
//          for(const number of numbers){
//           if(number%2===0){
//           console.log(number);
//           sum=sum+number;
//           }
//          }
//          return sum;
// }
// const num=[2,5,6,8,45,72,15,40,20,10,];
// const sum=evenNumberSum(num);
// console.log('sum:',sum);


// function number(num){
//           if(num%2!==0){
//           const multiply=num*2;
//           return multiply;
//           }else{
//           const divite=num/2;
//           return divite;
//           }
// }
// const resule=number(6);
// console.log(resule);


// function evenSizedString(str){
//           const size=str.length;
//           console.log(str,size);
//           if(size%2===0){
//           console.log('even size');
//           return true;
//           }else{
//           console.log('odd size');
//           return false;
//           }
       
// }
// const num='Dhaka';
// const str=evenSizedString(num);



// function size(str){
//           const num=str.length;
//           console.log(str);

//           if(num%2===0){
//           console.log('Even Number:',num)
//           }else{
//                     console.log('Odd Number:',num)
//           }
// }
// const str='Bangladesh is capital';
// const number=size(str);


// function doubleOrTriple(number,doDouble){
// if(doDouble===true){
//           let resule=number*2;
//           return resule;
// }
// else{
//           let resule=number*3;
//           return resule;
// }
// }

// const call=doubleOrTriple(5,false);
// const call1=doubleOrTriple(5,true);
// console.log(call,call1);

// function inchToFeet(inch){
//           const feetFraction=inch/12;
//           const feetNumber=parseInt(feetFraction);
//           const inchRemaining=inch%12;
//           const resule=feetNumber + ' ft ' + inchRemaining + ' inch ';
//           return resule;
// }
// const feet=inchToFeet(75);
// console.log(feet);


// function mileToKilometer(mile){
//           const kilo=mile*1.60934;
//           return kilo;
// }
// let resule=mileToKilometer(2);
// console.log(resule);



// function kilometerToMile(kilometer){
//           const mile =kilometer*0.621371192;
//           return mile;
// }
// const mile=kilometerToMile(3);
// console.log(mile);


// function fahrenheitToCelsius(fahrenheit){
//     const celsius = (fahrenheit - 32) * 5 / 9;
//     return celsius;
// }

// let result = fahrenheitToCelsius(5);
// console.log(result);


// function celsiusTofaherenheit(celsius){
//           const fahrenheit=(celsius*9/5)+32;
//           return fahrenheit;
// }
// let resule=celsiusTofaherenheit(5);
// console.log(resule);


// function isLepiYear(year){
//  if(year%100 !==0 && year%4===0){
//           return true;
//  }
//  else if(year%400===0){
//           return true;
//  }
//  else{
//           return false;
//  }
// }
// const isLIpi=isLepiYear(2022);
// console.log(isLIpi);


// function oddNumberAverage(numbers){
//           odds=[];
//           for(const number of numbers){
                    
//                     if(number%2===1){
//                     odds.push(number);
//                     }
//           }
//           // console.log(odds);
//           sum=0;
//           for(const number of odds){
//           sum=sum+number;
//           }
//           const count=odds.length;
//           console.log(sum,count);
//           const ave=sum/count;
//           return ave;
          
// }

// const numbers=[42,13,58,65,81,96,7,105];
// const arverage=oddNumberAverage(numbers);
// console.log('average of the odd numbers is:',arverage);




// function evenNumberAvg(numbers){
//           evenNumber=[];
//                     for(const number of numbers){
//                     if(number%2===0){
//                     evenNumber.push(number);
//                     }
//           }
         
//           // console.log(evenNumber)
//           sum=0;
//           for(const number of evenNumber){
//                     sum=sum+number;
//           }
          
//           const count=evenNumber.length;
//           console.log(sum,count);
//           let avg=sum/count;
//           return avg;
          
          
// }
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const avg=evenNumberAvg(numbers);
// console.log('Even Number Average is:',avg)


// function onNumber(number){
//           const unique=[];
//           for(const i of number){
//                     if(unique.includes(i)===false){
//                               unique.push(i);
//                     }
//           }
//           return unique;
// }

// const number=[2,5,3,4,2,5,6,1,3,8,9,7,6,];
// const numbers=onNumber(number);
// console.log('One item number:',numbers);


// function chekeName(name){
//           const cheke=[];
//           for(const i of name){
//                     if(cheke.includes(i)===false){
//                               cheke.push(i);
//                     }
//           }
//           return cheke;
// }
// const nam=['sobuj','sathi','sobuj','jothi','sathi','sorna','halima','sorna'];
// const name=chekeName(nam)
// console.log('Every Name One Time:',name);

// const max=Math.max(1,2,3,4,5,6,7,8,9,0,19,25);
// console.log(max);


// const max=Math.max(1,2,5,8,61,45,82,);
// console.log(max);

// const min=Math.min(2,8,6,4,3,1,5,8,-45);
// console.log(min);


// console.log(Math.PI);

// console.log(Math.abs(50-10));

// console.log(Math.round(2.5999));

// console.log(Math.floor(2.1999))
// console.log(Math.ceil(2.1666))

// console.log(Math.random());

// console.log(Math.random(2)*10);
// const rand=Math.round(Math.random()*10);
// console.log(rand);

// const today=new Date();
// console.log(today);

// const date=new Date('2026-10-19');
// console.log(date.getDate());

// const spe=new Date(2029,0,25);
// console.log(spe);
// spe.setMonth(10);
// console.log(spe);
// console.log(spe.toLocaleString('en-GB'));


// let a=5;
// let b=7;
// console.log(a,b);
// let sobuj=a;
// a=b;
// b=sobuj;
// console.log(a,b);


// let x=5;
// let y=7;
// console.log(x,y);
// [x,y]=[y,x];
// console.log(x,y);

// const sobuj=91;
// const sathi=90;
// if(sobuj>sathi){
//           console.log('sobuj is a good boy');
// }
// else{
//           console.log('sathi is a good girl');
// }

// function bigNumber(num1,num2){
//           if(num1>num2){
//                     return num1;
//           }else{
//                     return num2;
//           }
// }
// const big=bigNumber(10,20)
// console.log(big);


// const sobuj=60;
// const sathi=61;
// const jothi=45;
// if(sobuj>sathi&&sobuj>jothi){
//           console.log('sobuj')
// }
// else if(sathi>sobuj&& sathi>jothi){
//           console.log('sathi')
// }
// else{
//           console.log('jothi');
// }


// function maxOfNumber(sobuj,sathi,jothi){
//          if(sobuj>sathi&&sobuj>jothi){
//           console.log('sobuj is good')
//          }
//          else if(sathi>sobuj&&sathi>jothi){
//           console.log('sathi is good')
//          }
//          else{
//           console.log('jothi is good')
//          }
// }
// const max=maxOfNumber(sobuj,sathi,jothi);

// function maxNumber(numbers){
//           let max=[0];
//           for(const number of numbers){
//                     if(number>max){
//                     max=number;
//                     }
//           }
//           return max;
// }
// const numbers=[12,50,6,40,60,820,900,80,40];
// const max=maxNumber(numbers);
// console.log('max number is:',max);


// function HeightsNumber(numbers){
//          let max=[0];
//           for(let number of numbers){
//                     if(number>max){
//                               max=number;
//                     }
//           }
//           return max;
// }
// let heihgt=[10,20,30,50,60,20,80,90,110,1]
// let max=HeightsNumber(heihgt);
// console.log('max numbers is:',max);


// function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
// let perChairWood=10;
// let perTableWood=50;
// let perBedQuantity=20;

// let chairTotal=chairQuantity*perChairWood;
// let tableTotal=tableQuantity*perTableWood;
// let bedTotal=perBedQuantity*bedQuantity;

// let Total=chairTotal + tableTotal + bedTotal;

// return Total;
// }
// const wood=woodQuantity(2,1,1);
// console.log(wood);

// function minNumber(numbers){
//           let min=numbers[0];
//           for(let number of numbers){
//                     if(number<min){
//                               min=number;
//                     }
//           }
//           return min;

// }
// const numbers=[100,20,,500,120,400,200,600,400];
// const result=minNumber(numbers);
// console.log(result);

// let numbers=[1000,2000,5000,2000,40000,50000,100000,100,500000000];

// function minNumber(numbers){
//           let min=numbers[0];
        
//           for(let num of numbers){
//                     if(num<min){
//                               min=num;
//                     }
//           }
//           return min;
// }
// let number=minNumber(numbers);
// console.log('min Number is :',number)


// const phones=[
//           {name:'Samsung', price:20000,camera:'12mp',color:'black'},
//           {name:'xoami', price:18000,camera:'12mp',color:'black'},
//           {name:'Oppo', price:30000,camera:'12mp',color:'black'},
//           {name:'Iphone', price:100000,camera:'12mp',color:'black'},
//           {name:'Walton', price:31000,camera:'12mp',color:'black'},
//           {name:'HTC', price:27000,camera:'12mp',color:'black'},
//           {name:'HTC', price:500,camera:'12mp',color:'black'}
// ]
// function minNumberPhone(phones){
//           let min=phones[0];
//           for(let phone of phones){
//                     if(phone.price <min.price){
//                         min=phone;      
//                     }
//           }
//           return min;

// }
// let phone=minNumberPhone(phones);
// console.log('min number is:',phone);


// const products=[
//           {name:'shampoo',price:300},
//           {name:'chiruni',price:100},
//           {name:'shirt',price:700},
//           {name:'pant',price:1200}
// ]
// function getTotal(products){
//           let total=0;
//           for(let product of products){
//                     total=total+product.price;
//           }
//           return total;
// }
// let total=getTotal(products);
// console.log(total);


// function add(num1,num2){
//           return num1+num2;
// }
// function subtract(num1,num2){
//           return num1-num2;
// }
// function multiply(num1,num2){
//           return num1*num2;
// }
// function divide(num1,num2){
//           return num1/num2;
// }
// function calculator(a,b,operation){
//           if(operation==='add'){
//           const result=add(a,b);
//           return result;
//           }
//           else if(operation ==='subtract'){
//           const resule =subtract(a,b);
//           return resule;
//           }
//           else if(operation ==='multiply'){
//           let resule=multiply(a,b);
//           return resule;
//           }
//           else if(operation ==='divide'){
//           let resule=divide(a,b);
//           return resule;
//           }
//           else{
//           return 'Operation is not allowed';
//           }
// }
// let resule=calculator(2,5,'divide');
// console.log(resule);


// function multiply(num1,num2){
//           if(typeof num1 !=='number' || typeof num2 !=='number'){
//           return 'Please provide a number'
//           }
//           const resule=num1*num2;
//           return resule;
// }
// let resule=multiply(2,'five');
// console.log(resule);



// function fullName(first,second){
//           if(typeof first !=='string'){
//           return 'Please provide a first Name';
//           }
//           if(typeof second !=='string'){
//           return 'Please provide a second name'
//           }
// let resule=first+ ' ' +second;
// return resule
// }
// let full=fullName('sobuj','hossean');
// console.log(full);

// function getPrice(prodect){
//           if(typeof prodect !== 'object'){
//           return 'Please provide a object'
//           }
//          let price=prodect.price;
//          return price;
// }
// // let price={name:'savan',price:500,color:'black'};
// let price='sobuj';
// let resule=getPrice(price);
// console.log(resule);

function getArray(numbers){
         if(Array.isArray(numbers) !==true){
          return 'Please provide a Array!!!'
         }
         return numbers;
}
let arr=['sobuj'];
let resule=getArray(arr);
console.log(resule);





