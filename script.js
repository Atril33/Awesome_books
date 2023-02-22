const myTitle = document.getElementById('input');
const myAuthor = document.getElementById('input1');
const myAdd = document.getElementById('bttn');
const myList = document.getElementById('list-holder');
const Error = document.getElementById('error');

const BOOKS_KEY = 'awesome-books';
let books = JSON.parse(localStorage.getItem(BOOKS_KEY)) || [];
function saveBooks() {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
}

function addBook() {
  const title = myTitle.value.trim();
  const author = myAuthor.value.trim();

  if (title && author) {
    const book = { title, author };
    books.push(book);
    saveBooks();
    /* eslint-disable */
    renderBooks();
    myTitle.value = "";
    myAuthor.value = "";
    Error.textContent = "";
  } else {
    Error.textContent = "Please enter both title and author";
  }
}

function removeBook(title) {
  books = books.filter((book) => book.title !== title);
  saveBooks();
  /* eslint-disable */
  renderBooks();
}

function renderBooks() {
  myList.innerHTML = "";

  if (books.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.textContent = "No books in collection";
    myList.appendChild(emptyMessage);
  } else {
    books.forEach((book) => {
      const li = document.createElement("li");
      li.innerHTML = `${book.title} <br/> ${book.author}  <br/>`;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => removeBook(book.title));
      li.appendChild(removeBtn);
      myList.appendChild(li);
      const hr = document.createElement("hr");
      li.appendChild(hr);
    });
  }
}

myAdd.addEventListener("click", addBook);

renderBooks();
