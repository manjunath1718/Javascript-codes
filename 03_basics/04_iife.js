// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  //named IIFE
  console.log(`DB connected`);
})();

(chai = (name) => {
  console.log(`DB connected two ${name}`);
})("hitesh");

let val1 = 10;
let val2 = 5;

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}
let result1 = addTwoNumbers(val1, val2);
let result2 = addTwoNumbers(20, 30);

console.log(result2);
