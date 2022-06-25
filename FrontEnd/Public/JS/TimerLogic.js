let dayField = document.getElementById("day");
let hourField = document.getElementById("hour");
let minuteField = document.getElementById("minute");
let secondField = document.getElementById("second");

let interval;
const eventDay = new Date("05/23/2023");

// Convert to mili-second
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDownFn = () => {
  let now = new Date();
  let timeSpan = eventDay - now;

  if (timeSpan <= -now) {
    console.log("Unfortunately we have past the event day");
    clearInterval(interval);
    return;
  } else if (timeSpan <= 0) {
    console.log("Today is the event day");
    clearInterval(interval);
    return;
  } else {
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    // Set results
    dayField.innerHTML = days + " Days";
    hourField.innerHTML = hours + " Hours";
    minuteField.innerHTML = minutes + " Minutes";
    secondField.innerHTML = seconds + " Seconds";
  }
};

interval = setInterval(countDownFn, second);
