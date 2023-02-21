const myTitle = document.getElementById("input");
const myAuthor = document.getElementById("input1");
const myAdd = document.getElementById("bttn");
const myList = document.getElementById("list-holder");
const Error = document.getElementById("error");

/// Data save in local storage ///
function myBookStore() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  let myObject = {};
  myObject.titel = myTitle.value;
  myObject.autor = myAuthor.value;
  todos.push(myObject);
  if (myTitle.value == "" && myAuthor.value == "") {
    todos = null;
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}
myAdd.addEventListener("click", myBookStore);


/// Book Title and Author Name getting and displaying on the screen ///
function myValueBook() {
  const myAuthorValue = myAuthor.value;
  const myTitleValue = myTitle.value;
  if (myTitleValue == "" && myAuthorValue == "") {
    Error.innerText = "Please Fill both Boxes";
  } else {
    const li = document.createElement("li");
    li.innerHTML = `${myTitleValue} <br> ${myAuthorValue} <br>`;
    const button = document.createElement("button");
    button.classList = "remove";
    button.innerText = "Remove";
    li.appendChild(button);
    myList.appendChild(li);
  }
  myTitle.value = "";
  myAuthor.value = "";
}

/// Remove the items form List ////

myAdd.addEventListener("click", myValueBook);

let remove = document.querySelector("ul");
remove.addEventListener("click", function (e) {
  const myList = document.getElementById("list-holder");
  let li = e.target.parentNode;
  myList.removeChild(li);
});
