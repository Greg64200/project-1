const message =
  "Thank you for submitting your message. We will respond as soon as possible.";

document.getElementById("contact");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
const navBar = document.querySelector(".nav_bar");

window.addEventListener("wheel", (e) => {
    if(e.deltaY >0){
        navBar.style.transform = "translateY(-35vh)";
    } else {
        navBar.style.transform = "translateY(0)";
    }
});