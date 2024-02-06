// list of projects, every project will have different todos
//         there should be a default project, you can either make one not deleteable or 
//         you can make a function if there is no projects than 1 then we will be able to delete that.

// what you can do is to have different arrays for different projects. by clicking the project we will map
// inside the arrays or object and printout every data from it to the home screan


// what we need now? we need a div on the left to show the current projects, also a button to make new projects
// a home screen will be on the left, by clicking, it should display the project todos and then we will be able
// to add new todos to that project as well.


// we need a class for creating projects or to do list, i think the todo should be the main class
// the project will be the child class. 
// we need a static button to create for each project and todos

// we need one function to add todos and projects
// we need one function for deleting the todos and projects.
// we need another function to map all the children in the todos and projects div, it sould return this const
// and should be used in the delete div 
















// i think i need to have new array for every project, by creating a project i need to make new array
// by clicking on any objects div i will then call that array, map through it and print what every its in it to the div, fuckkkkkk.

let projectDiv = document.querySelector(".projects")
let todosDiv = document.querySelector(".todos") 
let addTodoBtn = document.querySelector(".addTodo")
let addProjectsBtn = document.querySelector(".addProjects")

let listOfProjects = []
let listOfTodos = []


addTodoBtn.addEventListener("click", ()=>{
    console.log("add todoss bro ")
})
addProjectsBtn.addEventListener("click" , ()=>{
 const project = new CreateProjects("test", "description test" , '3 days')
 listOfProjects.push(project)
 console.log(listOfProjects)
})

// this function is for deleting elements inside the arrays of both i thing
function testing (objToDelete){
    listOfTodos =  listOfTodos.filter(something => something !==  objToDelete)

}


function deleteTodoDiv(divToDelete){
        listOfTodos =  listOfTodos.filter(something => something !==  divToDelete)
        console.log(divToDelete)
        divToDelete.remove()
        console.log(listOfTodos)

    
    // now here you can delete that same div from the array, you need to add it first obvoisuly
}

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


// fix this issue or just make a single class, just put the name, or inherit just duedate from createTasks
function CreateProjects(title, projectdescription, dueDate){
    const {description, duedate} = new CreateTasks(title, this.projectdescription , this.dueDate)
    this.title = title 

    this.addProject = function(){
        addProjects(title, description,duedate)
    }
}


const khan = new CreateTasks("blak","nothing to add", "4")
const khan2 = new CreateTasks("a project name" , "project description" , "34")
const khan3 = new CreateTasks("a project name 3" , "project description 3" , "3")

khan.addTodo()
khan2.addTodo()
khan3.addTodo()




// listOfTodos.map(obj=>{
    
//     console.log(obj.title, obj.description , obj.duedate)
// })