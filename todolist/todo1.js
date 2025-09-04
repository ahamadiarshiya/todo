function addTask() {
    const input = document.getElementById("tasks");
    const text = input.value.trim();
    if (text === "") return;

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskText = document.createElement("div");
    taskText.className = "task-text";
    taskText.textContent = text;

    editTask(taskDiv, taskText);

    document.getElementById("tasklist").appendChild(taskDiv);
    input.value = "";
}

function updateLocalStorageFromUI() {
    const taskElements = document.querySelectorAll("#tasklist .task-text");
    const tasksToSave = Array.from(taskElements).map((el) => ({
        taskName: el.textContent,
    }));
    localStorage.setItem("tasklist", JSON.stringify(tasksToSave));
}

function onSave() {
    updateLocalStorageFromUI();
    console.log("Tasks saved to localStorage.");
}

function onShowSavedTasks() {
    const taskList = document.getElementById("tasklist");

    const savedTasks = JSON.parse(localStorage.getItem("tasklist")) || [];

    taskList.innerHTML = "";

    savedTasks.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const taskText = document.createElement("div");
        taskText.className = "task-text";
        taskText.textContent = task.taskName;

        editTask(taskDiv, taskText);

        taskList.appendChild(taskDiv);
    });
}

function editTask(taskDiv, taskText) {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    editButton.onclick = () => {
        const currentText = taskText.textContent;

        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = currentText;
        inputEdit.className = "edit-input";

        const saveButton = document.createElement("button");
        saveButton.textContent = "✔️";
        saveButton.style.marginLeft = "5px";

        const cancelButton = document.createElement("button");
        cancelButton.textContent = "✖️";
        cancelButton.style.marginLeft = "5px";

        taskDiv.insertBefore(inputEdit, taskText);
        taskDiv.insertBefore(saveButton, taskText);
        taskDiv.insertBefore(cancelButton, taskText);
        taskDiv.removeChild(taskText);

        inputEdit.focus();

        saveButton.onclick = () => {
            const newText = inputEdit.value.trim();
            if (newText !== "") {
                taskText.textContent = newText;
            }
            cleanUpEdit();
        };

        cancelButton.onclick = () => {
            cleanUpEdit();
        };

        function cleanUpEdit() {
            taskDiv.insertBefore(taskText, inputEdit);
            taskDiv.removeChild(inputEdit);
            taskDiv.removeChild(saveButton);
            taskDiv.removeChild(cancelButton);
        }
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
        taskDiv.remove();
    };

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(deleteButton);
}

function onClear() {
    document.getElementById("tasklist").innerHTML = "";
    localStorage.clear();
}
