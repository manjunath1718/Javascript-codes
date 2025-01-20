const user = {
  username: "nitish",
  age: 22,
  welcomeMessage: function () {
    console.log(`${this.username} , wlcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "ishan";
// user.welcomeMessage();

// console.log(this);//{} if execute this in browser we get window object

// function chai() {
//   let username = "hitesh";
//   console.log(this.username); //undefined
//   console.log(this);//Object [global]
// }
// chai();

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username); //undefined
//   console.log(this); //Object [global]
// };
// chai();

const chai = () => {
  let username = "hitesh";
  console.log(this.username); //undefined
  console.log(this); //{}
};
chai();
/* 
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}!`); // "this" refers to the person object
  },
};
person.greet(); // Output: Hello, Alice!
 */
const person = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, ${this.name}!`); // "this" refers to the global object or undefined in strict mode
  },
};
// person.greet(); // Output: Hello, undefined!

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(2, 3));

// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 4));
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3, 4));
const addTwo = (num1, num2) => ({ username: "hitesh" });
console.log(addTwo(3, 4));
