const input = document.getElementById("email");

function emailValidation() {
  if (
    (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      input.value
    ) &&
      input.value != "") ||
    input.value == ""
  ) {
    input.style.border = "solid rgb(246, 156, 156) 2px";
    input.style.backgroundColor = "rgb(254, 235, 235)";
    input.style.color = "red";
    document.getElementById("error-message").style.display = "block";

    event.preventDefault();
  }
}
