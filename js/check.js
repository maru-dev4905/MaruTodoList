let todoListItem = document.querySelectorAll(".list-item");

for(let i = 0; i < todoListItem.length; i++){
    let todoListCheckBox = todoListItem[i].childNodes[0];
    
    todoListCheckBox.addEventListener("click",()=>{
        if(todoListCheckBox.checked){
            todoListItem[i].classList.add("checked");                        
        }else{
            todoListItem[i].classList.remove("checked");
        }
    });
}