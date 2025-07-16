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
    if (newtext != null && newtext.trim() != "") {
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
  let arr=JSON.parse(localStorage.getItem("tasklist"))||[];
  let newarr={
    Taskname:tasktext.textContent
  };
  arr.push(newarr);
  localStorage.setItem("tasklist",JSON.stringify(arr));



  // const saved=document.getElementById('dele');
  // deletebtn.onclick=()=>{
  // const data = localStorage.getItem('tasklist');
  // const parsedData = data ? JSON.parse(data) : null;
  // const outputDiv = document.getElementById('tasklist');
  //   if (parsedData) {
  //     outputDiv.innerHTML = `
  //       <p><strong>TaskName:</strong> ${parsedData.tasktext}</p>`;
  //   } else {
  //     outputDiv.textContent = 'No data found in localStorage.';
  //   }
  // }



    document.getElementById("delete1").addEventListener("click", function() {
      localStorage.clear();
      const divs = document.querySelectorAll(".taskdiv"); 
      divs.forEach(div => div.remove());
    });



  // const del=document.getElementById('delete1');
  // del.onclick=()=>{
  //   localStorage.clear();
  //   taskdiv.remove();
    // const re=document.getElementById("tasklist");
    // if(re){
    //   re.remove();
    // }
  // } 
}


