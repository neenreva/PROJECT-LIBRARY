const bookBtn = document.getElementById("book-submit");
const table = document.querySelector(".book-table");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");

let myLibrary = [
  {
    author: "Tolkien",
    title: "The Lord of the Rings",
    pages: 123,
    readStatus: "Finished Reading",
  },
  {
    author: "Lewis Caroll",
    title: "Alice in Wonderland",
    pages: 123,
    readStatus: "Plan on Reading",
  },
];

class Book {
  constructor(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

bookBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const status = document.querySelectorAll('input[name="myRadio"]');
  let readStatus;
  for (const rb of status) {
    if (rb.checked) {
      readStatus = rb.value;
    }
  }

  if (author === "" || title === "" || pages === "" || readStatus === undefined) {
    return alert(`All inputs need to be filled out`);
  }

  myLibrary.push(new Book(author.value, title.value, pages.value, readStatus));
  loadLibrary();
  clearForm()
});

const clearForm = function () {
  author.value = ''
  title.value = ''
  pages.value = ''
}

table.addEventListener('click', (e) => {
  let currentTitle = e.target.parentNode.parentNode.children[1].innerText;
  let bookIndex = myLibrary.indexOf(myLibrary.find(book => book.title === currentTitle))

  if(e.target.innerHTML === 'Plan on Reading') {
    myLibrary[bookIndex].readStatus = 'Currently Reading'
  }
  
  if(e.target.innerHTML === 'Currently Reading') {
    myLibrary[bookIndex].readStatus = 'Finished Reading'
  } 

  if(e.target.innerHTML === 'Finished Reading') {
    myLibrary[bookIndex].readStatus = 'Plan on Reading'
  } 

  if(e.target.innerHTML === 'Delete') {
    myLibrary.splice(bookIndex, bookIndex + 1)
  };
  loadLibrary()
})

const deleteBook = function () {
  
}

const loadLibrary = function () {
  table.innerHTML = `
  <thead>
    <tr>
      <th class="table-head">Author</th>
      <th class="table-head">Title</th>
      <th class="table-head">Number of Pages</th>
      <th class="table-head">Status</th>
      <th>Remove</th>
    </tr>
  </thead>`;
  myLibrary.forEach((book) => {
    const html = `
    <tbody>
      <tr>
        <td>${book.author}</td>
        <td><i>${book.title}</td>
        <td>${book.pages}</td>
        <td><button class="status btn">${book.readStatus}</button></td>
        <td><button class="delete btn">Delete</button></td>
      </tr>
    </tbody>
    `;

    table.insertAdjacentHTML("afterbegin", html);
  });
};

loadLibrary();
