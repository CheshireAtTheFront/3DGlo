<<<<<<< HEAD
(()=>{"use strict";console.log("Привет, я функция One"),console.log("Привет, я функция Two")})();
=======
(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),i=()=>{const t=(()=>{const t=(new Date("29 april 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})(),m=function(t){return t<=9?"0"+t:t};if(e.textContent=m(t.hours),n.textContent=m(t.minutes),o.textContent=m(t.seconds),t.timeRemaining>0&&setTimeout(i,1e3),t.timeRemaining<=0){e.textContent="00",n.textContent="00",o.textContent="00";const t=setInterval((()=>{clearInterval(t)}),1e3)}};i()})()})();
>>>>>>> lesson19
