const title = document.querySelector("#title");
const paragraphs = document.querySelectorAll(".text");

const button = document.querySelector("#btn");

console.log(title);
console.log(paragraphs);
console.log(button);

const addNewElement = document.createElement("p");
addNewElement.innerHTML = "<strong>hey live is beautiful<strong>";
document.body.appendChild(addNewElement);

const newTitle = document.createElement("h1");
newTitle.innerText = "i am h1 ";
newTitle.style.color = "pink";

document.body.appendChild(newTitle);
