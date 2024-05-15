window.onload = () => {
  if (document.querySelector(".user-email")) {
    document.querySelector(".user-email").textContent = getCookie("email");
  }
};

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

document.querySelector(".dismiss").addEventListener("click", () => {
  window.location.href = "index.html";
});
