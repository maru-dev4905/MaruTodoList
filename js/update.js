const updateOpenBtn = document.querySelector(".update-btn");
const updateCloseBtn = document.getElementById("update-item-close-btn");

const updateBtn = document.getElementById("btnUpdate");
const updatePopup = document.getElementById("update-item");

updateOpenBtn.addEventListener("click",open_item_popup);
updateCloseBtn.addEventListener("click",close_item_popup);

const newDate = new Date;
    
const newYear = newDate.getFullYear();
const newMonth = newDate.getMonth() + 1;
const newDay = newDate.getDate();

const newItemDate = newYear + "/" + newMonth + "/" + newDay;

function open_item_popup(){
    updatePopup.style.display = "block";
    createBoxBg.style.display = "block";
    
    let id = document.querySelector(".detail-id").textContent;
    let todoListItem = document.querySelectorAll(".list-item");

    for(let i = 0; i < todoListItem.length; i++){
        if(todoListItem[i].id.substr(3) == id){
            let titleText = todoListItem[i].childNodes[1].textContent;
            let titleDesc = todoListItem[i].childNodes[2].textContent;

            const inputTitle = document.getElementById("title-input2");
            const inputDesc  = document.getElementById("title-description2");
            
            inputTitle.value = titleText;
            inputDesc.value = titleDesc;
        }
    }
}

function close_item_popup(){
    updatePopup.style.display = "none";
    createBoxBg.style.display = "none";
}

updateBtn.addEventListener("click",update_item);

function update_item(){
    let todoListItem = document.querySelectorAll(".list-item");
    let newTitle = document.getElementById("title-input2").value;
    let newDesc = document.getElementById("title-description2").value;
    
    let i = 0;
    while(i < todoListItem.length){
        let id = document.querySelector(".detail-id").textContent;
        let todoListId = todoListItem[i].id.substr(3);
        if(todoListId == id){
            todoListItem[i].childNodes[1].innerText = newTitle;
            todoListItem[i].childNodes[2].innerText = newDesc;
            todoListItem[i].childNodes[3].innerText = newItemDate;
            
            let todoListItemChecked;

            if(todoListItem[i].childNodes[0].checked){
                todoListItemChecked = "끝난 일";    
            }else{
                todoListItemChecked = "하는 일";
            }
            showItem(newTitle, newDesc, newItemDate, todoListItemChecked, id);
            saveToDos(newTitle, newDesc, newItemDate, id, todoListItemChecked)
            removeToDos();
            close_item_popup();
        }
        i++;
    }
}