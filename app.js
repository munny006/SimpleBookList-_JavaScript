const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");
const alert = document.querySelector("#alert");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (title.value == "" && author.value == "" && isbn.value == "") {
  alert.classList.remove("invisible")
  alert.classList.add("visible")
  } else {
  alert.classList.add("invisible")
    const newRow = document.createElement("tr");

    //create a new title

    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    const newIsbn = document.createElement("th");
    newIsbn.innerHTML = isbn.value;
    newRow.appendChild(newIsbn);

    bookList.appendChild(newRow);
  }
});
