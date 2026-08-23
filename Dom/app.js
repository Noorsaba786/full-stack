/* const title = document.querySelector("#title");
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
 */

/* <!-- 
//Selects the input, button, and list
When the button is clicked, reads the input value
Creates a new <li> with that text
Appends it to the <ul>
Clears the input after adding --> */

const input = document.querySelector("#tasks");
const button = document.querySelector("#btn");
const list = document.querySelector("#parent");
const heading = document.querySelector("h1");
const container = document.querySelector("#wrapper");

heading.addEventListener("click", () => {
  container.classList.toggle("toggle");
});

button.addEventListener("click", () => {
  let myElement = input.value;

  const elemets = document.createElement("li");
  elemets.textContent = myElement;

  list.appendChild(elemets);

  input.value = "";
});
