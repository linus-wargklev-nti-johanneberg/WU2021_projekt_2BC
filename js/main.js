

document.querySelector(".menu-button").addEventListener("click", showMenu)

function showMenu(){
    let menu = document.querySelector("navmobil.menu");
    menu.classList.toggle("show");
}