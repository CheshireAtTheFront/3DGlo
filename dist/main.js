(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}};let c=r();const n=setInterval((()=>{c.timeRemaining>0?(()=>{const e=r(),c=function(e){return e<=9?"0"+e:e};t.textContent=c(e.hours),a.textContent=c(e.minutes),o.textContent=c(e.seconds)})():clearInterval(n)}),1e3)})("8 july 2024"),(()=>{const e=document.querySelector("menu");document.querySelector("body").addEventListener("click",(t=>{let a=t.target;a.closest(".menu")||a.classList.contains("close-btn")?e.classList.toggle("active-menu"):a.matches("menu")||a.matches("menu li")?e.classList.add("active-menu"):e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),a=e.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{if(window.innerWidth>768){e.style.display="block",a.style.opacity=0;const t=setInterval((()=>{a.style.opacity=parseFloat(a.style.opacity)+.1,a.style.opacity>=1&&clearInterval(t)}),20)}else e.style.display="block"}))})),e.addEventListener("click",(t=>{if(!t.target.closest(".popup-content")||t.target.classList.contains("popup-close"))if(window.innerWidth>768){a.style.opacity=1;const t=setInterval((()=>{a.style.opacity=parseFloat(a.style.opacity)-.1,a.style.opacity<=0&&(clearInterval(t),e.style.display="none")}),20)}else e.style.display="none"}))})(),(()=>{const e=document.querySelectorAll("[name='user_name']"),t=document.querySelectorAll("[name='user_phone']"),a=document.querySelectorAll("[name='user_email']"),o=document.querySelector("#form2-message"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),n=document.querySelector(".calc-square");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^()-\d]/g,"")}))})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z0-9@-_.!~*']/g,"")}))})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/g,"")})),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),a=document.querySelector(".portfolio-dots");let o,r,c=0;const n=(e,t,a)=>{e[t].classList.remove(a)},l=(e,t,a)=>{e[t].classList.add(a)},s=()=>{n(t,c,"portfolio-item-active"),n(o,c,"dot-active"),c++,c>=t.length&&(c=0),l(t,c,"portfolio-item-active"),l(o,c,"dot-active")},i=(e=1500)=>{r=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(t,c,"portfolio-item-active"),n(o,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&o.forEach(((t,a)=>{e.target===t&&(c=a)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),l(t,c,"portfolio-item-active"),l(o,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(r)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),(()=>{for(let e=0;e<t.length;e++){const e=document.createElement("li");e.classList.add("dot"),a.append(e)}o=document.querySelectorAll(".dot"),o[0].classList.add("dot-active")})(),i(2e3)})()})();