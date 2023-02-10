const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const showIncompleteButton = document.getElementById("show-incomplete");

addButton.addEventListener("click", addTask);
showIncompleteButton.addEventListener("click", showIncompleteTasks);

function addTask() {
  const taskValue = taskInput.value;
  if (!taskValue) return;

  const task = document.createElement("li");
  task.classList.add("task");
  task.innerHTML = `
    <input type="checkbox" class="checkbox"/>
    <span>${taskValue}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  taskList.appendChild(task);

  taskInput.value = "";

  const checkbox = task.querySelector(".checkbox");
  const editButton = task.querySelector(".edit");
  const deleteButton = task.querySelector(".delete");
  const taskSpan = task.querySelector("span");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      taskSpan.style.textDecoration = "line-through";
    } else {
      taskSpan.style.textDecoration = "none";
    }
  });

  editButton.addEventListener("click", () => {
    const newTaskValue = prompt("Enter new task:", taskValue);
    if (!newTaskValue) return;
    taskSpan.textContent = newTaskValue;
  });

  deleteButton.addEventListener("click", () => {
    taskList.removeChild(task);
  });
}

function showIncompleteTasks() {
  const tasks = taskList.querySelectorAll(".task span");
  let incompleteTasks = 0;
  for (const task of tasks) {
    if (!task.style.textDecoration.includes("line-through")) {
      incompleteTasks++;
    }
  }
  alert(`${incompleteTasks} tasks remaining`);
}
