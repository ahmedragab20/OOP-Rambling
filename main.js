const User = function (username, password) {
  this.username = username;
  this.password = password;
};

const userProps = {
  logout: function () {
    console.log(this.username + " has logged out");
  },
  login: function () {
    console.log(this.username + " has logged in");
  },
  showPassword: function () {
    console.log(`Password: ${this.password}`);
  },
};

User.prototype = Object.assign(User.prototype, userProps);

const UsersGroup = function (user) {
  this.users = [];

  this.getUserDetails = function () {
    console.log(this.showPassword(), this.login(), this.logout());
  };

  Object.defineProperty(this, "users", {
    writable: false,
    enumerable: false,
    configurable: false,
  });
};

const usersGroupPrototype = Object.assign(User.prototype, {
  addUser: function (user) {
    this.users.push(user);
  },
});

UsersGroup.prototype = Object.create(usersGroupPrototype);

const user = new User("John", "1234");
const group = new UsersGroup(user);
