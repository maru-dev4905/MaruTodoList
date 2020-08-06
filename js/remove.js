const deleteBtn = document.querySelector(".delete-btn");
const allDeleteBtn = document.querySelector(".allClear-btn");

deleteBtn.addEventListener("click",()=>{
    let todoListItem = document.querySelectorAll(".list-item");
    let id = document.querySelector(".detail-id").textContent;

    for(let i = 0; i < todoListItem.length; i++){
        let todoListId = todoListItem[i].id.substr(3);

        if(todoListId == id){
            todoListItem[i].remove();
            
            removeToDos();
        }
    }
})

allDeleteBtn.addEventListener("click",()=>{
    let todoListItem = document.querySelectorAll(".list-item");

    for(let i = 0; i < todoListItem.length; i++){
        
        todoListItem[i].remove();

        allRemoveToDos();
    }
})