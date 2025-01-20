function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(5, 6);
// console.log(`result : ${result}`);//result : 11
/* 
function loginUserMessage(username) {
  if (username === undefined) {
    console.log("please enter username");
    return;
  }

  return `${username} just logged in`;
} */
/* function loginUserMessage(username) {
  if (!username) {
    console.log("please enter username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage());//undefined */
function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("please enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage()); //sam just logged in
// console.log(loginUserMessage("rahul")); //rahul just logged in

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 300, 400));

const user = {
  name: "sudeep",
  userage: 25,
};
function handleObject(anyObject) {
  console.log(`user name is ${anyObject.name} and his is ${anyObject.age}`);
}

// handleObject(user)
handleObject({
  name: "sudeep",
  age: 25,
});

function returnSecondValue(anyArray) {
  return anyArray[1];
}
const myArray = [100, 105, 110, 120];
console.log(returnSecondValue(myArray));

console.log(returnSecondValue([100, 105, 110, 120]));
