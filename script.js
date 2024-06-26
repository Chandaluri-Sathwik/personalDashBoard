// input
const  emptyImage=document.querySelector(".emptyImage");
let todosJson=JSON.parse(localStorage.getItem("todos")) ||[];
const deleteAllBtn=document.querySelector(".deleteAll");
const filters=document.querySelectorAll(".filter");
const addBtn=document.querySelector(".addBtn");
const todosHtml=document.querySelector(".todos");
const input=document.querySelector(".todoInput");
let background=document.querySelector(".background");
let aside=document.querySelector("aside");
let  filter="";
let screenWidth=screen.width;
showTodos();
//To Show SideBar
function showSidebar(){
    if(screenWidth<=900){
    const sidebar = document.querySelector('aside')
    sidebar.style.display ='block';
    sidebar.style.position='absolute';
    sidebar.style.background="white";
    sidebar.style.zIndex=4;
    sidebar.style.height="100%";}
}
//To close Sidebar
function closeSideBar(){
    const sidebar=document.querySelector("aside");
    sidebar.style.display="none";
}
//To get to do list items
function getTodoHtml(todo,index){
    if(filter && filter !=todo.status){
        return "";
    }
    let checked=todo.status=="completed" ? "checked": "";
    return ` 
    <li class="todo">
        <label for="${index}">
            <input id="${index}" onclick="updateStatus(this)"  type="checkbox" ${checked}>
            <span class="${checked}" >&nbsp;&nbsp;${todo.name}</span>
        </label>
        <button class="deleteBtn" data-index="${index}" onclick="remove(this)"><i class="fa fa-times"></i></button>
    </li>`;
}

function showTodos(){
    if(todosJson.length==0){
        todosHtml.innerHTML="";
        emptyImage.style.display="block";
    }else{
        todosHtml.innerHTML=todosJson.map(getTodoHtml).join("");
        emptyImage.style.display="none";
    }
}
//Add button for todo list
function addTodo(todo){
    input.value="";
    todosJson.unshift({name:todo,status:"pending"});
    localStorage.setItem("todos",JSON.stringify(todosJson));
    showTodos();
}
//To take input
input.addEventListener("keyup",e =>{
    let todo=input.value.trim();
    if(!todo || e.key!="Enter"){
        return;
    }
    addTodo(todo);
});

addBtn.addEventListener("click",()=>{
    let todo=input.value.trim();
    if(!todo){
        return;
    }
    addTodo(todo);
});
//To change status of todos 
function updateStatus(todo){
    let todoName=todo.parentElement.lastElementChild;
    if(todo.checked){
        console.log(todoName.classList);
        todoName.classList.add("checked");
        todosJson[todo.id].status="completed";
    }else{
        todoName.classList.remove("checked");
        todosJson[todo.id].status="pending";
    }
    localStorage.setItem("todos",JSON.stringify(todosJson));
}
//To remove todo
function remove(todo){
    const index=todo.dataset.index;
    todosJson.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(todosJson));
    showTodos();
}
filters.forEach(function (el){
    el.addEventListener("click",(e)=>{
        console.log(el.classList);
        if(el.classList.contains("active")){
            el.classList.remove("active");
            filter="";
        }else{
            filters.forEach((tag) =>{
            tag.classList.remove("active")}
            );
            el.classList.add("active");
            filter=e.target.dataset.filter;
        }
        showTodos();
    });
});
deleteAllBtn.addEventListener("click",()=>{
    todosJson=[];
    localStorage.setItem("todos",JSON.stringify(todosJson));
    showTodos();

})
//Date Section
const date =document.querySelector("#date");
const day=document.querySelector("#day");
const month=document.querySelector("#month");
const year=document.querySelector("#year");
const today=new Date();
const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths=["January","February","March","April","May","June","July","August","September","October","November","December"];
 date.innerHTML=(today.getDate()<10?"0":"")+today.getDate();
 day.innerHTML=weekDays[today.getDay()];
 month.innerHTML=allMonths[today.getMonth()];
 year.innerHTML=today.getFullYear();


 const apiKey="7260328f0b14484cb6e145842242005";
