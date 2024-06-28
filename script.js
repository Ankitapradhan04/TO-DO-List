const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
  // Get the task value from the input field
  const taskValue = todoInput.value.trim();

  // Check if the task value is empty
  if (taskValue) {
    // Create a new list item (li) element
    const newListItem = document.createElement('li');
    newListItem.textContent = taskValue;

    // Add a click event listener to the list item to mark it as completed
    newListItem.addEventListener('click', function() {
      this.classList.toggle('completed');
    });

    // Add the new list item to the to-do list
    todoList.appendChild(newListItem);

    // Clear the input field
    todoInput.value = '';
  }
});
