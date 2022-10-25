let outputscreen = document.getElementById("output");
let isOn = true;

OnOff();

function display(num) {
  if (isOn) {
    outputscreen.value += num;
  }
}

function calculate() {
  if (isOn) {
    try {
      outputscreen.value = eval(outputscreen.value);
    } catch {
      outputscreen.value = "invalid";
    }
  }
}

function clearScreen() {
  outputscreen.value = "";
}
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}

function OnOff() {
  if (isOn) {
    outputscreen.style.backgroundColor = "black";
    outputscreen.value = "";
    outputscreen.placeholder = "";
    isOn = false;
  } else {
    outputscreen.style.backgroundColor = "blueviolet";
    outputscreen.value = "";
    outputscreen.placeholder = "0";
    isOn = true;
  }
}
