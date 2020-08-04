const inputText = document.getElementById("title-input");
const inputDesc = document.getElementById("title-description");
const openBtn = document.getElementById("open-btn");
const createBox = document.getElementById("create-item");
const closeBtn = document.getElementById("create-item-close-btn");
const btnAdd = document.getElementById("btnAdd");

const createBoxBg = document.querySelector(".create-item-bg");


openBtn.addEventListener("click",open_createItem_popup);

closeBtn.addEventListener("click",close_createItem_popup);

const TODOS_LS = "maruTodoList";

const loadedToDos = localStorage.getItem(TODOS_LS);
let toDos = [];



btnAdd.addEventListener("click",()=>{
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
    
    inputText.value = "";
    inputDesc.value = "";
    
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
let id = 0;

function addNewItem(list, itemText, itemDesc){
    const date = new Date();
    id++;

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
    text.innerText = itemText;

    const span = document.createElement("span");
    span.id = "span_" + id;
    span.innerText = itemDate;

    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(span);
    list.appendChild(listItem);
    
    const toDoObj = {
        title: itemText,
        text: itemDesc,
        id: id,
        date: itemDate
    };
    toDos.push(toDoObj);
    
    showItem(itemText, itemDesc, itemDate);
    saveToDos();
}
function showItem(itemText, itemDesc, itemDate){
    const detailTitle = document.querySelector(".todolist-title");
    const detailDate = document.querySelector(".todolist-date");
    const detailDesc = document.querySelector(".description-text");

    detailTitle.innerText = itemText;
    detailDate.innerText = itemDate;
    detailDesc.innerText = itemDesc;
}
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    clickList();
}
function loadToDos(){
    
    if(loadedToDos !== null){
        const parsedToDos  = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            addNewItem(document.getElementById("todolist"),toDo.title, toDo.text);
        })
    }
}

loadToDos();

function clickList(){
    let todoListItem = document.querySelectorAll(".list-item");
    
    for(let i = 0; i < todoListItem.length; i++){
        todoListItem[i].addEventListener("click",()=>{
            let listItemId = todoListItem[i].id;
            listItemId = listItemId.replace("li_","");
            listItemId = Number(listItemId);
            if(loadedToDos !== null){
                const parseToDos = JSON.parse(loadedToDos);
                
                parseToDos.forEach(function(toDo){
                    if(toDo.id == listItemId){
                        let toDoTitle = toDo.title;
                        let toDoText = toDo.text;
                        let toDoDate = toDo.date;
                        
                        showItem(toDoTitle, toDoText, toDoDate);
                    }
                });
            }
        });
    }
}
clickList();

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