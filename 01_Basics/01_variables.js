const accountId = 1234751;
let accountEmail = "mahesh@google.com";
var accountPassword = "4321";
city = "Gokak";
let accountState;

// accountId = 123;//not allowed
accountEmail = "mahi7@google.com";
accountPassword = "1221";
city = "bengaluru";

/* 
prefer not to use var
because of issue in block scope and functional scope
 */
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, city, accountState]);
