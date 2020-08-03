window.onload = function(){
    const searchBtn = document.querySelector(".search-icon");
    const searchInput = document.getElementById("search-input");
    let searchTF = false;

    searchBtn.addEventListener("click",()=>{
        if(!searchTF){
            searchInput.classList.add("open");
            searchTF = true;
        }else{
            searchInput.classList.remove("open");
            searchTF = false;
        }
    });
}