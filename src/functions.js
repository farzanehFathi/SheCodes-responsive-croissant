// Functions

// function declaration
function greet() {
  console.log("hello there");
}

// function expression
const speak = function () {
  console.log("good day");
};

// calling / invoking function
greet();
speak();
greet2(); // hoisting

// hoisting
function greet2() {
  console.log("hello there");
}

const speak2 = function (name, time) {
  console.log(`good ${time} ${name}`);
};

speak2("mario", "morning");

const speak3 = function (name = "luigi", time = "night") {
  console.log(`good ${time} ${name}`);
};

speak3();
speak3("Shaun", "day");

const calcArea = function (radius) {
  //   let area = 3.14 * radius ** 2;
  //   return area;
  return 3.14 * radius ** 2;
};

const area = calcArea(10);
console.log(area);

const calcVol = function (area) {
  return area * 5;
};

const volume = calcVol(area);
console.log(volume);

// arrow functio

const calcAreaa = (radius) => {
  return 3.14 * radius ** 2;
};

const calcAreaaa = (radius) => 3.14 * radius ** 2;

// For Each

let people = ["mario", "luigi", "rye", "shaun", "chun-li"];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(function (person) {
  console.log(person);
});

people.forEach((person) => {
  console.log(person);
});

people.forEach((person, index) => {
  console.log(index, person);
});

people.forEach(logPerson);

const ul = document.querySelector(".people");

let html = ``;

people.forEach((person) => {
  html += `<li style="color: purple">${person} </li>`;
});

console.log(html);
ul.innerHTML = html;
