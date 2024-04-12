// object literal notation!

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: [
    { title: "why mac & cheese rules", likes: 10 },
    { title: "10 things to make with marite", likes: 30 },
  ],
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
  logBlogs() {
    console.log("this user has written the following blogs:");
    this.blogs.forEach((blog) => console.log(blog.title, blog.likes));
  },
};

console.log(user);
console.log(user.age);
user.age = 35;
console.log(user.age);

console.log(user["name"]);
user["name"] = "chun-li";
console.log(user["name"]);

const key = "location";
console.log(user[key]);

console.log(typeof user);

user.login();
user.logout();

user.logBlogs();

console.log(this);

// Math objects

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));

// random numbers

const random = Math.random();
console.log(Math.round(random * 100));
