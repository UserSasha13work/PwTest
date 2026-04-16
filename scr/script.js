const countdownEl = document.getElementById("countdown");
let timeLeft = 2 * 60;
const redirectUrl = "https://apps.apple.com/app/securel-ai-security-app/id6758520828";

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

countdownEl.textContent = formatTime(timeLeft);

const timerId = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(timerId);
    window.location.href = redirectUrl;
    return;
  }

  timeLeft -= 1;
  countdownEl.textContent = formatTime(timeLeft);
}, 1000);
