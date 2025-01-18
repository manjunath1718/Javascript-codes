// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "mahi";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "mahi7@gmail.com",
  celebrityUser: {
    userfullname: {
      firstname: "mahi",
      lastname: "dhoni",
    },
  },
};

// console.log(regularUser.celebrityUser.userfullname.lastname);

const obj1 = { 1: "abd", 2: "Mr.360" };
const obj2 = { 3: "virat", 4: "king" };
const obj3 = { 5: "pant", 6: "wk" };

// const obj = { obj1, obj2 };
// console.log(obj);

/* 
const obj = Object.assign(obj1, obj2);
console.log(obj);//{ '1': 'abd', '2': 'Mr.360', '3': 'virat', '4': 'king' }
console.log(obj1);//{ '1': 'abd', '2': 'Mr.360', '3': 'virat', '4': 'king' }
 */

/* 
const obj = Object.assign({},obj1, obj2);
console.log(obj);//{ '1': 'abd', '2': 'Mr.360', '3': 'virat', '4': 'king' }
console.log(obj1);//{ '1': 'abd', '2': 'Mr.360' }
 */

const obj = { ...obj1, ...obj2 };
// console.log(obj); //{ '1': 'abd', '2': 'Mr.360', '3': 'virat', '4': 'king' }

const users = [
  { id: 1, email: "abd@gmail.com" },
  { id: 2, email: "vk@gmail.com" },
  { id: 3, email: "msd@gmail.com" },
];

// console.log(users[1].email); //vk@gmail.com

// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'mahi', false ]
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'mahi' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
console.log(tinderUser.hasOwnProperty("isLogged")); //false

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor
