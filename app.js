const body = document.querySelector("body");
const infoSpace = document.querySelector(".infoSpace");
const infoR = document.querySelector(".infoR");
const mobileInfo = document.querySelector(".mobileInfo");

let result_hr = document.querySelector("#hr");
let result_min = document.querySelector("#min");
let result_seg = document.querySelector("#seg");

let audio = new Audio("./audio/bip.mp3");
let timer;
let start;

var mili, seg, min, hr;
mili = 0; seg = 0; min = 0; hr = 0;

result_hr.innerText = hr + ":";
result_min.innerText = min + ":";
result_seg.innerText = seg;

function writeTime(hr, min, seg) {
    if (hr < 10 && hr != 0) {
        result_hr.innerText = "0" + hr + ":";
    }
    if (min < 10 && min != 0) {
        result_min.innerText = "0" + min + ":";
    }

    if (hr == 0 && min == 0 && seg == 0) {
        result_hr.innerText = "0" + ":";
        result_min.innerText = "0" + ":";
        result_seg.innerText = "0";
    }

    result_seg.innerText = seg;
}

function time() {
    mili++;

    if (mili == 100) {
        mili = 0;
        seg++;
        writeTime(hr, min, seg);
    }

    if (seg == 60) {
        seg = 0;
        min++;
        writeTime(hr, min, seg);
    }

    if (min == 60) {
        min = 0;
        hr++;
        writeTime(hr, min, seg);
    }
}

function iniciar() {
    audio.play();
    infoSpace.classList.remove("init-animate");
    mobileInfo.classList.remove("init-animate");
    infoR.classList.add("init-animate");
    
    timer = setInterval(time, 10);
}

function pausar() {
    infoR.classList.remove("animate");
    infoR.classList.remove("init-animate");
    infoSpace.classList.add("init-animate");
    mobileInfo.classList.add("init-animate");
    clearInterval(timer, 0);
}

function reset() {
    hr = 0;
    min = 0;
    seg = 0;
    mili = 0;

    writeTime(hr, min, seg);
    infoSpace.classList.add("init-animate");
    infoR.classList.remove("animate");

    if (mili == 0) {
        pausar();
    }
}

body.addEventListener("click", () => {
    if (start == true) {
        start = false;
        return pausar();
    }

    start = true;
    iniciar();
});

body.addEventListener("keypress", (Event) => {
    let code = Event.keyCode;
    if (code == 32) {
        if (start == true) {
            start = false;
            return pausar();
        }

        start = true;
        iniciar();
    } else if (code == 114) {
        return reset();
    }
});

infoR.addEventListener("click", () => {
    reset()
    infoR.classList.remove("init-animate");
});

setTimeout(() => {
    infoSpace.classList.add("init-animate");
    mobileInfo.classList.add("init-animate");
}, 10);
