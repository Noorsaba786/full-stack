const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const list = document.querySelector("#list");

const addTask = () => {
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", () => {
    console.log("task clicked");
    li.style.textDecoration = "line-through";
    li.addEventListener("dblclick", () => {
      console.log("task double clicked");
      li.style.textDecoration = "line-through";
      li.style.opacity = "0.5";
    });
  });

  list.appendChild(li);
  input.value = "";
};

button.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
