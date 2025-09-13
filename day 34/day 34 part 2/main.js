var circle = document.getElementById("circle");
var showTime = document.getElementById("time");
var timeStart = new Date().getTime(); // ✅ FIXED: Added () to getTime()

function showCircle() {
    circle.style.display = 'block';
    circle.style.top = Math.random() * 500 + 'px';
    circle.style.left = Math.random() * 900 + 'px';
    circle.style.backgroundColor = randomColor();
    timeStart = new Date().getTime(); // ✅ FIXED: Added ()
}

showCircle();

circle.onclick = function () {
    circle.style.display = 'none';
    setTimeout(showCircle, 1000); // ✅ FIXED: Replaced * with ()
    var timeEnd = new Date().getTime(); // ✅ FIXED: Added ()
    var time = (timeEnd - timeStart) / 1000;
    showTime.innerHTML = time + 's';
}

function randomColor() {
    var s = '0123456789AbcDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color = color + s[Math.floor(Math.random() * 16)];
    }

    return color;
}
