const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const list = document.querySelector("#list");

const addTask = () => {
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
  input.value = "";
};

button.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
