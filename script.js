const myTitle = document.getElementById("input");
const myAuthor = document.getElementById("input1");
const myAdd = document.getElementById("bttn");
const myList = document.getElementById("list-holder");

function myValueBook() {
  const myTitleValue = myTitle.value;
  const myAuthorValue = myAuthor.value;

  if (myTitleValue == "" && myAuthorValue == "") {
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

myAdd.addEventListener("click", myValueBook);

let remove = document.querySelector("ul");
remove.addEventListener("click", function (e) {
  const myList = document.getElementById("list-holder");
  let li = e.target.parentNode;
  myList.removeChild(li);
});
