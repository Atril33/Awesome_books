const myTitle = document.getElementById('input');
const myAuthor = document.getElementById('input1');
const myAdd = document.getElementById('bttn');
const myList = document.getElementById('list-holder');
const Error = document.getElementById('error');

/// Book Title and Author Name getting and displaying on the screen ///
// function myValueBook() {
//   const myAuthorValue = myAuthor.value;
//   const myTitleValue = myTitle.value;
//   if (myTitleValue == '' && myAuthorValue == '') {
//     Error.innerText = 'Please Fill both Boxes';
//   } else {
//     const li = document.createElement('li');
//     li.innerHTML = `${myTitleValue} <br> ${myAuthorValue} <br>`;
//     const button = document.createElement('button');
//     button.classList = 'remove';
//     button.innerText = 'Remove';
//     li.appendChild(button);
//     myList.appendChild(li);
//   }
//   myTitle.value = '';
//   myAuthor.value = '';
// }

// myAdd.addEventListener('click', myValueBook);

/// Remove the items form List ////
// let remove = document.querySelector('ul');
// remove.addEventListener('click', function (e) {
//   const myList = document.getElementById('list-holder');
//   let li = e.target.parentNode;
//   myList.removeChild(li);
// });

/// Data save in local storage ///
// function myBookStore() {
//   let todos = JSON.parse(localStorage.getItem('todos')) || [];
//   const myObject = {
//     title: myTitle.value,
//     author: myAuthor.value,
//   };
//   if (myObject.title !== '' && myObject.author !== '') {
//     todos.push(myObject);
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }
// }
// myAdd.addEventListener('click', myBookStore);

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
    renderBooks();
    myTitle.value = '';
    myAuthor.value = '';
    Error.textContent = '';
  } else {
    Error.textContent = 'Please enter both title and author';
  }
}

function removeBook(title) {
  books = books.filter((book) => book.title !== title);
  saveBooks();
  renderBooks();
}

function renderBooks() {
  myList.innerHTML = '';

  if (books.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = 'No books in collection';
    myList.appendChild(emptyMessage);
  } else {
    books.forEach((book) => {
      const li = document.createElement('li');
      li.innerHTML = `${book.title} <br/> ${book.author}  <br/>`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => removeBook(book.title));
      li.appendChild(removeBtn);
      myList.appendChild(li);
      const hr = document.createElement('hr');
      li.appendChild(hr);
    });
  }
}

myAdd.addEventListener('click', addBook);

renderBooks();
