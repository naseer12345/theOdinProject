// code is little unorganized, sorry. im feeling sleepy now.

alert("first create a project, click on that project and add todo.")
alert("you can make unlimited projects and umlimited todos in them")



let projectDiv = document.querySelector(".projects")
let todosDiv = document.querySelector(".todos") 
let addTodoBtn = document.querySelector(".addTodo")
let listOfProjectDiv = []
let addProjectsBtn = document.querySelector(".addProjects")
let listOfProjectObjs = []




// this is for getting the input for the todos and then adding to the obj array. 
// we need to make a function, that will call a obj and add the data into its array.
const inputTitle = document.querySelector('#title')
const inputDescription = document.querySelector('#description')
const inputDueDate = document.querySelector('#dueDate')
addTodoBtn.addEventListener("click", ()=>{
    listOfProjectObjs.forEach((item) => {
        if (item.state) {
            item.todosForThisObj.addNewTodo(inputTitle.value, inputDescription.value, inputDueDate.value);
            console.log(item);
        } else if(listOfProjectObjs.every(item => item.state === false)) {
            alert("please select a project then the todo");
        }
    });
    
    
    inputTitle.value = ''
    inputDescription.value = ''
    inputDueDate.value = ''
    
})



function addProjects(title, calledObj){
    const h = document.createElement("h1")
    const button = document.createElement("button")
    const div = document.createElement("div")
    button.textContent = "Delete this project"
    h.textContent = title;
    button.addEventListener("click", ()=>{deleteProject(div)})
    // this event is just to check which project div we clicked on so then we can add teh todo in new todos in obj that state is true 
    // i can put this in outside fucntion, but man fuck it, not now. when i get chance i will put it out side, now just complete this shitty project
    div.addEventListener('click', ()=>{


        const currentDivsInTodoDiv = document.querySelectorAll(".todos div" )
        // now we gonna remove all the current divs
        currentDivsInTodoDiv.forEach((item) =>{
            item.remove()
        })




        listOfProjectObjs.map((item)=>{
            if(item !== calledObj && item.state == true){
                item.state = false
            }
            calledObj.state = true
            const addToTodoDiv = document.querySelector(".todos")
            // now we gonna add all of the calledobj divs inside it 
            calledObj.todosForThisObj.array.map((item) =>{
                addToTodoDiv.appendChild(item)
            })
            

           


        })
    })
    div.append(h,button)
    projectDiv.appendChild(div)
    listOfProjectDiv.push(div)

}

// we will be calling this when we click on addTodo btn, its job is to just create the task. DONT SCANN, DO NOTHING ELSE
function addTodos (title,description,date, obj){
    console.log(obj.array)
    const taskDiv = document.createElement('div')

    const h = document.createElement("h1")
    const p = document.createElement("p")
    const dueDate = document.createElement("p")
    const button = document.createElement("button")
    button.textContent = "Delete this todo"
    h.textContent = title;
    p.textContent = description;
    dueDate.textContent = date
    button.addEventListener("click", () => deleteTodoDiv(taskDiv , obj))
    taskDiv.append(h,p,dueDate,button)
    todosDiv.appendChild(taskDiv)
    obj.array.push(taskDiv)

    return taskDiv
   
   
}


   // this function is for deleting elements inside the arrays of both i thing
   function deleteProject(div){
    listOfProjectDiv =  listOfProjectDiv.filter(item => item !==  div)
        console.log(div)
         div.remove()
         console.log(listOfProjectDiv)
 
    
    }
    

function deleteTodoDiv(divToDelete, obj){
    // console.log(listOfTodos)
        obj.array = obj.array.filter(something => something !==  divToDelete)
        console.log(divToDelete)
        divToDelete.remove()
        console.log(obj.array)

    
   
}



// objs should have array that will contain all the taks divs. so when we click on every projects div we will scann the objects array t print the divs 

function CreateProjects(title){
    this.title = title 
    this.state = false

    this.todosForThisObj = new CreateTasks()
    this.addProject = function(){
        addProjects(title, this)
    }
    
    listOfProjectObjs.push(this)
}





function CreateTasks(title, description,duedate ){
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.array = []
   
    this.addTodo = function(){
        
        addTodos(title, description,duedate ,this)    }

    // this deletes the div inside the objects array, worked when i had only one item in the array
    this.deleteTodo = function(){
        this.array =  this.array.filter(something => something !==  taskDiv)
    }
    // now this adds new div to the objs array, which is good.
    this.addNewTodo = function(newTitle, newDescription, newDate){
        addTodos(newTitle,newDescription,newDate , this)

    }
    this.printObjsDivs = function(){
        this.array.map(item =>{
            console.log(item)
        })
    }

}








addProjectsBtn.addEventListener("click" , ()=>{
    const inputProjectDescription = document.querySelector("#inputPorjectDescription")
    const project = new CreateProjects(inputProjectDescription.value)
    project.addProject()
    
    console.log(project)
    inputProjectDescription.value= ''

    
   })
   


   
       
  
   

 