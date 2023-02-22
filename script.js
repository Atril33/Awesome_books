const Error = document.getElementById('error');
const myText = document.getElementById('text');

class BookCollection {
  constructor() {
    this.BOOKS_KEY = 'awesome-books';
    this.books = JSON.parse(localStorage.getItem(this.BOOKS_KEY)) || [];
    this.myTitle = document.getElementById('input');
    this.myAuthor = document.getElementById('input1');
    this.myAdd = document.getElementById('bttn');
    this.myList = document.getElementById('list-holder');
  }

  saveBooks() {
    localStorage.setItem(this.BOOKS_KEY, JSON.stringify(this.books));
  }

  addBook() {
    const title = this.myTitle.value.trim();
    const author = this.myAuthor.value.trim();

    if (title && author) {
      const book = { title, author };
      this.books.push(book);
      this.saveBooks();
      this.renderBooks();
      this.myTitle.value = '';
      this.myAuthor.value = '';
      Error.textContent = '';
    } else {
      Error.textContent = 'Please enter both title and author';
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    this.saveBooks();
    this.renderBooks();
  }

  renderBooks() {
    this.myList.innerHTML = '';

    if (this.books.length === 0) {
      const emptyMessage = document.createElement('li');
      emptyMessage.textContent = 'No books in collection';
      this.myList.appendChild(emptyMessage);
    } else {
      this.books.forEach((book) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.title} by ${book.author}  <br/>`;
        li.classList = 'list-items';
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList = 'remove-bttn';
        removeBtn.addEventListener('click', () => this.removeBook(book.title));
        li.appendChild(removeBtn);
        this.myList.appendChild(li);
        this.myList.style.border = '2px solid #000';
        myText.style.display = 'block';
        const hr = document.createElement('hr');
        li.appendChild(hr);
        const myListItems = document.querySelectorAll('.list-items');
        const myLength = this.myList.childElementCount;
        for (let i = 0; i < myLength; i += 2) {
          myListItems[i].style.backgroundColor = '#dddddd';
        }
      });
    }
  }

  init() {
    this.myAdd.addEventListener('click', () => this.addBook());
    this.renderBooks();
  }
}

const bookCollection = new BookCollection();
bookCollection.init();
