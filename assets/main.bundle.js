!function(){"use strict";(()=>{const e=sessionStorage,t=e.getItem("dismissedPrivacyPolicyNotice"),i=document.getElementById("privacy-notice");t&&i.classList.add("hidden"),document.getElementById("privacy-notice-button-container").addEventListener("click",(()=>{e.setItem("dismissedPrivacyPolicyNotice","true"),i.classList.add("hidden")}))})(),(()=>{const e=document.getElementsByTagName("pre");if(null!==e)for(let t=0;t<e.length;t++)"language"===e[t].className.substring(0,8)&&(e[t].innerHTML=`<div class="copy">copy</div><code class="${e[t].className}">${e[t].innerHTML}</code>`);new ClipboardJS(".copy",{target:e=>e.nextElementSibling}).on("success",(e=>{e.trigger.textContent="copied!",setTimeout((()=>{e.clearSelection(),e.trigger.textContent="copy"}),2e3)}))})()}();
