let menuBtn = document.getElementById("menu-i");
let menu = document.querySelector(".nav-ul");
let menuOpen = false;

menuBtn.addEventListener("click", function () {
  if (menuOpen === false) {
    menu.style.right = "0px";
    menuOpen = true;
  }
  else if (menuOpen === true){
    menu.style.right ="-190px";
    menuOpen = false;
  }
});
