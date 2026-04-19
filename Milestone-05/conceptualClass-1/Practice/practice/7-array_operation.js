
let arr = [10, 20, 30, 40, 50];
const phones = [
  {
    name: "iPhone 14 pro",
    price: 90000,
  },
  {
    name: "iPhone 14 pro",
    price: 92000,
  },
  {
    name: "Google pixel 10 pro",
    price: 95000,
  },
  {
    name: "Motorola G85",
    price: 24000,
  },
  {
    name: "iPhone 16 pro",
    price: 135500,
  },
  {
    name: "Samsung S25 ultra",
    price: 112500,
  },
  {
    name: "Samsung j5",
    price: 9000,
  },
];


for(let i =0;i < arr.length;i++){
          // console.log(arr[i]);
}
for(let element of arr) {
          // console.log('All - Elements',element);
};


let updateArr = arr.map((element,index,array) =>  element*2);      

// console.log(updateArr);

let overEighteen= arr.filter((evem) => evem >20);
// console.log(overEighteen);

let richPhones = phones.filter((elem) => elem.price > 100000)
// console.log(richPhones);

const findThirty = arr.find((elem) => elem ===20);
// console.log(findThirty);

const findRichPhone = phones.find((elem) => elem.price > 100000);
// console.log(findRichPhone);


const summation = phones.reduce((accu,elem) => accu+elem.price,0,);
console.log(summation);