var victory = document.getElementById("victory");
var fail = document.getElementById("fail");
var ding = document.getElementById("ding");
var error = document.getElementById("error");
var jump = document.getElementById("jump");
var deurbel = document.getElementById("deurbel");

victory.addEventListener("click", function () {
    const audio = new Audio();
    audio.src = "./victory.mp3";
    audio.play();
});

fail.addEventListener("click", function () {
    const audio = new Audio();
    audio.src = "./fail.mp3";
    audio.play();
});

ding.addEventListener("click", function () {
    const audio = new Audio();
    audio.src = "./ding.mp3";
    audio.play();
});

error.addEventListener("click", function () {
    const audio = new Audio();
    audio.src = "./error.mp3";
    audio.play();
});

jump.addEventListener("click", function () {
    const audio = new Audio();
    audio.src = "./jump.mp3";
    audio.play();
});

deurbel.addEventListener("click", function () {
    const audio = new Audio();
    audio.src = "./deurbel.mp3";
    audio.play();
});
