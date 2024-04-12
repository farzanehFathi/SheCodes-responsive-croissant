const para = document.querySelector("p.hello");

console.log(para);

const paras = document.querySelectorAll("p");
console.log(paras);
console.log(paras[0]);

paras.forEach((para) => console.log(para));

// get an element by ID
console.log(document.getElementById("page_title"));
