
function updateClock() {
    const localClockElement = document.getElementById('localClock');
    const tokyoClockElement = document.getElementById('tokyoClock');
    const newYorkClockElement = document.getElementById('newYorkClock');
    const now = new Date();

    // czas lokalny
    let localHours = now.getHours().toString().padStart(2, '0');
    let localMinutes = now.getMinutes().toString().padStart(2, '0');
    let localSeconds = now.getSeconds().toString().padStart(2, '0');
    localClockElement.textContent = `Lokalny czas: ${localHours}:${localMinutes}:${localSeconds}`;

    // tokio +9
    let tokyoTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    let tokyoHours = tokyoTime.getUTCHours().toString().padStart(2, '0');
    let tokyoMinutes = tokyoTime.getUTCMinutes().toString().padStart(2, '0');
    let tokyoSeconds = tokyoTime.getUTCSeconds().toString().padStart(2, '0');
    tokyoClockElement.textContent = `Tokio: ${tokyoHours}:${tokyoMinutes}:${tokyoSeconds}`;

    // nowy jork -4
    let newYorkTime = new Date(now.getTime() - (4 * 60 * 60 * 1000));
    let newYorkHours = newYorkTime.getUTCHours().toString().padStart(2, '0');
    let newYorkMinutes = newYorkTime.getUTCMinutes().toString().padStart(2, '0');
    let newYorkSeconds = newYorkTime.getUTCSeconds().toString().padStart(2, '0');
    newYorkClockElement.textContent = `Nowy Jork: ${newYorkHours}:${newYorkMinutes}:${newYorkSeconds}`;
}

setInterval(updateClock, 1000);
updateClock();