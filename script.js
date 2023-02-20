const myTitle = document.getElementById("input");
const myAuthor = document.getElementById("input1");
const myAdd = document.getElementById("bttn");
const myList = document.getElementById("mylistholder");


function myBook() {
  const myListItems = document.createElement('li');
  myListItems.innerHTML = `${myTitle.value} <br> ${myAuthor.value} <br> <br> <button id="remove">Remove</button>`;
  myListItems.style.listStyle = "none";
  myList.appendChild(myListItems);
}

myAdd.addEventListener("click", myBook);
