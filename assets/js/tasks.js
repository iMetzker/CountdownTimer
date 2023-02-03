const form = document.querySelector('.tasks-content');
const inputForm = document.querySelector('#tasks-input');
const listForm = document.querySelector('#tasks-list');
const editForm = document.querySelector('#tasks-edit-form');
const editInput = document.querySelector('#tasks-edit-input');
const cancelEdit = document.querySelector('#cancel-edit');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('envio previnido');
})