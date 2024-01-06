const displayresult = document.getElementById("displayresult");

function Display(x) {
  displayresult.value += x;
}

function reset() {
  displayresult.value = "";
}

function del() {
  displayresult.value = displayresult.value.substr(
    0,
    displayresult.value.length - 1
  );
}
function equal() {
  try {
    displayresult.value = eval(displayresult.value);
  } catch (error) {
    displayresult.value = "Error";
  }
}
