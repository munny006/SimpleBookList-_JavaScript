const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

const button = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");


button.addEventListener("click", function() {
    if (titleInput.value == "" && authorInput.value == "" && isbnInput.value == "") {
        alert("Enter Any Input");
    } else {

    }
})