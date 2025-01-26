const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};
// console.log(user);
// console.log(user.getUserDetails());
// console.log(this); //{}

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welocome ${this.username}`);
  };
    return this;
}

/* const userOne = User("rajesh", 8, false);
const userTwo = User("mahesh", 7, true); */
const userOne = new User("rajesh", 8, false);
const userTwo = new User("mahesh", 7, true);

// console.log(userOne);
// console.log(userOne.constructor);//[Function: User]
console.log(userTwo);
// console.log(userTwo.greeting());
