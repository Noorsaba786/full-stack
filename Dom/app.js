const input = document.querySelector("#tasks");
const button = document.querySelector("#btn");
const list = document.querySelector("#parent");
const heading = document.querySelector("h1");
const container = document.querySelector("#wrapper");

heading.addEventListener("click", () => {
  container.classList.toggle("toggle");
});

button.addEventListener("click", () => {
  let myElement = input.value.trim();

  if (myElement === "") return;

  const elemets = document.createElement("li");

  elemets.textContent = myElement;

  list.appendChild(elemets);

  input.value = "";
});
