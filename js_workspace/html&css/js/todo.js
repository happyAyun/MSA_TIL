let todoInputHandler= function(){
    // todos 배열에 {} todoNum은 todos.length+1, title: #todoInput에 입력된 value 값 추가 }
    const result = todos.map(todo => todo.todoNum);
    const maxTodoNum = Math.max.apply(null,result); // Math.max(...result);
    const addTitle = document.getElementById("todoInput").value;
    let todo = {todoNum:maxTodoNum+1, title :addTitle };
    todos.push(todo);
    // todoList rendering
    displayList();
} 

let todoDeleteHandler = function(todoNum){
    // todos 배열에서 todoNum에 해당하는 데이터 삭제. - filter(), splice()
    const index = todos.findIndex(todo => todo.todoNum == todoNum);
    todos.splice(index,1);
    // todoList rendering
    displayList();
}

let todoClear = function(){
    // todos 배열 empty
    // todoList rendering
    todos=[];
    displayList();
}

function displayList(){
    const todoList = document.getElementById("todoList");
    dataList="";
    todos.forEach(todo=>{
        dataList += `
            <li class="shadow">
                <i aria-hidden="true" class="checkBtn fa fa-check"></i>${todo.title}
                <span type="button" class="removeBtn" onclick="todoDeleteHandler(${todo.todoNum})">
                    <i aria-hidden="true" class="fa fa-trash-o"></i>
                </span>
            </li>`
    });
    todoList.innerHTML=dataList;
}