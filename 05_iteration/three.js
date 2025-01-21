// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  //   console.log(element);
}

const greetings = "hello world";
for (const greet of greetings) {
  //   console.log(`each char is ${greet}`);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of Ameic");
map.set("Fr", "France");
map.set("IN", "India");

for (const element of map) {
//   console.log(element);
}

for (const [key, value] of map) {
  console.log(key, ":->", value);
}
/* 
const myObject = {
  game1: "PUBG",
  game2: "sudoko",
};
//TypeError: myObject is not iterable
for (const [key, value] of myObject) {
  console.log(key, ":->", value);
} */
