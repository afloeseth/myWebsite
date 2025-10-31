function createTask(event) {
  event.preventDefault();
  const input = document.querySelector("#todoInput");
  const list = document.querySelector("#todoList");
  const newItem = document.createElement("li");
  const span = document.createElement("span");

  const button = document.createElement("button");
  if (input.value != "") {
    newItem.appendChild(span);
    newItem.appendChild(button);

    span.innerText = input.value;
    button.classList.add("delete");
    button.textContent = "X";
    button.addEventListener("click", function (e) {
      newItem.remove();
    });
    list.appendChild(newItem);
    input.value = "";
    return false;
  }
}
const form = document.querySelector("form");
form.addEventListener("submit", createTask);
