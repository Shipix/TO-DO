//............................................declaration des task
let inpTask = document.querySelector('#task');
let addTask = document.querySelector('#addTask');
let body  = document.querySelector('body');
//............................................declaration des boutons
let faire = document.querySelector('#faire');
let finish = document.querySelector('#finish');
let tous = document.querySelector("#tous");

//..............................................dashboard
let dashboard = document.querySelector('#dashboard')
//..............................................mon button ajouter
addTask.addEventListener("click",function() {
    newTask()
})
//.............................................ma fonction qui me permet de generer ma nouvelle task
function newTask() {
    let task = document.createElement("div");
    task.setAttribute("class","newTask");
    dashboard.appendChild(task);
}
//..............................................


