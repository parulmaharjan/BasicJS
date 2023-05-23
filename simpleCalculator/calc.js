// const Btn = document.getElementsByClassName("calc");
// const result = document.getElementsByClassName("equal");



function clearScreen() {
    document.getElementById("displayResult").value = "";
}


function display(value) {
    document.getElementById("displayResult").value += value;
}

function calculate() {
    var disp = document.getElementById("displayResult").value;
    var calc = eval(disp);
    document.getElementById("displayResult").value = calc;
}