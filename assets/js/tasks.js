const form = document.querySelector('.tasks-content');
const inputAddTask = document.querySelector('#tasks-input');
const listTasks = document.querySelector('.tasks-list');
const editForm = document.querySelector('#tasks-edit-form');
const editInput = document.querySelector('#tasks-edit-input');
const cancelEdit = document.querySelector('#cancel-edit');

// CAPTURE TASK
const saveTask = (text) => {
    const scopeForm = document.createElement('div');
    scopeForm.classList.add ('list');

    //TITLE
    const scopeTitle = document.createElement('h3');
    scopeTitle.innerText = text;
    scopeForm.appendChild(scopeTitle);

    // BUTTONS
   const doneBtn = document.createElement('button');
   doneBtn.classList.add('finish-task');
   doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
   scopeForm.appendChild(doneBtn);

   const editBtn = document.createElement('button');
   editBtn.classList.add('edit-task');
   editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
   scopeForm.appendChild(editBtn);

   const removeBtn = document.createElement('button');
   removeBtn.classList.add('remove-task');
   removeBtn.innerHTML = `<i class="fa-solid fa-remove"></i>`;
   scopeForm.appendChild(removeBtn);

   listTasks.appendChild(scopeForm);

   inputAddTask.value = '';
   inputAddTask.focus();
   
}

// SAVE TASK
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue =  inputAddTask.value;

    if (inputAddTask) {
        saveTask(inputValue);
    }
})

