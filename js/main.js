var inputText = document.getElementById("inputText");
inputText.focus();

inputText.onkeyup = function(event){
    if(event.which === 13){
        var itemText = inputText.value;

        if(!itemText || itemText === "" || itemText === " ") return false;
        addNewItem(document.getElementById("todolist"), itemText);
        inputText.focus();
    }
}

function addNewItem(list, itemText){
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
    
    var listItem = document.createElement("li");
    listItem.id = "li_" + id;
    listItem.ondblclick = removeItem;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "cb_" + id;
    checkbox.onclick = updateItemStatus;

    var span = document.createElement("span");
    span.id = "item_" + id;
    span.innerText = itemText;
    span.onclick = renameItem;

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    list.appendChild(listItem);
}
function renameItem(){
    var newText = prompt("update text");
    if(!newText || newText === "" || newText === " ") return false;

    this.innerText = newText;
}
function removeItem(){
    var listItemId = this.id.replace("li_",'');
    document.getElementById('li_' + listItemId).style.display = "none";
}
function updateItemStatus(){
    var chId = this.id.replace("cb_",'');
    var itemText = document.getElementById("item_" + chId);

    if(this.checked){
        itemText.className = "checked";
    }else{
        itemText.className = "";
    }
}
