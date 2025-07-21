let arr = [];
var tasktext2;
function addtask() {
  const input = document.getElementById("tasks");
  const text = input.value.trim();
  if (text === "") return;
  const taskdiv = document.createElement("div");
  taskdiv.className = "task";
  var tasktext = document.createElement("div");
  tasktext.className = "task-text";
  tasktext.textContent = text;

  tasktext2 = text;
  const editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.onclick = () => {
    editbtn.onclick = () => {
      const currentText = tasktext.textContent;

      const inputEdit = document.createElement("input");
      inputEdit.type = "text";
      inputEdit.value = currentText;
      inputEdit.className = "edit-input";

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "✔️";

      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "✖️";

      taskdiv.insertBefore(inputEdit, tasktext);
      taskdiv.insertBefore(saveBtn, tasktext);
      taskdiv.insertBefore(cancelBtn, tasktext);
      taskdiv.removeChild(tasktext);

      inputEdit.focus();

      saveBtn.onclick = () => {
        const newText = inputEdit.value.trim();
        if (newText !== "") {
          tasktext.textContent = newText;
        }
        cleanupEdit();
      };

      cancelBtn.onclick = () => {
        cleanupEdit();
      };

      function cleanupEdit() {
        taskdiv.insertBefore(tasktext, inputEdit);
        taskdiv.removeChild(inputEdit);
        taskdiv.removeChild(saveBtn);
        taskdiv.removeChild(cancelBtn);
      }
    };
  };

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.onclick = () => taskdiv.remove();

  taskdiv.appendChild(tasktext);
  taskdiv.appendChild(editbtn);
  taskdiv.appendChild(deletebtn);

  document.getElementById("tasklist").appendChild(taskdiv);
  input.value = "";
}

function onsave() {
  const taskelements = document.querySelectorAll("#tasklist .task-text");
  const tasksToSave = [];

  taskelements.forEach((taskEl) => {
    tasksToSave.push({ Taskname: taskEl.textContent });
  });

  localStorage.setItem("tasklist", JSON.stringify(tasksToSave));
  console.log("Tasks saved:", tasksToSave);
}

function onshowsavedtasks() {
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
  arr.splice(0, arr.length);
  console.log(arr);
  document.querySelectorAll(".task").forEach((div) => div.remove());
  const display = document.getElementById("saved-tasks-container");
  display.innerHTML = "";
});
