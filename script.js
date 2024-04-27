const todoInput=document.querySelector(".todoInput");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todoList");
const filterOption=document.querySelector(".filter-todo");
document.addEventListener("DOMContentLoaded",getLocalTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("change",filterTodo);

function addTodo(event){
    event.preventDefault();
    const toDoDiv=document.createElement("div");
    toDoDiv.classList.add("todoListItems");
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todoListItems");
    saveLocalTodos(todoInput.value);
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check-circle"></i>';
    compeletedButton.classList.add("completeButton");
    toDoDiv.appendChild(completedButton);

    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trashButton");
    toDoDiv.appendChild(trashButton);

    todoList.appendChild(toDoDiv);
    todoInput.value="";
}
function deleteCheck(e){
    const item= e.target;
    
}