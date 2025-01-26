class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}
const hitesh = new User("hitesh");
console.log(hitesh);
hitesh.logMe();
// console.log(hitesh.createId());//error
console.log(User.createId()); //123

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("iphone", "iphone.com");
// console.log(iphone.createId()); //error
console.log(Teacher.createId()); //123
