class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        // insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X <a></td>
        `
        list.appendChild(row);
    }

    deleteBook(target){
        if(target.className==='delete') {
            // traverse past the a-tag to upto the tr tag and remove 
            target.parentElement.parentElement.remove();
        }
    }

    showAlert(message, className){
        // Create div 
        const div = document.createElement('div');
        // Add classes 
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        // Insert alert
        container.insertBefore(div, form);

        // Timeout after 3 sec
        setTimeout( function() {
            document.querySelector('.alert').remove();
        }, 3000);
    
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event Listeners 
document.getElementById('book-form').addEventListener('submit', function(e) {
    // get form values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value
    
    // Instantiate Book object
    const book = new Book(title, author, isbn);

    // Instantiate UI object
    const ui = new UI();
    if(title === '' || author === '' || isbn === '') {

        ui.showAlert('Fields cannot be empty', 'error');

    } else {
        // Add book to list
        ui.addBookToList(book);

        // Add success banner
        ui.showAlert('Book added successfully', 'success');
    
        // Clear fields
        ui.clearFields();

    }
    console.log(ui);
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e){
    // instantiate UI
    const ui = new UI();

    // Delete book 
    ui.deleteBook(e.target);
    // Show alert for deletion of book
    ui.showAlert('Book removed from list', 'success')
    e.preventDefault();
})