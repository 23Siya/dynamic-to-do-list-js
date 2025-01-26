document.addEventListener("DOMContentLoaded", () => {

    localStorage.getItem('tasks');
    
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    };
    
    const addButton = document.getElementById("add-task-btn");
    const taskList= document.getElementById("task-list");
    const taskInput= document.getElementById("task-input");

     // Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
     function addTask(taskText, save = true) {
        // Task creation logic remains the same

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

    
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    };

    addButton.addEventListener("click",addTask);
    taskInput.addEventListener("keypress",()=>{
        if(event.key==="Enter"){
            addTask();
        }
});



});
