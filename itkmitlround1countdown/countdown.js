const countdown = new Date("2021-12-21T00:00:00+0000").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdown - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownTimer = document.getElementById("countdown-timer");
  countdownTimer.innerHTML = displayTime(days, hours, minutes, seconds);

  if (distance < 0) {
    clearInterval(timer);
    countdownTimer.innerHTML = "หมดเวลา";
    countdownTimer.style.color = "red";
  }
}, 1000);

const displayTime = (days, hours, minutes, seconds) => {
  days = ("0" + days).slice(-2);
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);
  return days + ":" + hours + ":" + minutes + ":" + seconds;
};
