














const inputTitle = document.querySelector('#title')
const inputDescription = document.querySelector('#description')
const inputDueDate = document.querySelector('#dueDate')








// main objictive it to put making array for each of the createtasks in their own object
// so when clicking the obj, we can call its array and print all of the insde divs
// no matter how many projects we have, the contructor wwill make new arr for every obj


// i think i need to have new array for every project, by creating a project i need to make new array
// by clicking on any objects div i will then call that array, map through it and print what every its in it to the div, fuckkkkkk.

let projectDiv = document.querySelector(".projects")
let todosDiv = document.querySelector(".todos") 
let addTodoBtn = document.querySelector(".addTodo")
let addProjectsBtn = document.querySelector(".addProjects")

// let listOfProjects = []
let listOfTodos = []


addTodoBtn.addEventListener("click", ()=>{
    console.log("add todoss bro ")
    console.log(inputDescription.value)
    
})
addProjectsBtn.addEventListener("click" , ()=>{
 const project = new CreateProjects("test", "description test" , '3 days')
 listOfProjects.push(project)
 console.log(listOfProjects)
})

// this function is for deleting elements inside the arrays of both i thing
// function testing (objToDelete){
//     listOfTodos =  listOfTodos.filter(something => something !==  objToDelete)

// }


function deleteTodoDiv(divToDelete){
    console.log(listOfTodos)
        listOfTodos =  listOfTodos.filter(something => something !==  divToDelete)
        console.log(divToDelete)
        divToDelete.remove()
        console.log(listOfTodos)

    
   
}


// we will be calling this when we click on addTodo btn, its job is to just create the task. DONT SCANN, DO NOTHING ELSE
function addTodos (title,description,date){
    const taskDiv = document.createElement('div')

    const h = document.createElement("h1")
    const p = document.createElement("p")
    const dueDate = document.createElement("p")
    const button = document.createElement("button")
    button.textContent = "Delete this todo"
    h.textContent = title;
    p.textContent = description;
    dueDate.textContent = date
    button.addEventListener("click", () => deleteTodoDiv(taskDiv))
    taskDiv.append(h,p,dueDate,button)
    todosDiv.appendChild(taskDiv)
    listOfTodos.push(taskDiv)

    return
   
   
}
function addProjects(title, description, date){
    const h = document.createElement("h1")
    const p = document.createElement("p")
    const dueDate = document.createElement("p")
    const button = document.createElement("button")
    button.textContent = "Delete this todo"
    h.textContent = title;
    p.textContent = description;
    dueDate.textContent = date
    button.addEventListener("click", deleteDiv)
    todosDiv.append(h,p,dueDate,button)

}








function CreateTasks(title, description,duedate ){
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.addTodo = function(){
        addTodos(title, description,duedate)
    }

}

// objs should have array that will contain all the taks divs. so when we click on every projects div we will scann the objects array t print the divs 

// this obj inhereting bug
function CreateProjects(title, projectdescription, dueDate){
    const {description, duedate} = new CreateTasks(title, this.projectdescription , this.dueDate)
    this.title = title 

    this.addProject = function(){
        addProjects(title, description,duedate)
    }
}


const khan = new CreateTasks("blah blah","nothing to add", "4")
const khan2 = new CreateTasks("a project name" , "project description" , "34")
const khan3 = new CreateTasks("a project name 3" , "project description 3" , "3")

khan.addTodo()
khan2.addTodo()
khan3.addTodo()

// console.log(listOfTodos[0].outerText)


// listOfTodos.map(obj=>{
    
//     console.log(obj.title, obj.description , obj.duedate)
// })


