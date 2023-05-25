const clock = document.querySelector(".clock");

function time() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  amPm = "AM";
  if (hours > 12) {
    hours -= 12;
    amPm = "PM";
  }
  if (hours == 0) {
    hr = 12;
    amPm = "AM";
  }

  // length of  time by 2 using padStart
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  // the otherUse
  /*
  hours = hours < 10 ? "0" + hours : hours; --- checks if the hour variable is less than 10. If it is, it appends a leading zero "0" to the hour value.
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
*/

  clock.textContent = ` ${hours} : ${minutes} : ${seconds} : ${amPm}`;
}
time();
setInterval(time, 1000);
