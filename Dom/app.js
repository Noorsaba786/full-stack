const input = document.querySelector("#tasks");
const button = document.querySelector("#btn");
const list = document.querySelector("#parent");
const heading = document.querySelector("h1");
const container = document.querySelector("#wrapper");
const deleteAll = document.querySelector("#deletAll");

heading.addEventListener("click", () => {
  container.classList.toggle("toggle");
});

input.addEventListener("input", () => {
  if (input.value == "") {
    button.setAttribute("disabled", true);
  } else {
    button.setAttribute("disabled", false);
  }
});

button.addEventListener("click", () => {
  let myElement = input.value;

  // creating new element of li
  const elemets = document.createElement("li");
  elemets.textContent = myElement;

  // create new button of delete with createElement
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";

  deletebtn.addEventListener("click", () => {
    elemets.remove();
  });

  list.appendChild(elemets);
  elemets.appendChild(deletebtn);
  input.value = "";
});

deleteAll.addEventListener("click", () => {
  list.remove();
});

//
