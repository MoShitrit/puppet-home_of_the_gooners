
function zoomIn(element) {
    element.style.width = "400px";
    element.style.height = "250px";
}
function zoomOut(element) {
    element.style.width = "150px";
    element.style.height = "150px";
}
function validateForm() {
    var fName = document.getElementById("txtFN").value, lName = document.getElementById("txtLN").value, msgT = document.getElementById("txtMsg").value;
    if (fName == "" && lName == "") {
        alert("You must fill in at least one name field! (First / Last name)");
        document.getElementById("submitButton").disabled = true;
    } else if (msgT.length <= 5) {
        alert("Message text must be longer than 5 characters!");
        document.getElementById("submitButton").disabled = true;
    }
}

function enableSubmit() {
    document.getElementById("submitButton").disabled = false;
}
