// let arr = [];
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
      cleanitup();
    };

    cancelBtn.onclick = () => {
      cleanitup();
    };

    function cleanitup() {
      taskdiv.insertBefore(tasktext, inputEdit);
      taskdiv.removeChild(inputEdit);
      taskdiv.removeChild(saveBtn);
      taskdiv.removeChild(cancelBtn);
    }
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
  const taskList = document.getElementById("tasklist");

  const currentTasks = Array.from(taskList.querySelectorAll(".task-text")).map(
    (el) => el.textContent
  );

  const savedTasks = JSON.parse(localStorage.getItem("tasklist")) || [];

  const allTaskNames = [
    ...new Set([...currentTasks, ...savedTasks.map((t) => t.Taskname)]),
  ];

  taskList.innerHTML = "";

  allTaskNames.forEach((taskText) => {
    const taskdiv = document.createElement("div");
    taskdiv.className = "task";

    const tasktext = document.createElement("div");
    tasktext.className = "task-text";
    tasktext.textContent = taskText;

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";

    editbtn.onclick = () => {
      const currentText = tasktext.textContent;

      const inputEdit = document.createElement("input");
      inputEdit.type = "text";
      inputEdit.value = currentText;
      inputEdit.className = "edit-input";

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "✔️";
      saveBtn.style.marginLeft = "5px";

      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "✖️";
      cancelBtn.style.marginLeft = "5px";

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

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.onclick = () => taskdiv.remove();

    taskdiv.appendChild(tasktext);
    taskdiv.appendChild(editbtn);
    taskdiv.appendChild(deletebtn);

    taskList.appendChild(taskdiv);
  });
}

function onclear() {
  document.getElementById("tasklist").innerHTML = "";
  localStorage.clear();
}
