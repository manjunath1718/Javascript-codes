let score = 90;
// console.log(score);//90

let balance = new Number(50000);
// console.log(balance);//[Number: 50000]

// console.log(balance.toString().length);//5
// console.log(balance.toFixed(2));//50000.00

let otherNumber = 123.8936;

// console.log(otherNumber.toPrecision(5));//123.89

const hundreds = 10000000;

// console.log(hundreds.toLocaleString());//1,00,00,000
// console.log(hundreds.toLocaleString('en-US'));//10,000,000

//+++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(6.7));//7
// console.log(Math.ceil(4.3)); //5
// console.log(Math.floor(12.8)); //12
// console.log(Math.min(2, 5, 15, 1)); //1
// console.log(Math.max(10, 20, 25, 15)); //25

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * 10) + (max - min + 1));
