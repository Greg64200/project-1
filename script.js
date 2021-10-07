const navBar = document.querySelector(".nav_bar");

window.addEventListener("wheel", (e) => {
    if(e.deltaY >0){
        navBar.style.transform = "translateY(-35vh)";
    } else {
        navBar.style.transform = "translateY(0)";
    }
});