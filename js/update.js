const updateOpenBtn = document.querySelector(".update-btn");

const updateBtn = document.getElementById("btnUpdate");
const updatePopup = document.getElementById("update-item");
const updateCloseBtn = document.getElementById("update-item-close-btn");

updateOpenBtn.addEventListener("click",open_item_popup);
updateCloseBtn.addEventListener("click",close_item_popup);

updateBtn.addEventListener("click",update_item);

const newDate = new Date;
    
const newYear = newDate.getFullYear();
const newMonth = newDate.getMonth() + 1;
const newDay = newDate.getDate();

const newItemDate = newYear + "/" + newMonth + "/" + newDay;

function open_item_popup(){
    updatePopup.style.display = "block";
    createBoxBg.style.display = "block";
    
    const inputTitle = document.getElementById("title-input2");
    const inputDesc = document.getElementById("title-description2");

    let detailTitle = document.querySelector(".todolist-title").textContent;
    let detailDesc = document.querySelector(".description-text").textContent;

    inputTitle.value = detailTitle;
    inputDesc.value = detailDesc;

    saveToDos2(detailTitle, detailDesc);
}


function close_item_popup(){
    updatePopup.style.display = "none";
    createBoxBg.style.display = "none";
}

function update_item(){


    let newTitle = document.getElementById("title-input2").value;
    let newDesc = document.getElementById("title-description2").value;
    
    showItem(newTitle, newDesc, newItemDate);
    close_item_popup();
}
function saveToDos2(title, desc){
    
    let newTitle = document.getElementById("title-input2").value;
    let newDesc = document.getElementById("title-description2").value;

    if(loadedToDos !== null){
        const parsedToDos2 = JSON.parse(loadedToDos);
        
        parsedToDos2.forEach(function(toDo){
            if(toDo.title == title){
                
            }
        })
    }
}