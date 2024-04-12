// Control Flow:
// looping
// conditional statements

// LOOPS
// there are many types of the loops

// For LOOP

// for ( initialization variable, condition , final expression )

for (let i = 0; i < 5; i++) {
  console.log("in loop", i);
}
console.log("loop finished");

const names = ["shaun", "mario", "luigi"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);

  let html = `<div> ${names[i]} </div>`;
  console.log(html);
}

// While LOOP

let i = 0;

while (i < 5) {
  console.log("in loop:", i);
  i++;
}

let j = 0;
while (j < names.length) {
  console.log(names[j]);
  j++;
}

// do while loops

let k = 3;

do {
  console.log("val of k is:", k);
  k++;
} while (k < 5);

// if statemensts

age = 25;
if (age > 20) {
  console.log("you are over 20 years old");
}

let ninjas = ["shaun", "ryu", "chun-li", "yoshi"];
if (ninjas.length > 2) {
  console.log("that's a lot of ninjas");
}

const password = "p@ss";

// if (password.length >= 12) {
//   console.log("that password is mighty strong");
// } else if (password.length >= 8) {
//   console.log("that password is long enough");
// } else {
//   console.log("password is not long enough");
// }

// logcial operators - OR || and AND &&

if (password.length >= 12 && password.includes("@")) {
  console.log("that password is mighty strong");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 5)
) {
  console.log("that password is strong enough");
} else {
  console.log("password is not strong enough");
}

// logical NOT (!)

let user = false;

if (!user) {
  console.log("you must be logged in to continue");
}

console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log("your score is ", scores[i]);
  if (scores[i] === 100) {
    console.log("congrats. you got the top score!");
    break;
  }
}

// Switch
const grade = "P";

switch (grade) {
  case "A":
    console.log("you got an A!");
    break;
  case "B":
    console.log("you got a B!");
    break;
  case "C":
    console.log("you got a C!");
    break;
  case "D":
    console.log("you got a D!");
    break;
  case "E":
    console.log("you got an E!");
    break;
  default:
    console.log("not a valid grade");
}

// Global Scope

age = 30;

if (true) {
  let age = 40;
  let name = "shaun";
  console.log(age, name, " is inside of the 1st code block");
}
console.log(age, name, " is outside of the code block");
