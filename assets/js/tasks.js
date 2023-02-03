const form = document.querySelector('.tasks-content');
const inputAddTask = document.querySelector('#tasks-input');
const listTasks = document.querySelector('.tasks-list');
const editForm = document.querySelector('#tasks-edit-form');
const editInput = document.querySelector('#tasks-edit-input');
const cancelEdit = document.querySelector('#cancel-edit');
const addTaskInput = document.querySelector('#tasks-form');

let oldTitleValue;

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

    if (inputValue) {
        saveTask(inputValue);
    }
})

// HIDE FORM - EDIT MODE
const hideForm = () => {
    editForm.classList.toggle('hide');
    addTaskInput.classList.toggle('hide');
    listTasks.classList.toggle('hide');
}

// UPDATE TASK - EDIT MODE
const updateTask = (editInputvalue) => {
    const list = document.querySelectorAll('.list');

    list.forEach((list) => {
        let scopeTitle = list.querySelector('h3');

        if(scopeTitle.innerText === oldTitleValue) {
            scopeTitle.innerText = editInputvalue;
        }
    })

}

// ACTION BUTTON
document.addEventListener('click', (event) => {

    const targetEl = event.target;
    const parentEl = targetEl.closest('div');
    let titleTask;

    if (parentEl && parentEl.querySelector('h3')) {
        titleTask = parentEl.querySelector('h3').innerText;
    }
    if(targetEl.classList.contains('finish-task')){
        parentEl.classList.toggle('done');
    }
    if(targetEl.classList.contains('edit-task')) {
        hideForm();

        editInput.value = titleTask;
        oldTitleValue = titleTask;
    }
    if(targetEl.classList.contains('remove-task')) {
        parentEl.remove();
    }
} )

cancelEdit.addEventListener ('click', (event) => {
    event.preventDefault();
    hideForm();
})

editForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const editInputvalue = editInput.value;
    if(editInputvalue) {
        updateTask(editInputvalue);
    }
    hideForm();
})