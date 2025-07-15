function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskText = document.createElement("div");
  taskText.className = "task-text";
  taskText.textContent = text;

  checkbox.onchange = () => {
    taskDiv.classList.toggle("completed", checkbox.checked);
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task", taskText.textContent);
    if (newText && newText.trim() !== "") {
      taskText.textContent = newText.trim();
    }
  };
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => taskDiv.remove();

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskText);
  taskDiv.appendChild(editBtn);
  taskDiv.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(taskDiv);
  input.value = "";
}
