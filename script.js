const message =
  "Thank you for submitting your message. We will respond as soon as possible.";

document.getElementById("contact");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});