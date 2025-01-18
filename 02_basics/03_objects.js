//singleton
// Object.create

//Object literal

let mySym = Symbol("key1");

const jsUser = {
  name: "virat",
  "full name": "virat kohli",
  [mySym]: "mykey1",
  age: 35,
  location: "delhi",
  email: "virat18@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "sunday"],
};

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vk@18google.com";
// console.log(jsUser["email"]);
// Object.freeze(jsUser);
// jsUser.email = "vk@18microsoft.com";
// console.log(jsUser["email"]);

jsUser.greeting1 = function () {
  console.log("hello jsuser");
};
jsUser.greeting2 = function () {
  console.log(`hello ${jsUser.name}`);
};
// console.log(jsUser.greeting1);//[Function (anonymous)]
console.log(jsUser.greeting1()); //hello jsuser undefined
console.log(jsUser.greeting2()); //hello virat undefined
