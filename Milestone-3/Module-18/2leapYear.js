/**
 * year will be e leap year if the year is divisible 4
 */
function isLeapYear(year){
          if(year%4===0){
          return true;
          }else{
          return false;
          }
}
const isLipi=isLeapYear(2054);
console.log(isLipi);
/**
 * 1.those year that is not divisble by 100 and  if the year is divisble by 4:
 * then it will be a leap year
 * 2.
 */
function isLeapYear2(year){
          if(year%100!==0 && year%4==0){
                    return true;
          }else if(year%400 ===0){
                    return true;
          }else{
                    return false;
          }
}
const isLeap=isLeapYear2(2026);
const isLeap1=isLeapYear2(2400);
const isLeap2=isLeapYear2(1900);
const isLeap3=isLeapYear2(2052);
// console.log(isLeap,isLeap1,isLeap2,isLeap3);


