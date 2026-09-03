const display = document.getElementById("display");

function appendvalue(value) {
    display.value += value;
}
function cleardisplay() {
    display.value = "";
}

function deletelast() {
    display.value = display.value.slice(0,-1);
}
function calculator(){
    display.value = eval(display.value);
}