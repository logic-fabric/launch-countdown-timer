const DAYS_BEFORE_LAUNCH = 8;

const launchDatetime = new Date();
launchDatetime.setDate(launchDatetime.getDate() + DAYS_BEFORE_LAUNCH);

const daysCounter = document.getElementById("days-counter");
const hoursCounter = document.getElementById("hours-counter");
const minutesCounter = document.getElementById("minutes-counter");
const secondsCounter = document.getElementById("seconds-counter");

setInterval(countdownTimer, 1000);

function countdownTimer() {
  const diff = launchDatetime - new Date();
  const timer = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (diff > 0) {
    timer.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    timer.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    timer.minutes = Math.floor((diff / (1000 * 60)) % 60);
    timer.seconds = Math.floor((diff / 1000) % 60);
  }

  updateTimerComponent(timer);
}

function updateTimerComponent(timer) {
  daysCounter.textContent = timer.days.toString().padStart(2, "0");
  hoursCounter.textContent = timer.hours.toString().padStart(2, "0");
  minutesCounter.textContent = timer.minutes.toString().padStart(2, "0");
  secondsCounter.textContent = timer.seconds.toString().padStart(2, "0");
}
