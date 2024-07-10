document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // Get the Add button and the task input elements
   const addButton = document.querySelector("#add-btn");
   const taskInput = document.querySelector("#new-task");

   // Register addBtnClick as the click event handler for the Add button
   addButton.addEventListener("click", addBtnClick);

   // Register a keyup event handler for the task input to handle Enter key press
   taskInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
}

function addBtnClick() {
   // Get the value of the task input and trim any leading/trailing whitespace
   const taskInput = document.querySelector("#new-task");
   const newTaskText = taskInput.value.trim();

   // If the task input is not empty, add the task
   if (newTaskText !== "") {
      addTask(newTaskText);

      // Clear the task input and focus back on the input box
      taskInput.value = "";
      taskInput.focus();
   }
}

function addTask(task) {
   // Get the ordered list element
   const taskList = document.querySelector("ol");

   // Create a new list item element
   const newTaskItem = document.createElement("li");

   // Set the inner HTML of the new list item with the task text and a remove button
   newTaskItem.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;

   // Append the new list item to the ordered list
   taskList.appendChild(newTaskItem);

   // Get all remove buttons and register removeTask as the click event handler for the last one
   const doneButtons = document.querySelectorAll(".done-btn");
   const lastButton = doneButtons[doneButtons.length - 1];
   lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
   // Get the parent list item of the clicked remove button
   const taskItem = event.target.parentNode;

   // Remove the list item from the ordered list
   taskItem.parentNode.removeChild(taskItem);
}
