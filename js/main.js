let a = 10
let b = 1

function sum(a, b) {
    alert(a+b);
}

let button = document.getElementById("super-id")
button.addEventListener("click", function () {
    sum(a, b);
});