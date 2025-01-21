const southHeros = ["yash", "kichcha", "rishabh"];
const northHeros = ["salman", "srk", "amir"];

// southHeros.push(northHeros)
// console.log(southHeros);//[ 'yash', 'kichcha', 'rishabh', [ 'salman', 'srk', 'amir' ] ]

const allHeros = southHeros.concat(northHeros);
// console.log(allHeros);//[ 'yash', 'kichcha', 'rishabh', 'salman', 'srk', 'amir' ]

//spread operator
const all_ind_heros = [...northHeros, ...southHeros];
// console.log(all_ind_heros);//[ 'salman', 'srk', 'amir', 'yash', 'kichcha', 'rishabh' ]

const arr1 = [1, 2, 3, [4, 5], 6, [7, 8, 9, [0, 1, 2]]];
// const real_array=arr1.flat(1)//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 0, 1, 2 ] ]
// const real_array=arr1.flat(2)//[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
const real_array = arr1.flat(Infinity); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
// console.log(real_array);

console.log(Array.isArray("virat")); //false
console.log(Array.from("virat")); //[ 'v', 'i', 'r', 'a', 't' ]
console.log(Array.from(Object.values({ name: "virat", age: 22 }))); //[ 'virat', 22 ]
console.log(Array.from(Object.keys({ name: "virat", age: 22 }))); //[ 'name', 'age' ]

let score1 = 80;
let score2 = 90;
let score3 = 85;

console.log(Array.of(score1, score2, score3)); //[ 80, 90, 85 ]
