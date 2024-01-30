function Book(bookName,author, number){
    
    this.bookName = bookName;
    this.author = author;
    this.number = number;

  

}
let arr = []

function getvalue(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const input = document.getElementById("bookName").value;
    const inputt = document.getElementById("checkbox").checked;
    const number = document.getElementById("number").value;

    const book = new Book(input, inputt, number)
    console.log(book)
    
    Object.keys(book).forEach(key => {
        console.log(book[key]);
    });


    
    
    document.getElementById("my-form").reset();


}


