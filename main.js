const todos = document.querySelector(".todos");
const add = document.querySelector(".add");

function addTodo(todo) {
  if (todo.length) {
    todos.innerHTML += `<li class="todo">${todo}<i class="bx bx-trash"></i></li>`;
  }
}

add.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo(add.work.value.trim());
  add.reset();
});

todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-trash")) {
    e.target.parentElement.remove();
  }
});
