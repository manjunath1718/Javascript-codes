//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);//false

const bigNumber = 3456543576654356754n;
// console.log(typeof bigNumber);//bigint

// Reference (Non primitive)

// Array, Objects, Functions

const cities = ["gokak", "bengaluru", "mysore"];
// console.log(typeof cities);//object

let myObj = {
  id: 123,
  name: "mahesh",
  age: 22,
  city: "pune",
};
// console.log(typeof myObj);//object

let myFun = function () {
  console.log("hello world");
};
console.log(typeof myFun); //function

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (primitive) , Heap (Non-Primitive)

let nickName = "mahi";
let realName = nickName;
realName = "mahendra";

// console.log(realName);//mahendra
// console.log(nickName);//mahi

let captain = {
  name: "mahendra",
  role: "batsman",
};
let wicketKeeper = captain;

// console.log(captain.name);//mahendra
// console.log(wicketKeeper.name);//mahendra

wicketKeeper.name = "kl rahul";
console.log(captain.name); //kl rahul
console.log(wicketKeeper.name); //kl rahul
