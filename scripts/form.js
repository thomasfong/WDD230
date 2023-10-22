document.getElementById("applicationForm").addEventListener("submit", function (event) {
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;
    var mess = document.getElementById("message");

    if (p1 !== p2) {
        mess.textContent = "password does not match!";
        event.preventDefault();
    } else {
        mess.textContent = "";
    }
});