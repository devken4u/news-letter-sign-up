window.onload = () => {
  if (window.innerWidth < 900) {
    document.querySelector("#sign-up-image").src =
      "assets/images/illustration-sign-up-mobile.svg";

    document
      .querySelector(".sign-up-container")
      .classList.remove("sign-up-container-desktop");

    document.querySelector("body").classList.remove("body-desktop");
  } else {
    document.querySelector("#sign-up-image").src =
      "assets/images/illustration-sign-up-desktop.svg";

    document
      .querySelector(".sign-up-container")
      .classList.add("sign-up-container-desktop");

    document.querySelector("body").classList.add("body-desktop");
  }
};

window.addEventListener("resize", () => {
  if (window.innerWidth < 900) {
    document.querySelector("#sign-up-image").src =
      "assets/images/illustration-sign-up-mobile.svg";

    document
      .querySelector(".sign-up-container")
      .classList.remove("sign-up-container-desktop");

    document.querySelector("body").classList.remove("body-desktop");
  } else {
    document.querySelector("#sign-up-image").src =
      "assets/images/illustration-sign-up-desktop.svg";

    document
      .querySelector(".sign-up-container")
      .classList.add("sign-up-container-desktop");

    document.querySelector("body").classList.add("body-desktop");
  }
});

let = document.querySelector("#email");

email.addEventListener("click", () => {
  email.classList.remove("email-input-error");
});

document.querySelector(".subscribe").addEventListener("click", () => {
  if (validateEmail(email.value)) {
    window.location.href = "success.html";
    setCookie("email", email.value, 1, "success.html");
  } else {
    document.querySelector(".email-error").classList.remove("hide");
    email.classList.add("email-input-error");
  }
});

function validateEmail(email) {
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  return emailPattern.test(email);
}

function setCookie(name, value, days, path) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=" + path;
}
