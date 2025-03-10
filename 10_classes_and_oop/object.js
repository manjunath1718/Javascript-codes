function multiplyBy5(num) {
  return num * 5;
}
// console.log(multiplyBy5.prototype);//{}
multiplyBy5.prototype.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.prototype.power);
// console.log(multiplyBy5.prototype);//{ power: 2 }

function createProduct(productname, price) {
  this.productname = productname;
  this.price = price;
}
createProduct.prototype.increase = function () {
  this.price++;
};
createProduct.prototype.printPrice = function () {
  console.log(`price is : ${this.price}`);
};

const chai = new createProduct("chai", 25);
const tea = new createProduct("tea", 250);

tea.printPrice();
// console.log(tea.price);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
