
const deleteBtn = document.querySelector(".delete-btn");

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