const bookBtn = document.getElementById("book-submit");
const table = document.querySelector(".book-table");

let myLibrary = [
  {
    author: "James",
    title: "I like to things",
    pages: "1234",
    readStatus: undefined,
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
  let author = document.querySelector("#author").value;
  let title = document.querySelector("#title").value;
  let pages = document.querySelector("#pages").value;
  //let status = document.querySelector()

  myLibrary.push(new Book(author, title, pages));
  loadLibrary();
});

const loadLibrary = function () {
  
    table.insertAdjacentHTML(
      "afterbegin",
      `
    <tbody>
        <tr>
          <td>${myLibrary[myLibrary.length-1].author}</td>
		      <td><i>${myLibrary[myLibrary.length-1].title}</td>
		      <td>${myLibrary[myLibrary.length-1].pages}</td>
		      <td>Currently Reading</td>
        </tr>
      </tbody>
    `
    );
};

loadLibrary();
