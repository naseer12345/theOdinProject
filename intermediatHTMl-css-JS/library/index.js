const displayBooks = document.querySelector(".displayBooks");
let arr = [];

function Book(bookName, author, readornot, pages) {
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
    this.readornot = readornot;

    this.show = function() {
        const div = document.createElement("div");
        const bnP = document.createElement("p");
        const aut = document.createElement("p");
        const num = document.createElement("p");
        const readOrnot = document.createElement("p");
        const deletebtn = document.createElement("button");

        deletebtn.textContent = "Delete this item";
        deletebtn.addEventListener("click", () => {
            arr = arr.filter(book => book !== this);
            div.remove();
        });

        bnP.textContent = this.bookName;
        aut.textContent = this.author;
        num.textContent = this.pages;
        readOrnot.textContent = this.readornot;

        div.append(bnP, aut, readOrnot, num, deletebtn);
        displayBooks.appendChild(div);
        arr.push(this);
    };
}




function getvalue(event) {
    event.preventDefault(); 
    const bookname = document.getElementById("bookName").value;
    const checkbox = document.getElementById("checkbox").checked;
    const numberofpages = document.getElementById("number").value;
    const author = document.getElementById("author").value;

    const book = new Book(bookname, author, checkbox, numberofpages)
    book.show()
    document.getElementById("my-form").reset();

    console.log(arr)

}





