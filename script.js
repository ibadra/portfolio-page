//QUERY SELECTORS
const submitBtn = document.querySelector(".submit-form");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formText = document.getElementById("message");

//STYLES
formName.style.fontFamily = "Varela Round";
formName.style.color = "#9d84b7";
formEmail.style.fontFamily = "Varela Round";
formEmail.style.color = "#9d84b7";
formText.style.fontFamily = "Varela Round";
formText.style.color = "#9d84b7";

//EVENT LISTENERS
submitBtn.addEventListener("click", function () {
  setTimeout(openModal, 3000);
});
closeBtn.addEventListener("click", closeModal);
formName.addEventListener("mousedown", function () {
  formName.style.outlineColor = "#eb92be";
});
formEmail.addEventListener("mousedown", function () {
  formEmail.style.outlineColor = "#eb92be";
});
formText.addEventListener("mousedown", function () {
  formText.style.outlineColor = "#eb92be";
});
//FUNCTIONS
function openModal() {
  modal.style.visibility = "visible";
  resetForm();
}

function resetForm() {
  formName.value = "";
  formEmail.value = "";
  formText.value = "";
}

function closeModal() {
  modal.style.visibility = "hidden";
}
