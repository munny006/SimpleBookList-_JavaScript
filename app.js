const title = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', e => {
    e.preventDefault();
    if (title.value == '' && author.value == '' && isbn.value == '') {
        alert('Enter Your Data');
        return;
    }

    //Check if ISBN is valid
    if(isNaN(isbn.value.replaceAll('-', ''))) {
        alert('Invalid ISBN');
        return;
    }

    const newRow = document.createElement('tr');

    //create a new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    const newIsbn = document.createElement('th');
    newIsbn.innerHTML = isbn.value;
    newRow.appendChild(newIsbn);

    bookList.appendChild(newRow);    
});