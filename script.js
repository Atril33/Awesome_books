class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
     /* eslint-disable */
    this.books = JSON.parse(localStorage.getItem(BOOKS_KEY)) || [];
    this.myTitle = document.getElementById('input');
    this.myAuthor = document.getElementById('input1');
    this.myAdd = document.getElementById('bttn');
    this.myList = document.getElementById('list-holder');
    this.Error = document.getElementById('error');
    this.myText = document.getElementById('text');
  }

  addBook() {
    const title = this.myTitle.value.trim();
    const author = this.myAuthor.value.trim();

    if (title && author) {
      const book = new Book(title, author);
      this.books.push(book);
      this.saveBooks();
      this.renderBooks();
      this.myTitle.value = "";
      this.myAuthor.value = "";
      this.Error.textContent = "";
    } else {
      this.Error.textContent = "Please enter both title and author";
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    this.saveBooks();
    this.renderBooks();
  }

  saveBooks() {
     /* eslint-disable */
    localStorage.setItem(BOOKS_KEY, JSON.stringify(this.books));
  }

  renderBooks() {
    this.myList.innerHTML = "";

    if (this.books.length === 0) {
      const emptyMessage = document.createElement("li");
      emptyMessage.textContent = "No books in collection";
      this.myList.appendChild(emptyMessage);
    } else {
      this.books.forEach((book) => {
        const li = document.createElement("li");
        li.innerHTML = `${book.title} by ${book.author}  <br/>`;
        li.classList = "list-items";
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList = "remove-bttn";
        removeBtn.addEventListener("click", () => this.removeBook(book.title));
        li.appendChild(removeBtn);
        this.myList.appendChild(li);
        this.myList.style.border = "2px solid #000";
        this.myText.style.display = "block";
        const hr = document.createElement("hr");
        li.appendChild(hr);
        const myListItems = document.querySelectorAll(".list-items");
        const myLength = this.myList.childElementCount;
        for (let i = 0; i < myLength; i += 2) {
          myListItems[i].style.backgroundColor = "#dddddd";
        }
      });
    }
  }

  init() {
    this.myAdd.addEventListener("click", () => this.addBook());
    this.renderBooks();
  }
}

const BOOKS_KEY = "awesome-books";
const bookCollection = new BookCollection();
bookCollection.init();
