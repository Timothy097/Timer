let [seconds, minutes, hours] = [0, 0, 0];
let timeRef = document.querySelector('.timer-count');
let int = null;

document.querySelector('.start').addEventListener('click', () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 1000);
});

document.querySelector('.pause').addEventListener('click', () => {
  clearInterval(int);
});

document.querySelector('.reset').addEventListener('click', () => {
  clearInterval(int);
  [seconds, minutes, hours] = [0, 0, 0];
  timeRef.innerHTML = '00 : 00 : 00 ';
});

function displayTimer() {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  timeRef.innerHTML = `${h} : ${m} : ${s}`;
}
