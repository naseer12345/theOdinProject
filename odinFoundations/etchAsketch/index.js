
const sketchDiv = document.querySelector(".sketchDiv");
let i = 0;

for (i; i < 2000; i++) {
    const divs = document.createElement("div"); 
    sketchDiv.appendChild(divs);
}

let eraserBTN = document.querySelector(".eraserBTN")
let drawing = false;
let wantToErase = false;
let erasing = false;
function eraser(){
    wantToErase = true;
    
   eraserBTN.textContent = "Eraser on"

}

function  mouseEnter(){
if(erasing){
    this.style.background = "none"
}
if(drawing){
    this.style.background = "black"
}

}
function mouseDown(){
    if(!wantToErase){
        this.style.background = "black"
        drawing = true;
    }else{     
       this.style.background = "none"
        erasing = true
    }
        
        
    
}
function changeStates(){
    drawing = false;
    erasing= false;
    wantToErase = false;
    eraserBTN.textContent = "Eraser off"

    
}
const divsOfParentDiv = sketchDiv.querySelectorAll("div")
console.log(divsOfParentDiv)
divsOfParentDiv.forEach((divItems)=>{
  divItems.addEventListener("mousedown", mouseDown)
  divItems.addEventListener("mouseenter", mouseEnter)
  divItems.addEventListener("mouseup", changeStates)
})
console.log(erasing)