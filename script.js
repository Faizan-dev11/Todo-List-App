'use strict';



console.log('JS connected');
const input=document.getElementById("task-input")
const addbutton=document.getElementById("btn-add")
const tasklist=document.getElementById("task-list")

function handleAddTask(){
    const text=input.value.trim();
    //creating list items
    if(text===""){
        alert("please enter a task")
        input.focus();
        return;
        
    }
    

    const li=document.createElement("li");
    li.className="task active"


    //create span for task text
    const span=document.createElement("span")
    span.textContent=text;

    //create delete button

    const delBtn=document.createElement("button");
    delBtn.textContent="X";
    delBtn.className="btn-del";
    const checkbox=document.createElement("input")
    checkbox.type="checkbox"
    checkbox.className="checkbox";

    li.appendChild(checkbox)
    li.appendChild(span);
    li.appendChild(delBtn);

    tasklist.appendChild(li);

    input.value="";
    input.focus();


}
// add button function call
addbutton.addEventListener("click", handleAddTask);   
//event deletion
tasklist.addEventListener("click",function(e){
    if(e.target.classList.contains("btn-del")){
        e.target.parentElement.remove();    }
})

 

input.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        handleAddTask();
    }
});

//filtering tasks
const checkboxes=document.querySelectorAll(".checkbox");
checkboxes.addEventListener("change",function(){
    if (checkboxes.checked){
        li.classList.add("completed");
        li.classList.remove("active");
    }
    else if (checkboxes.unchecked){
        li.classList.add("active");
        li.classList.remove("completed");
    }
})



// -----------
const filters = document.querySelectorAll(".filter");

filters.forEach(btn => {
  btn.addEventListener("click", function () {
    filters.forEach(b => b.classList.remove("active"));
    this.classList.add("active");
  });
});
