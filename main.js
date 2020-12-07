const list = document.querySelector(".todos");
const add = document.querySelector(".add");
const search = document.querySelector(".search input");

function addTodo(todo) {
  if (todo.length) {
    list.innerHTML += `<li class="todo">${todo}<i class="bx bx-trash"></i></li>`;
  }
}

add.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo(add.work.value.trim());
  add.reset();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-trash")) {
    e.target.parentElement.remove();
  }
});

const filterTodo = (term) => {
  Array.from(list.children)
    .filter((e) => !e.textContent.toLowerCase().includes(term))
    .forEach((e) => e.classList.add("filtered"));
  Array.from(list.children)
    .filter((e) => e.textContent.toLowerCase().includes(term))
    .forEach((e) => e.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodo(term);
});
