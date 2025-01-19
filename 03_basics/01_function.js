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

console.log(loginUserMessage()); //sam just logged in
console.log(loginUserMessage("rahul")); //rahul just logged in
