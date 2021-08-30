const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e) {
    if(e.target.className === 'delete') {
        let li = e.target.parentElement;
        list.removeChild(li);
    }
});

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    bookName.classList.add('name');
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');

    //add content
    deleteBtn.textContent = ' delete';
    bookName.textContent = value;

    //append to dom
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});