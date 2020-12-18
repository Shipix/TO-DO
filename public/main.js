//............................................declaration des task
let inpTask = document.querySelector('#task');
let addTask = document.querySelector('#addTask');
let body  = document.querySelector('body');
//............................................declaration des boutons filtre
let faire = document.querySelector('#faire');
let finish = document.querySelector('#finish');
let tous = document.querySelector("#tous");

//..............................................dashboard
let dashboard = document.querySelector('#dashboard')
//..............................................mon button ajouter
addTask.addEventListener("click",newTasks)
//.............................................ma fonction qui me permet de generer ma nouvelle task
function newTasks() {
    let task = document.createElement("div");
    task.setAttribute("class","newTask",);

//.............................................................
    let para = document.createElement("input");
    para.setAttribute("class","para");
    para.setAttribute("type","value");
    para.value = inpTask.value;
    para.disabled = true

    let ico1 = document.createElement("i");
    let ico2 = document.createElement("i");
    let ico3 = document.createElement("i");

    ico1.setAttribute("class","fas fa-check-circle mx-2")
    ico2.setAttribute("class","fas fa-edit mx-2")
    ico3.setAttribute("class","fas fa-trash-alt mx-2")

    ico1.setAttribute("id","ico1")
    ico1.addEventListener("click",function () {
        console.log("oklm");
        ico1.style.color = "green"
        task.style.backgroundColor = "rgb(9, 216, 164)"
        para.style.backgroundColor = "rgb(9, 216, 164)"
        

    })
    //.........................................edit

    ico2.setAttribute("id","ico2")
    ico2.addEventListener("click",function () {
        ico2.style.color = "green"
            para.disabled = false;
    })
    para.addEventListener("blur",function () {
            para.disabled = true;
            ico2.style = "inital"
            ico1.style.color = "red"
            if(ico1.style.color = "red"){
                task.style.backgroundColor = "rgb(238, 154, 85)"
                para.style.backgroundColor = "rgb(238, 154, 85)"
            }
    })
    //.........................................
    //.........................................trash
    ico3.setAttribute("id","ico3")
    ico3.addEventListener("click",function () {
        console.log("oklm");
        ico3.style.color = "red"
        dashboard.removeChild(task)
    })

    dashboard.appendChild(task);
    task.append(para,ico1,ico2,ico3);


}
//..............................................

//..............................................declaration de mes icones
let ico2 = document.querySelector("#ico2");
let ico3 = document.querySelector("#ico3");

//..........................................fonctionalité du filtre

faire.addEventListener("click",function () {

        console.log("faire");
        let newTask = document.querySelectorAll(".newTask");

        newTask.forEach(newTask=>{
    
            if(newTask.style.backgroundColor == "rgb(238, 154, 85)"){
                newTask.style.display = "inherit"
            }else if (newTask.style.backgroundColor == "rgb(9, 216, 164)"){
                newTask.style.display = "none"
            }else{
                newTask.style.display = "inherit"
            }
        })
        
})



tous.addEventListener("click",function () {
    let newTask = document.querySelectorAll(".newTask");
    newTask.forEach(newTask=>{
    
        if(newTask.style.backgroundColor == "rgb(238, 154, 85)"){
            console.log("lol")
            newTask.style.display = "inherit"
        }else{
            newTask.style.display = "inherit" ;
        }
    })
    console.log("tous");
})

finish.addEventListener("click",function () {
    let newTask = document.querySelectorAll(".newTask");
    console.log("finish")
    console.log(newTask);
    newTask.forEach(newTask=>{

        if(newTask.style.backgroundColor == "rgb(9, 216, 164)"){
            newTask.style.display = "inherit"
        }else{
            newTask.style.display = "none";
        }
    })

})