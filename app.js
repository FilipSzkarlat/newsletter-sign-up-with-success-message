const email = document.getElementById("email"),
  thanks = document.getElementById("thanks"),
  container = document.getElementById("container"),
  picture = document.getElementById("picture");

function thankYou(e) {
  if (validateEmail(email.value)) {
    alert("stop");
    thanks.style.display = "flex";
    container.style.display = "none";
    picture.style.display = "none";
  } else {
    alert("email not valid");
    return false;
  }

  e.preventDefault();
}

function mainPage() {
  thanks.style.display = "none";
  container.style.display = "flex";
  picture.style.display = "block";
  email.value = "";
}
