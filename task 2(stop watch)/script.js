let timer;
let seconds = 0;
let isRunning = false;
const timeDisplay = document.getElementById("time");
const lapsList = document.getElementById("laps");

function formatTime(seconds){
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor(seconds / 60) % 60;
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function startTimer(){
    if(isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        seconds++;
        timeDisplay.textContent = formatTime(seconds);
    }, 1000);
}

function pauseTimer(){
    clearInterval(timer);
    isRunning = false;
}

function resetTimer(){
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    timeDisplay.textContent = formatTime(seconds);
    lapsList.innerHTML = "";
}

function recordLap(){
    if(isRunning){
        const lap = document.createElement("li");
        lap.textContent = formatTime(seconds);
        lapsList.appendChild(lap);
    }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);