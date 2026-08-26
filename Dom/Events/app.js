const button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
  console.log(event.type);
  console.log(event.target);
});
