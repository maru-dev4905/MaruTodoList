const inputText = document.getElementById("title-input");
const inputDesc = document.getElementById("title-description");
const openBtn = document.getElementById("open-btn");
const createBox = document.getElementById("create-item");
const closeBtn = document.getElementById("create-item-close-btn");
const btnAdd = document.getElementById("btnAdd");

const createBoxBg = document.querySelector(".create-item-bg");

const detailTitle = document.querySelector(".todolist-title");
const detailDate = document.querySelector(".todolist-date");
const detailDesc = document.querySelector(".description-text");
const detailStat = document.querySelector(".status-text");
const detailId = document.querySelector(".detail-id");

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
let id = 1;

function showItem(itemTitle, itemDesc, itemDate, itemStat, itemId){
    detailTitle.innerText = itemTitle;
    detailDate.innerText = itemDate;
    detailDesc.innerHTML = itemDesc;
    if(itemStat == false){
        detailStat.innerText = "하는 중";
    }else if(itemStat == true){
        detailStat.innerText = "끝난 일";
    }
    detailId.innerText = itemId;
}
function saveToDos(title,text,date,id,status){
        
    const toDoObj = {
        title: title,
        text: text,
        id: id,
        date: date,
        status: status
    };
    toDos.push(toDoObj);
    
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function removeToDos(){
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(id);
    });
    toDos = cleanToDos;

    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function allRemoveToDos(){
    localStorage.clear(TODOS_LS);
}
function loadToDos(){
    
    if(loadedToDos !== null){
        const parsedToDos  = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            addNewItem(document.getElementById("todolist"),toDo.title, toDo.text, toDo.status);
        })
    }
}

loadToDos();

function clickList(){
    let todoListItem = document.querySelectorAll(".list-item");
    
    for(let i = 0; i < todoListItem.length; i++){
        todoListItem[i].addEventListener("click",()=>{
            let toDoStat = todoListItem[i].childNodes[0].checked;
            let toDoId = todoListItem[i].id.substr(3);
            let toDoTitle = todoListItem[i].childNodes[1].textContent;
            let toDoText = todoListItem[i].childNodes[2].innerHTML;
            let toDoDate = todoListItem[i].childNodes[3].textContent;
            showItem(toDoTitle, toDoText, toDoDate, toDoStat, toDoId);
        })
    }
}
clickList();