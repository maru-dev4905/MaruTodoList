function addNewItem(list, itemTitle, itemDesc, itemState){
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
    checkbox.classList.add("checkbox");
    checkbox.id = "cb_" + id;
    
    // title
    const text = document.createElement("p");
    text.id = "text_" + id;
    text.innerText = itemTitle;

    // date
    const span = document.createElement("span");
    span.id = "span_" + id;
    span.innerText = itemDate;

    // text
    const pre = document.createElement("pre");
    pre.id = "pre_" + id;
    pre.innerText = itemDesc;

    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(pre);
    listItem.appendChild(span);
    list.appendChild(listItem);

    let status = false;
    if(itemState == false){
        
    }
    showItem(itemTitle, itemDesc, itemDate, status);
    saveToDos(itemTitle, itemDesc, date, id, status);
}