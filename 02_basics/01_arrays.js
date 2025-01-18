//array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["rocky", "vikrantrona"];

// console.log(myArr[1]);

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

//Array methods

// myArr.push(7);
// myArr.push(8);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

//slice , splice

console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]

let myn1 = myArr.slice(1, 3);

console.log(myn1); //[ 1, 2 ]
console.log("A", myArr); //[ 0, 1, 2, 3, 4, 5 ]

let myn2 = myArr.splice(1, 3);

console.log(myn2); //[ 1, 2, 3 ]
console.log("B", myArr); //B [ 0, 4, 5 ]
