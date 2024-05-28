(()=>{"use strict";const e=({timing:e,draw:t,duration:a})=>{let o=performance.now();requestAnimationFrame((function n(r){let c=(r-o)/a;c>=1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(n)}))};(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),n=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}};let r=n();const c=setInterval((()=>{r.timeRemaining>0?(()=>{const e=n(),r=function(e){return e<=9?"0"+e:e};t.textContent=r(e.hours),a.textContent=r(e.minutes),o.textContent=r(e.seconds)})():clearInterval(c)}),1e3)})("8 july 2024"),(()=>{const e=document.querySelector("menu");document.querySelector("body").addEventListener("click",(t=>{let a=t.target;a.closest(".menu")||a.classList.contains("close-btn")?e.classList.toggle("active-menu"):a.matches("menu")||a.matches("menu li")?e.classList.add("active-menu"):e.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelector(".popup"),a=document.querySelectorAll(".popup-btn"),o=t.querySelector(".popup-content");a.forEach((a=>{a.addEventListener("click",(()=>{window.innerWidth>768?(t.style.display="block",e({duration:400,timing:e=>e,draw(e){o.style.opacity=e}})):t.style.display="block"}))})),t.addEventListener("click",(a=>{a.target.closest(".popup-content")&&!a.target.classList.contains("popup-close")||(window.innerWidth>768?e({duration:400,timing:e=>e,draw(e){o.style.opacity=1-e,o.style.opacity<=0&&(t.style.display="none")}}):t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll("[name='user_name']"),t=document.querySelectorAll("[name='user_phone']"),a=document.querySelectorAll("[name='user_email']"),o=document.querySelector("#form2-message"),n=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-square");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^()-\d]/g,"")}))})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z0-9@-_.!~*']/g,"")}))})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/g,"")})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),a=document.querySelector(".portfolio-dots");let o,n,r=0;const c=(e,t,a)=>{e[t].classList.remove(a)},l=(e,t,a)=>{e[t].classList.add(a)},s=()=>{c(t,r,"portfolio-item-active"),c(o,r,"dot-active"),r++,r>=t.length&&(r=0),l(t,r,"portfolio-item-active"),l(o,r,"dot-active")},i=(e=1500)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,r,"portfolio-item-active"),c(o,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&o.forEach(((t,a)=>{e.target===t&&(r=a)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),l(t,r,"portfolio-item-active"),l(o,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),(()=>{for(let e=0;e<t.length;e++){const e=document.createElement("li");e.classList.add("dot"),a.append(e)}o=document.querySelectorAll(".dot"),o[0].classList.add("dot-active")})(),i(2e3)})()})();