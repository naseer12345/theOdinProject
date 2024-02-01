
// 9 divs, by click the text content should be x or 0.  tasks: 
//1: turns, start with X they with O. give turn to both x and 0
//2: by clicking any div, that div child or node list should change the state in the defaultAray. to its coresponding 
// defaultAr location
//3: if any of player wins or returns true, it should state that what player won.
//so what we need?
// 1: a function that will that will change the text content of the div given and run all the fucntions 
// to check who won; 1st check if the text content already = x or 0 if yes alert you cant click again. 
// if not change the inner content, then run all fucntions if yes then return this.won. 
// for player turns, true and false. 

//  at the end if defaultAray is full, run all functions, if all the funciton are false then retun game draw.
// 1 for x and 0 for o  





let nextPlayer = true;
let defaultAr = [1,1,1,1,1,1,1,1,1]






let pointerForLeftToRightCheck = 0;
function validatingFromleftToRight (){
if (defaultAr[pointerForLeftToRightCheck] == defaultAr[pointerForLeftToRightCheck+1] ||  defaultAr[pointerForLeftToRightCheck+1] == defaultAr[pointerForLeftToRightCheck+2]) {
   function test(){
    if( defaultAr[pointerForLeftToRightCheck] !== 1 ||  defaultAr[pointerForLeftToRightCheck+1] !== 1 ){
        
        return true
    }else{
        if(pointerForLeftToRightCheck<=5){
            pointerForLeftToRightCheck = pointerForLeftToRightCheck+3;
            test()
               
            }else{
             
                return false
            }
        }
}}; 
}





let pointerForTopToBottomCheck = 0
function topToBottom(){

if(defaultAr[pointerForTopToBottomCheck] == defaultAr[pointerForTopToBottomCheck+3] || defaultAr[pointerForTopToBottomCheck+3] == defaultAr[pointerForTopToBottomCheck+6]
    &&
    defaultAr[pointerForTopToBottomCheck] !== "" || defaultAr[pointerForTopToBottomCheck+3] !== ""
    ){
    
    return true
    
}else{

    if(pointerForTopToBottomCheck<=1){
        pointerForTopToBottomCheck = pointerForTopToBottomCheck+1;
        
    topToBottom()
           
    }else{
            return false
  }  
};

}


let pointerForSideWays = 0
function sideWaysCheck(){
    if(defaultAr[pointerForSideWays] == defaultAr[pointerForSideWays+4] || defaultAr[pointerForSideWays+4] == defaultAr[pointerForSideWays+8]
        &&
        defaultAr[pointerForSideWays] !== "" || defaultAr[pointerForSideWays+4] !== ""
        ){
        return true
    }else{
        return false
    }
}

console.log(sideWaysCheck(), topToBottom(), validatingFromleftToRight())





const mainGameBoxChildren = document.querySelectorAll(".maingbchild")
mainGameBoxChildren.forEach(div => {
    div.addEventListener("click", ()=>{

        
        if(div.textContent == false){
            nextPlayer ? (div.textContent = "X" , defaultAr[div.getAttribute("data")] = "X", nextPlayer = false) : (div.textContent = "O", defaultAr[div.getAttribute("data")] = "O" , nextPlayer = true);
           console.log(pointerForLeftToRightCheck)
            if (validatingFromleftToRight()){
                nextPlayer? console.log("0 wins") : console.log("x wins")
            }
        }else{
            alert("you cant click again on the same spot")
        }
        console.log(defaultAr)

        
    })
})



