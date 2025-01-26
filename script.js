document.addEventListener("DOMContentLoaded", () => {

    const addButton = document.getElementById("add-task-button");
    const taskList= document.getElementById("task-list");
    const taskInput= document.getElementById("task-input");



    function addTask  (){
        let taskText=taskInput.ariaValueMax.trim();
        if(taskText ===""){
            alert("enter a task.");
            return;
        }
        const Items =document.createElement("li");
        Items.textContent= taskText;


        const removeButtom =document.createElement("btn");
        removeButtom.textContent="Remove";
        removeButtom.className="remove-btn";
    };
});