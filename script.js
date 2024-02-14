const signUpForm = document.querySelector("[data-sign-up-form]");
const seccessMessagePage = document.querySelector("[data-seccess-message]");
const subscribtionBtn = document.querySelector(".subscribing-btn");
const emailInput = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");
const footer = document.querySelector(".attribution");

subscribtionBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (emailInput.reportValidity()) {
    signUpForm.classList.add("hide");
    seccessMessagePage.classList.add("show");
    footer.classList.add("hide");
  } else {
    errorMessage.classList.add("show");
    emailInput.classList.add("error-message-input");
  }
});
