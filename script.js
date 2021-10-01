//QUERY SELECTORS
const submitBtn = document.querySelector(".submit-form");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formText = document.getElementById("message");

//EVENT LISTENERS
submitBtn.addEventListener("click", function () {
  setTimeout(openModal, 3000);
});
closeBtn.addEventListener("click", closeModal);
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
