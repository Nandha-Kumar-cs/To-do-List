function addTask() {
    const inputValue = document.getElementById("input-value");
    let taskList = document.getElementById("list-Container");
    
    let newTask = inputValue.value;

    if (newTask === '') {
        alert('enter the task and add');
    } else {
        let newTaskItem = document.createElement('li');
        newTaskItem.textContent = newTask;
        
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        
       


        newTaskItem.appendChild(span);
        taskList.appendChild(newTaskItem);

        
        inputValue.value = '';

        // Add an event listener to remove the task when the "x" is clicked
        span.addEventListener("click", function() {
            taskList.removeChild(newTaskItem);
        });
    }
}
