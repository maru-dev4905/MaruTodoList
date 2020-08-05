let todoListItem = document.querySelectorAll(".list-item");
let todoListCheckBox = todoListItem[1].childNodes[0];

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