class User {
  constructor(email, password) {
    this.password = password;
    this.email = email;
  }
  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const chai = new User("chai.ai", "abc");
console.log(chai.email);
chai.email = "tea.ai";
console.log(chai.email);
console.log(chai.password);
