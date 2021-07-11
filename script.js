const submitButton = document.querySelector(".submit");
const input = document.querySelector(".email");
const error = document.querySelector(".error");

submitButton.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  if (input.value === "") {
    submitButton.style.top = 0;
    error.style.display = "block";
    input.style.border = "2px solid hsl(0, 93%, 68%)";
  } else if (/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(input.value)) {
    input.value = "";
    error.style.display = "none";
    input.style.border = "1px solid hsl(0, 36%, 70%)";
  }
}
