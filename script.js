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
        this.myList.style.border = '3px solid #dddddd';
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

const myListShow = document.getElementById('mylistshow');
const myAddBooks = document.getElementById('myaddbooks');
const myTitleText = document.getElementById('text');
const myBookHide = document.getElementById('list-holder');
const myInputSection = document.getElementById('myinputs');
const myRedirectBttn = document.getElementById('bttn');
const myContactView = document.getElementById('mycontactview');
const myContact = document.getElementById('mycontact');

myInputSection.style.display = 'none';
myContact.style.display = 'none';

function myBooksAll() {
  myTitleText.style.display = 'block';
  myBookHide.style.display = 'block';
  myInputSection.style.display = 'none';
  myContact.style.display = 'none';
}

myListShow.addEventListener('click', myBooksAll);

function myBookAdd() {
  myTitleText.style.display = 'none';
  myInputSection.style.display = 'block';
  myBookHide.style.display = 'none';
  myContact.style.display = 'none';
}

myAddBooks.addEventListener('click', myBookAdd);

function myButtonRedirect() {
  myTitleText.style.display = 'block';
  myBookHide.style.display = 'block';
  myInputSection.style.display = 'none';
}

myRedirectBttn.addEventListener('click', myButtonRedirect);

function myContactShow() {
  myContact.style.display = 'block';
  myTitleText.style.display = 'none';
  myBookHide.style.display = 'none';
  myInputSection.style.display = 'none';
}

myContactView.addEventListener('click', myContactShow);