document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  function buildToDo(formInput) {
    const taskList = document.getElementById("tasks");
    const task = document.createElement("li");
    task.textContent = formInput;
    taskList.append(task);    
  }
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formInput = document.getElementById("new-task-description").value;
    buildToDo(formInput);
    
  });
});
