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
        bnP.textContent = this.bookName;
        aut.textContent= this.author;
        num.textContent = this.pages;
        readOrnot.textContent = this.readornot;
        div.append(bnP,aut,readOrnot,num)
        displayBooks.appendChild(div)
        console.log(div)

    }

  

}
let arr = []

function getvalue(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const bookname = document.getElementById("bookName").value;
    const checkbox = document.getElementById("checkbox").checked;
    const numberofpages = document.getElementById("number").value;
    const author = document.getElementById("author").value;

    const book = new Book(bookname, author, checkbox, numberofpages)
    

    book.show()

    
    
    document.getElementById("my-form").reset();


}


function printBooks(item){
    }



    const book1 = new Book(11,22, true)
    arr.push(book1)
    const book2= new Book(22,44,true)
    arr.push(book2)
    arr.map( item => printBooks(item))
    

    console.log(arr)






//     Object.keys(item).map(key => {
//         const div = document.createElement("div")
//         const p = document.createElement("p")
//         p.textContent = item[key]
        
//         displayBooks.appendChild(p)
//         console.log(item[key])



// })