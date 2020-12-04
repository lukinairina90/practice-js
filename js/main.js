let a = 10;
let b = 1;

let button1 = document.getElementById("super-id");
let button2 = document.getElementById("changeColor");

function sum(a, b) {
    alert(a+b);
}

button1.addEventListener("click", function () {
    sum(a, b);
});

button2.addEventListener("click", function () {
        r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        // console.log(color);

    button2.style.background = color;
    // button2.style.color = color;
    // button2.innerText = color;
});


