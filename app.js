const form = document.getElementById('add-book');
const table = document.getElementById('myTable');

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

function addBookToLibrary(book) {
  form.addEventListener('click', function(e) {
    e.preventDefault();
    const newBookInfo = e.target.parentElement();
    console.log(newBookInfo);
  })
}

function buildLibrary(data) {
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                  <td>${data[i].title}</td>
                  <td>${data[i].author}</td>
                  <td>${data[i].read}</td>
                </tr>`
    table.innerHTML += row
  }
}

let myLibrary = [ 
  new Book('Lullaby','Chuck Palahniuk','yes'), 
  new Book ('Choke','Chuck Palahniuk','yes'), 
  new Book('Deception Point','Dan Brown','yes'),
];

buildLibrary(myLibrary);
