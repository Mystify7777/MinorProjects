let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS}`;
}

function startStop() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").innerHTML = timeToString(elapsedTime);
        }, 10);
        isRunning = true;
        document.getElementById("start-stop").textContent = "Stop";
    } else {
        clearInterval(timerInterval);
        isRunning = false;
        document.getElementById("start-stop").textContent = "Start";
    }
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").innerHTML = "00:00:00.000";
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("start-stop").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (isRunning) {
        let lapTime = timeToString(elapsedTime);
        let lapList = document.getElementById("laps");
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}
