document.querySelector(".fade-layer").addEventListener("click",showMenu)

document.querySelector(".menu-button").addEventListener("click", showMenu)

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}
var slideIndex = 1;
        showDivs(slideIndex);
        
        function plusDivs(n) {
          showDivs(slideIndex += n);
        }
        
        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          x[slideIndex-1].style.display = "block";  
        }