const myName = "suresh    ";
const myChannelName = "chai  ";

// myName.trueLength();

// console.log(myName.length);
// console.log(myName.trim());
// console.log(myName.trim().length);

let myHeros = ["spiderman", "thor"];

let heroPowers = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log("spidy power is ${spiderman}");
  },
};

Object.prototype.ganesh = function () {
  console.log("ganesh is present in all objects");
};

// myHeros.ganesh(); //ganesh is present in all objects
// heroPowers.ganesh(); //ganesh is present in all objects

Array.prototype.heyGanesh = function () {
  console.log(`Ganesh says hello`);
};

myHeros.heyGanesh();
//heroPowers.heyGanesh();//error

//inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

Teacher.__proto__ = User;

// console.log(Teacher.makeVideo);//true
// console.log(Teacher.name);//chai

const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// console.log(TASupport.isAvailable);//false

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport.makeVideo);
console.log(TeachingSupport.name);

let anotherUsername = "ChaiAurCode    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.trim().length}`);
};
anotherUsername.trueLength();
"mahendra".trueLength();
"ravi".trueLength();
