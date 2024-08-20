/** Time ***/

const countdownDate = new Date("Nov 3, 2024 00:00:00").getTime();
const timerElements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
};

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "O casamento já aconteceu!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElements.days.textContent = days;
    timerElements.hours.textContent = hours;
    timerElements.minutes.textContent = minutes;
    timerElements.seconds.textContent = seconds;
}

const countdownInterval = setInterval(updateCountdown, 1000);

