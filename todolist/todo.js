function addtask() {
  const input = document.getElementById("tasks");
  const text = input.value.trim();
  if (text === "") return;
  const taskdiv = document.createElement("div");
  taskdiv.className = "task";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const tasktext = document.createElement("div");
  tasktext.className = "task-text";
  tasktext.textContent = text;

  const editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.onclick = () => {
    const newtext = prompt("Edit your task");
    if (newtext != null && newtext.trim() !== "") {
      tasktext.textContent = newtext.trim();
    }
  };

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.onclick = () => taskdiv.remove();

  taskdiv.appendChild(checkbox);
  taskdiv.appendChild(tasktext);
  taskdiv.appendChild(editbtn);
  taskdiv.appendChild(deletebtn);

  document.getElementById("tasklist").appendChild(taskdiv);
  input.value = "";

  let arr = JSON.parse(localStorage.getItem("tasklist")) || [];
  arr.push({ Taskname: tasktext.textContent });
  localStorage.setItem("tasklist", JSON.stringify(arr));
}

function onsave() {
  const savedTasks = JSON.parse(localStorage.getItem("tasklist")) || [];

  const container = document.getElementById("saved-tasks-container");
  container.innerHTML = "";

  const box = document.createElement("div");
  box.style.marginTop = "20px";
  box.style.padding = "15px";
  box.style.background = "#ffffff";
  box.style.border = "2px solid black";
  box.style.borderRadius = "8px";
  box.style.color = "black";
  box.style.width = "350px";

  const heading = document.createElement("h3");
  heading.textContent = "Saved Tasks:";
  box.appendChild(heading);

  savedTasks.forEach((taskObj, index) => {
    const para = document.createElement("p");
    para.textContent = `Task ${index + 1}: ${taskObj.Taskname}`;
    box.appendChild(para);
  });

  container.appendChild(box);
}

document.getElementById("delete1").addEventListener("click", function () {
  localStorage.clear();
  document.querySelectorAll(".task").forEach((div) => div.remove());
  const display = document.getElementById("saved-tasks-container");
  display.innerHTML = "";
});
