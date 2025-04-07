import{A as S,S as w,N as b,K as B,M as I,a as x,b as k,i as A}from"./assets/vendor-SJvudjR_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const q="/project-web_undefined/assets/header_logo@1x-BcRfU5S5.png",P="/project-web_undefined/assets/header_logo@2x-9C1GhDcy.png",L={header:{srcset:P,src:q}};document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".header-image").forEach(r=>{r.srcset=L.header.srcset,r.src=L.header.src});const t=document.querySelector(".header-burger-button"),e=document.querySelector(".header-mobile-menu-close-button"),n=document.querySelector(".header-mobile-menu-background"),i=document.querySelectorAll(".header-mobile-menu-link"),o=document.querySelector(".header-mobile-menu-order-button"),s=document.querySelector(".header-navbar-button"),c=document.querySelector(".tittle-menu"),a=document.querySelector(".header-desk-menu-list"),d=document.querySelectorAll(".header-desk-menu-link");function y(){n.classList.add("is-open"),document.body.style.overflow="hidden"}function l(){n.classList.remove("is-open"),document.body.style.overflow=""}t&&t.addEventListener("click",y),e&&e.addEventListener("click",l),i.forEach(r=>{r.addEventListener("click",m=>{m.preventDefault();const f=document.getElementById(r.getAttribute("href").substring(1));f&&f.scrollIntoView({behavior:"smooth",block:"start"}),l()})}),n&&n.addEventListener("click",r=>{r.target.closest(".header-mobile-menu-wrapper")||l()});function u(){a.classList.remove("is-open")}c&&c.addEventListener("click",()=>{a.classList.toggle("is-open")}),d.forEach(r=>{r.addEventListener("click",m=>{m.preventDefault();const f=document.getElementById(r.getAttribute("href").substring(1));f&&f.scrollIntoView({behavior:"smooth",block:"start"}),u()})}),document.addEventListener("click",r=>{!r.target.closest(".header-desk-menu-list")&&!r.target.closest(".tittle-menu")&&u()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(l(),u())});function p(r){const m=document.getElementById(r);m&&m.scrollIntoView({behavior:"smooth",block:"start"})}o&&o.addEventListener("click",r=>{r.preventDefault(),p("form-foot"),l()}),s&&s.addEventListener("click",r=>{r.preventDefault(),p("footer")})});document.addEventListener("DOMContentLoaded",()=>{C(),M(),O()});function C(){const t=(e,n)=>{const i=e.querySelector(".a-m-arrow-top");i&&(i.style.transform=`rotate(${n}deg)`)};new S(".description-list",{openOnInit:[0],duration:400,showMultiple:!1,onOpen:e=>t(e,0),onClose:e=>t(e,180)}),Array.from(document.querySelectorAll(".a-m-accordion-el")).filter(e=>e.classList.contains("is-active")).forEach(e=>{t(e,0)})}function M(){new w(".a-m-swiper",{direction:"horizontal",loop:!0,loopAdditionalSlides:1,slidesPerGroup:1,slidesPerView:2,modules:[b],keyboard:{enabled:!1},navigation:{nextEl:".a-m-swiper-button"},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}})}function O(){document.addEventListener("keydown",t=>{if(t.key==="ArrowRight"){const e=document.querySelector(".swiper-button-next");e&&e.click()}else if(t.key==="ArrowLeft"){const e=document.querySelector(".swiper-button-prev");e&&e.click()}})}document.addEventListener("DOMContentLoaded",()=>{[...document.querySelectorAll(".accordion-el")].forEach(e=>{if(e.classList.contains("is-active")){const n=e.querySelector(".arrow-top");n&&(n.style.transform="rotate(0deg)")}}),new S(".description-list",{openOnInit:[0],duration:400,showMultiple:!1,onOpen:e=>{const n=e.querySelector(".arrow-top");n&&(n.style.transform="rotate(0deg)")},onClose:e=>{const n=e.querySelector(".arrow-top");n&&(n.style.transform="rotate(180deg)")}}),new w(".a-m-swiper",{direction:"horizontal",loop:!0,loopAdditionalSlides:1,slidesPerGroup:1,modules:[b],slidesPerView:2,navigation:{nextEl:".swiper-button-next"},breakpoints:{375:{slidesPerGroup:1,slidesPerView:2},768:{slidesPerGroup:1,slidesPerView:3},1440:{slidesPerGroup:1,slidesPerView:6}}})});const g=document.querySelector(".projects-prev-btn"),v=document.querySelector(".projects-next-btn");new w(".projects-swiper",{modules:[b,B,I,x],direction:"horizontal",speed:400,slidesPerView:1,spaceBetween:40,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{forceToAxis:!0},navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"},a11y:{enabled:!0,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},on:{init:function(){E(this)},slideChange:function(){E(this)}}});function E(t){t.isBeginning?(g.classList.add("projects-btn-disabled"),g.disabled=!0):(g.classList.remove("projects-btn-disabled"),g.disabled=!1),t.isEnd?(v.classList.add("projects-btn-disabled"),v.disabled=!0):(v.classList.remove("projects-btn-disabled"),v.disabled=!1)}new S([".accordion-container2"],{duration:300,showMultiple:!1,onOpen:t=>{const e=t.querySelector(".arrow-top");e&&(e.style.transform="rotate(0deg)")},onClose:t=>{const e=t.querySelector(".arrow-top");e&&(e.style.transform="rotate(180deg)")}});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".covers-line").forEach(o=>{let s=o.cloneNode(!0);s.classList.add("cloned-line");const c=s.querySelectorAll("li");s.prepend(c[c.length-1].cloneNode(!0)),s.prepend(c[c.length-2].cloneNode(!0)),document.querySelector(".cloned-lines").appendChild(s)});const e=document.querySelector(".covers-section"),n=document.querySelector(".covers-content"),i=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting?n.style.animationPlayState="running":n.style.animationPlayState="paused"})},{threshold:.2});e&&i.observe(e)});const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABOSURBVHgBzZLLDQAgCEOJE7H/Eo7gKKh3wJrGSBNOvEL4iJSRmfUVCnC62SgxsiJHJgOQBiEImz3DtdkpkpqbvBA1ArVE6oz0I9Gv/E0TMz3NWV1lPHoAAAAASUVORK5CYII=",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",h={reviewsSectionBox:document.querySelector(".swiper"),reviewsListBox:document.querySelector(".reviews-list")};async function R(){const t="https://portfolio-js.b.goit.study/api/reviews",e={};try{return await k.get(t,e).then(i=>{const o=N(i.data);return h.reviewsListBox.innerHTML=o})}catch(n){z(n),h.reviewsSectionBox.innerHTML='<p class="reviews-not-found">Not Found</p>'}}const D={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:V,close:!1,buttons:[[`<button><img src = "${j}"/></button>`,function(t,e){t.hide({transitionOut:"fadeOut"},e,"button")},!0]],transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0};function z(t){const e={rootMargin:"0px",threshold:1};new IntersectionObserver(i=>{i[0].isIntersecting&&A.show({...D,message:`Sorry! ${t}`})},e).observe(h.reviewsSectionBox)}function N(t){return t.map(({author:n,avatar_url:i,review:o,_id:s})=>`<li class="review-item swiper-slide">
          <img
            width="48px"
            height="48px"
            src="${i}"
            srcset="${i}"
            alt="Reviewer photo"
            class="review-photo"
          />
          <div class="review-info">
            <h3 class="review-author">${n}</h3>
            <p class="review-text">${o}</p>
          </div>
        </li>`).join(" ")}R();function U(){new w(".swiper",{speed:1e3,spaceBetween:16,autoHeight:!0,centeredSlidesBounds:!0,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:1,autoHeight:!1},1440:{slidesPerView:4,slidesPerGroup:1,autoHeight:!1}},direction:"horizontal",modules:[b,B],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0}})}U();document.addEventListener("DOMContentLoaded",function(){const t={form:document.querySelector(".work-together-form"),emailInput:document.querySelector("#email"),textInput:document.querySelector("#text"),submitButton:document.querySelector(".work-together-send-contact-btn"),modalBackdrop:document.querySelector(".work-together-backdrop"),modalBtn:document.querySelector(".work-together-modal-btn"),footerModal:document.querySelector(".work-together-modal")},e=document.createElement("p");e.classList.add("email-message"),t.emailInput.insertAdjacentElement("afterend",e);function n(){/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t.emailInput.value)?(t.emailInput.classList.add("valid"),t.emailInput.classList.remove("invalid"),e.textContent="Success!",e.style.color="#3cbc81"):(t.emailInput.classList.add("invalid"),t.emailInput.classList.remove("valid"),e.textContent="Invalid email, try again",e.style.color="#e74a3b")}function i(){const d="...";t.textInput.value.length>50&&(t.textInput.value=t.textInput.value.substring(0,50-d.length)+d)}function o(){t.modalBackdrop.classList.add("is-open"),t.footerModal.classList.add("is-open"),document.body.classList.add("modal-open"),document.addEventListener("keydown",c)}function s(){t.modalBackdrop.classList.remove("is-open"),t.footerModal.classList.remove("is-open"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",c)}function c(a){a.key==="Escape"&&s()}t.emailInput.addEventListener("input",n),t.textInput.addEventListener("input",i),t.form.addEventListener("submit",async function(a){var l,u;if(a.preventDefault(),!t.emailInput.classList.contains("valid")){A.error({title:"Error",message:"Please enter a valid email."});return}const d={email:t.emailInput.value,comment:t.textInput.value},y="https://portfolio-js.b.goit.study/api/requests";try{(await k.post(y,d,{headers:{"Content-Type":"application/json"}})).status===201?(o(),t.form.reset(),t.emailInput.classList.remove("valid","invalid"),e.textContent="",A.success({title:"Success",message:"Your request has been submitted successfully!"})):A.error({title:"Error",message:"There was an error submitting your request."})}catch(p){const r=((u=(l=p.response)==null?void 0:l.data)==null?void 0:u.message)||"Network error. Please try again later.";A.error({title:"Error",message:r}),console.error(p)}}),t.modalBtn.addEventListener("click",s),t.modalBackdrop.addEventListener("click",function(a){a.target===t.modalBackdrop&&s()})});
//# sourceMappingURL=index.js.map
