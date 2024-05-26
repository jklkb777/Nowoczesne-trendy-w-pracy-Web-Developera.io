// stoper.js

let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

// Funkcja formatująca czas w mm:ss:ms
function formatTime(time) {
    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = time % 1000;

    return (
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds)
    );
}

// Funkcja aktualizująca wyświetlany czas
function updateTime() {
    const now = Date.now();
    const diff = now - startTime + elapsedTime;
    document.getElementById('time').innerText = formatTime(diff);
}

// Funkcja uruchamiająca stoper
function start() {
    if (!running) {
        startTime = Date.now();
        timerInterval = setInterval(updateTime, 10); // Aktualizacja co 10 ms
        running = true;
    }
}

// Funkcja zatrzymująca stoper
function stop() {
    if (running) {
        clearInterval(timerInterval);
        elapsedTime += Date.now() - startTime;
        running = false;
    }
}

// Funkcja resetująca stoper
function reset() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    document.getElementById('time').innerText = "00:00:00:000";
}
