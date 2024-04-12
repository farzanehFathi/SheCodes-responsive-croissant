//Strings

let firstName = "Brandon";
let lastName = "Sanderson";

let fullName = firstName + " " + lastName;

console.log(fullName[2]);

console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());

let email = "mario@thenetninja.co.uk";

console.log(email.indexOf("@"));
console.log(email.lastIndexOf("n"));
console.log(email.slice(4, 10)); // goes from 4 to 10
console.log(email.substr(4, 10)); // goes from 4 to 14
console.log(email.replace("m", "w"));
console.log(email.replace("n", "w"));

// Numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math opertators: +, -, *, /, **, %
console.log(radius % 3);
console.log(pi * radius ** 2);

let likes = 10;

console.log(likes + 1);
console.log(likes++);
console.log(likes--);
console.log((likes += 10));

console.log("the blog has" + likes + "likes");

// template strings
const title = "Best reads of 2019";
const author = "Mario";
const likess = 30;

// contacenation way
console.log(
  "The blog called " + title + " by " + author + " has " + likess + " likes"
);

// themplate string way
console.log(`The blog called ${title} by ${author} has ${likess} likes`);

// creating html templates
let html = `
<h2> ${title} </h2>
<p> ${author} </p>
<span> This blog has ${likess} likes </span>
`;
console.log(html);

// arrays
let ninjas = ["shaun", "ryu", "chun-li"];
console.log(ninjas[1]);
ninjas[1] = "ken";
console.log(ninjas);

console.log(ninjas.length);

// array methods

console.log(ninjas.join("-"));

console.log(ninjas.indexOf("chan-li"));

console.log(ninjas.concat(["ken", "crystal"]));

console.log(ninjas.push("ken")); // alters the orignial value

console.log(ninjas.pop()); // pops out the last member

// null & undefined
let age;

console.log(age, age + 3, `the age is ${age}`);

let ages = null;

console.log(ages, ages + 3, `the age is ${ages}`);

// Booleans: True, False

console.log(true, false, "true", "false");

// mothods can return boleans

console.log(email.includes("!"));
console.log(ninjas.includes("luigi"));

// comparison operators

console.log(age == null); // true
console.log(age < 20); // false
console.log(age > 20); // false
console.log(age <= 20); //false
console.log(age >= 20); //false

let name = "shaun";
console.log(name == "shaun");
console.log(name > "crystal"); // true
console.log(name > "Shaun"); // true
console.log(name > "Shaun");

// loose comparison
console.log(25 == "25"); // true

// strict comparison
console.log(25 === "25"); // false
console.log(25 !== "25"); // true

// type conversion

let score = "100";

console.log(score + 1); //1001
console.log(Number(score) + 1); //101

console.log(typeof score);

let greet = "hello";
console.log(Number(greet)); // NaN

let result = Boolean(100);
console.log(result, typeof result); // true Boolean
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
