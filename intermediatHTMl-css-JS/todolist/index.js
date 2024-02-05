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



let projectDiv = document.querySelector(".projects")
let todosDiv = document.querySelector(".todos") 
let addTodoBtn = document.querySelector(".addTodo")
let addProjects = document.querySelector(".addProjects")

let listOfProjects = []


addTodoBtn.addEventListener("click", ()=>{
    console.log("add todoss bro ")
})
addProjects.addEventListener("click" , ()=>{
 const project = new CreateProjects("test", "description test" , '3 days')
 listOfProjects.push(project)
 console.log(listOfProjects)
})





function deleteDiv(){
    console.log(this)
}

function addTodos (text){
    const h = document.createElement("h1")
    const p = document.createElement("p")
    const button = document.createElement("button")
    button.textContent = "Delete this todo"
    h.textContent = text
    p.textContent = text
    button.addEventListener("click", deleteDiv)
    todosDiv.append(h,p,button)
}



addTodos("hsle kj")






function CreateTasks(title, description,dueDate ){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

}

function CreateProjects(title){
    const {description, dueDate} = CreateTasks(title)
    this.title = title    
}