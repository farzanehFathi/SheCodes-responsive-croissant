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
<h2>${title} </h2>
<p>${author} </p>
<span> This blog has ${likess} likes </span>
`;
console.log(html);
