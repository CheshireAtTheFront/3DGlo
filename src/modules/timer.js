// import { log } from "console";

const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime();
      let dateNew = new Date().getTime();
      let timeRemaining = (dateStop - dateNew) / 1000;
      let hours = Math.floor(timeRemaining / 60 / 60);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let seconds = Math.floor(timeRemaining % 60);

      return { timeRemaining, hours, minutes, seconds }
    }

    const updateClock = () => {
      let getTime = getTimeRemaining();

      timerHours.textContent = getTime.hours;  
      timerMinutes.textContent = getTime.minutes;  
      timerSeconds.textContent = getTime.seconds;

      const addZero = function(num) {
        if (num <= 9) {
          return '0' + num;
        }
        return num
      }

      timerHours.textContent = addZero(getTime.hours);  
      timerMinutes.textContent = addZero(getTime.minutes);  
      timerSeconds.textContent = addZero(getTime.seconds);

      if(getTime.timeRemaining > 0) {
        setTimeout(updateClock, 1000);
      }

    }  
    setInterval(updateClock, 1000);
}
  
export default timer;