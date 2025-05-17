import{S as m,a as p,i as n}from"./assets/vendor-DcJMNLUH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".loader"),u=document.querySelector(".gallery");function g(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:d,downloads:f})=>`<li class="gallery-item">
      <a href="${i}">
        <img
          class="gallery-img"
          src="${s}"
          alt="${e}"
        />
      </a>
      <div class="info">
        <p class="info-descr">Likes: ${t}</p>
        <p class="info-descr">Views: ${a}</p>
        <p class="info-descr">Comments: ${d}</p>
        <p class="info-descr">Downloads: ${f}</p>
      </div>
    </li>`).join("");u.insertAdjacentHTML("beforeend",r),y.refresh()}const y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(){u.innerHTML=""}function L(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const b="https://pixabay.com/api/",q="50309371-d07515f8c9a862bfe72f170ff";function v(o){return p.get(b,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");c.addEventListener("submit",o=>{o.preventDefault(),h();const r=o.target.elements["search-text"].value.trim();L(),v(r).then(s=>{const i=s.hits;if(i.length===0){n.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}g(i),c.reset()}).catch(s=>{console.error("Помилка при отриманні зображень:",s.message),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:3e3})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
