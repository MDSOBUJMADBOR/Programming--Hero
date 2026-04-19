function add(num1,num2) {
          const total = num1 + num2;
          console.log(num1,num2,total);
}
//NaN ---->Not a Number
// add(10)

//-------------------


function add(num1,num2=0) {
          const total = num1 + num2;
          console.log(num1,num2,total);
}
add(10)




function fullName (first , last = ' '){
          const name = first + ' ' + last;
          console.log(name);
}
fullName('kamruzzaman','osman' )



function multiply(num1,num2){
          const result = num1 * num2;
          console.log(result);
}
multiply(5,10)

/**
 * string --> ' '
 * number --> 0 [for add]
 * number ---> 1[for multiply]
 * array --> []
 * object --->{}
 * 
 */