function thankYou() {
  document.getElementById("thanks").style.display = "flex";
  document.getElementById("container").style.display = "none";
  document.getElementById("picture").style.display = "none";
}

function mainPage() {
  document.getElementById("thanks").style.display = "none";
  document.getElementById("container").style.display = "flex";
  document.getElementById("picture").style.display = "block";
  document.getElementById("mail").value = "";
}
