const inputText = document.getElementById("title-input");
const inputDesc = document.getElementById("title-description");
const openBtn = document.getElementById("open-btn");
const createBox = document.getElementById("create-item");
const closeBtn = document.getElementById("create-item-close-btn");
const btnAdd = document.getElementById("btnAdd");

const createBoxBg = document.querySelector(".create-item-bg");

openBtn.addEventListener("click",open_createItem_popup);

closeBtn.addEventListener("click",close_createItem_popup);

btnAdd.addEventListener("click",(event)=>{
    let inputTextValue = inputText.value;
    let inputDescValue = inputDesc.value;

    if(!inputTextValue || inputTextValue === "" || inputTextValue === " "){
        alert("타이틀을 입력해주세요");
        inputText.focus();
        return false;
    }
    if(!inputDescValue || inputDescValue === "" || inputDescValue === " "){
        alert("설명을 입력해주세요");
        inputDesc.focus();
        return false;
    }
    
    addNewItem(document.getElementById("todolist"), inputTextValue, inputDescValue);
    close_createItem_popup();
});

function open_createItem_popup(){
    createBox.style.display = "block";
    createBoxBg.style.display = "block";
}
function close_createItem_popup(){
    createBox.style.display = "none";
    createBoxBg.style.display = "none";
}

function addNewItem(list, itemText, itemDesc){
    const date = new Date();
    let id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const itemDate = year + "/" + month + "/" + day;

    const listItem = document.createElement("li");
    listItem.id = "li_" + id;
    listItem.classList.add("list-item");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "cb_" + id;
    
    const text = document.createElement("p");
    text.id = "text_" + id;
    text.innerText = itemDesc;

    const span = document.createElement("span");
    span.id = "span_" + id;
    span.innerText = itemDate;

    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(span);
    list.appendChild(listItem);
}

// function renameItem(){
//     var newText = prompt("update text");
//     if(!newText || newText === "" || newText === " ") return false;

//     this.innerText = newText;
// }
// function removeItem(){
//     var listItemId = this.id.replace("li_",'');
//     document.getElementById('li_' + listItemId).style.display = "none";
// }
// function updateItemStatus(){
//     var chId = this.id.replace("cb_",'');
//     var itemText = document.getElementById("item_" + chId);

//     if(this.checked){
//         itemText.className = "checked";
//     }else{
//         itemText.className = "";
//     }
// }