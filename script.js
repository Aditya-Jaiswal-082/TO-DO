function addTask() {
  let taskInput = document.getElementById("task-input");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  let removeBtn = document.createElement("button");
  removeBtn.innerText = "X";
  removeBtn.className = "remove-btn";

  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removeBtn);

  document.getElementById("task-list").appendChild(li);
  taskInput.value = ""; // clear input
}
