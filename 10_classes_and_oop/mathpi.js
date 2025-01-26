const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(Math.PI);
// Math.Pi = 5;
// console.log(Math.PI);
// console.log(descriptor);

const chai = {
  name: "ginger tea",
  price: 20,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nahi bni");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}


