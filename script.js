
document.addEventListener("DOMContentLoaded", () => {

    const addButton = document.getElementById("add-task-btn");
    const taskList= document.getElementById("task-list");
    const taskInput= document.getElementById("task-input");



    function addTask  (){
        let taskText=taskInput.value.trim();
        if(taskText ===""){
            alert("enter a task.");
            return;
        }
        const Items =document.createElement("li");
        Items.textContent= taskText;


        const removeButton =document.createElement("button");
        removeButton.textContent="Remove";
        removeButton.classList.add="remove-btn";
        removeButton.addEventListener("onClick", ()=>{
           
            taskList.removeChild(Items);

        });
        Items.appendChild(removeButton);
        taskList.appendChild(Items);
        taskInput.value="";
    
    };
    addButton.addEventListener("click",addTask);
    taskInput.addEventListener("keypress",()=>{
        if(event.key==="Enter"){
            addTask();
        }
});

});
