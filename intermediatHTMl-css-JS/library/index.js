const displayBooks = document.querySelector(".displayBooks")


function Book(bookName,author, readornot ,pages){
    
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
    this.readornot = readornot;
    this.show = function(){
        const div = document.createElement("div")
        const bnP = document.createElement("p")
        const aut = document.createElement("p")
        const num = document.createElement("p")
        const readOrnot = document.createElement("p")
        const deletebtn = document.createElement("button")
        deletebtn.addEventListener("onclick" , function deleteItemInArr(){
            console.log(arr)
        })
        bnP.textContent = this.bookName;
        aut.textContent= this.author;
        num.textContent = this.pages;
        readOrnot.textContent = this.readornot;
        div.append(bnP,aut,readOrnot,num)
        displayBooks.appendChild(div)
        console.log(div)
        arr.push(this)
    
    }
    this.remove()

  

}
let arr = []

function getvalue(event) {
    event.preventDefault(); 
    const bookname = document.getElementById("bookName").value;
    const checkbox = document.getElementById("checkbox").checked;
    const numberofpages = document.getElementById("number").value;
    const author = document.getElementById("author").value;

    const book = new Book(bookname, author, checkbox, numberofpages)
    book.show()
    document.getElementById("my-form").reset();


}



    // const book1 = new Book(11,22, true)
    // arr.push(book1)
    // const book2= new Book(22,44,true)
    // arr.push(book2)
    // arr.map( item => printBooks(item))
    

    // console.log(arr)


