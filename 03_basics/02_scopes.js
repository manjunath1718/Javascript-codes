var c = 30;

let a = 10;
let d = 40;
if (true) {
  let a = 100;
  const b = 200;

  console.log("INNER : ", a);
  console.log("OUTER : ", d);
}

// console.log(a);
// console.log(b);
// console.log(c);

/* function one() {
  username = "darshan";
  function two() {
    website = "youtube";
    console.log(username);
  }
  //   console.log(website);//Error
  two();
}
// console.log(username);//Error

one(); */

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website); //hitesh youtube
  }
  //   console.log(website); //Error
}

// console.log(username); //Error

//+++++++++++++++++++Interesting++++++++++++++++++++++++++

console.log(addOne(4)); //5
function addOne(num) {
  return num + 1;
}
console.log(addOne(5)); //6

// console.log(addTwo(4)); //Error
let addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5)); //7
