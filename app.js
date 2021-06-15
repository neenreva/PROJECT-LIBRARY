const bookWrapper = document.querySelector('.bookWrapper');
const form = document.querySelectorAll('.form');
const submitInput = form[0].querySelector('input[type="submit"]')

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() { return `${title} by ${author}, ${pages}, ${read}` }
}

function addBookToLibrary(e) {
    e.preventDefault();
    let formData = new Book(form[0])
    myLibrary.push(formData.getAll())
}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', addBookToLibrary, false)
}, false)

console.log(myLibrary);