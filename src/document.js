// const para = document.querySelector(".hello");

// console.log(para);

// const paras = document.querySelectorAll("p");
// console.log(paras);
// console.log(paras[0]);

// paras.forEach((para) => console.log(para));

// // get an element by ID
// console.log(document.getElementById("page_title"));

// // forEach function doesn't work on getElements...
// console.log(document.getElementsByClassName);

// console.log(document.getElementsByTagName);

// CHANGE the text inside element

// const para = document.querySelector(".hello");

// console.log(para.innerText);
// para.innerText += " ninjas are awsome!";

// const paras = document.querySelectorAll("p");

// paras.forEach((para) => {
//   para.innerText += ". new texxt";
// });

// const hello = document.querySelector(".hello");

// console.log(hello.innerHTML);
// hello.innerHTML = "<h2>Hello World Again </h2>";

// const people = ["mario", "luigi", "yoshi"];

// people.forEach((person) => {
//   hello.innerHTML += `<h2>Hello, ${person}!</h2>`;
// });

// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.google.com");
// link.innerText = "google";

// const mssg = document.querySelector("p");

// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");

// const title = document.querySelector("h1");

// console.log(title.style.color);
// title.setAttribute("style", "margin:50px");
// title.style.color = "brown";

// title.style.fontSize = "60px";
// title.style.fontSize = "";

const content = document.querySelector("p");

console.log(content.classList);
