function emailValidation() {
  if (
    (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      input.value
    ) &&
      input.value != "") ||
    input.value == ""
  ) {
    errorMessage.style.display = "block";
    input.style.border = "solid red 2px";
    errorIcon.style.display = "block";

    event.preventDefault();
  }
}
