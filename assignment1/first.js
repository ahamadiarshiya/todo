let input = "";
let text = "";
function add() {
  input = document.querySelector(".input");
  text = input.value.trim();
  if (text === "") return;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  li.appendChild(span);
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.onclick = () => li.remove();
  const editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.onclick = () => {
    const newtext = prompt("Edit your task", span.textContent);
    if (newtext != null && newtext.trim() !== " ") {
      span.textContent = newtext.trim();
    }
  };
  li.appendChild(editbtn);
  li.appendChild(deletebtn);
  document.getElementById("taskiscompleted").appendChild(li);
  localStorage.setItem("Taskname", text);
}
function save() {
  document.getElementById("buttons").innerHTML = localStorage.getItem("Taskname");
  console.log(username, "username");
  console.log(text);
}



