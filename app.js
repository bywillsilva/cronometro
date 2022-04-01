var result_min = document.querySelector("#min");
var result_seg = document.querySelector("#seg");
var result_mili = document.querySelector("#mili")

var tema = document.querySelector("#dark_light")
var audio = document.querySelector("audio")

var temp = mili;
var mili = 0;
var seg = 0;
var min = 0;

result_min.innerText = min + ":";
result_seg.innerText = seg + ":";
result_mili.innerText = mili;


function time() {
    mili++

    result_min.innerText = min + ":";
    result_seg.innerText = seg + ":";
    result_mili.innerText = mili;

    if (mili == 60) {
        mili = 0
        seg++
        result_min.innerText = min + ":";
        result_seg.innerText = seg + ":";
        result_mili.innerText = mili;
    }
    if (seg == 60) {
        seg = 0
        min++
        audio.play()
        result_min.innerText = min + ":";
        result_seg.innerText = seg + ":";
        result_mili.innerText = mili;
    }
}

function dark_light() {
    if (tema.value == 1) {
        document.querySelector("body").style.backgroundColor = "#0f0f0f"
        document.querySelector("body").style.color = "#f2f2f2";
        document.getElementById("tema").style.color = "#f2f2f2";
    } else {
        document.querySelector("body").style.backgroundColor = "#f2f2f2"
        document.querySelector("body").style.color = "#0f0f0f";
        document.getElementById("tema").style.color = "#0f0f0f";
    }
}

var timer;
function iniciar() {

    timer = setInterval(time, 10);

    document.getElementById("iniciar").disabled = true;
    document.getElementById("pausar").disabled = false;
    document.getElementById("reset").disabled = false;

}

function pausar() {
    clearInterval(timer, 0);

    document.getElementById("iniciar").disabled = false;
    document.getElementById("pausar").disabled = true;
    document.getElementById("reset").disabled = false;
}

function reset() {
    min = 0;
    seg = 0;
    mili = 0;

    result_min.innerText = min + ":";
    result_seg.innerText = seg + ":";
    result_mili.innerText = mili;

    if (mili == 0) {
        pausar()
    }
}