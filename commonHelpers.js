import{a,S as m}from"./assets/vendor-db58f109.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const d=document.querySelector(".filters-select"),g=document.querySelector(".filtersInput"),y=document.querySelector(".filtersBtn");let l;const n={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(n));async function h(){try{return(await a.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(e){throw console.log("Проблема при запросе на сервер"),new Error(e)}}async function u(e){const{keyword:t,category:s,page:c,limit:o}=e;try{let r;return t===null&&s===null?r=await a.get(`https://food-boutique.b.goit.study/api/products?page=${c}&limit=${o}`):t===null?r=await a.get(`https://food-boutique.b.goit.study/api/products?category=${s}&page=${c}&limit=${o}`):s===null?r=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${t}&page=${c}&limit=${o}`):r=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${s}&page=${c}&limit=${o}`),r.data.results}catch(r){throw console.log("Помилка на сервері при пошуку продуктів",r),new Error(r)}}async function S(){try{const t=(await h()).map(s=>`<option>${s}</option>`).join("")+"<option>Show all</option>";d.insertAdjacentHTML("beforeend",t),new m({select:".filters-select"})}catch(e){console.log("Проблема при обработке данных с сервера",e)}}S();d.addEventListener("change",w);y.addEventListener("click",$);async function w(e){n.category=e.currentTarget.value,n.category==="Show all"?n.category=null:localStorage.setItem("filterParams",JSON.stringify(n)),l=await u(n),console.log(l)}async function $(){const e=g.value;e.trim()?n.keyword=e:n.keyword=null,localStorage.setItem("filterParams",JSON.stringify(n)),l=await u(n),console.log(l)}const v="https://food-boutique.b.goit.study/api",q=document.querySelector("[data-modal-close]"),b=document.querySelector("[data-modal]");q.addEventListener("click",p);function p(){b.classList.toggle("is-hidden")}const L=document.querySelector("#modal-img"),k=document.querySelector("#modal-name"),P=document.querySelector("#modal-category"),E=document.querySelector("#modal-size"),C=document.querySelector("#modal-popularity"),I=document.querySelector("#modal-desc"),N=document.querySelector("#modal-price");async function f(e){let t;try{t=await a(v+"/products/"+e),console.log(t),L.src=t.data.img,k.textContent=t.data.name,P.textContent=t.data.category,E.textContent=t.data.size,C.textContent=t.data.popularity,I.textContent=t.data.desc,N.textContent="$"+t.data.price,p()}catch(s){console.log(s)}}const x="https://food-boutique.b.goit.study/api",F="/products",O=document.querySelector(".products-container");let M=1;async function B(){try{const e=await D();e.results?(console.log(e),O.innerHTML=j(e.results)):console.error("No results found in the response data.")}catch(e){console.error("Error fetching products:",e)}}async function D(){const e=new URLSearchParams({page:M,limit:9}),t=await fetch(`${x}${F}?${e}`);if(!t.ok)throw new Error(t.status);return t.json()}function j(e){return e.map(({img:t,name:s,price:c,category:o,size:r,popularity:i})=>`
    <ul>
      <li class="product-card">
        <img class="product-img" src="${t}" alt="${s} width="1000px" />
        <div class="product-info">
          <h3>${s}</h3>
          <div class="product-description">
            <p><span>Category:</span> ${o}</p>
            <p><span>Size:</span> ${r}</p>
            <p><span>Popularity:</span> ${i}</p>
          </div>
          <div class="product-forsale">
            <p class="product-price">$${c}</p>
            <div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div>
          </div>
        </div>
      </li>
    </ul>
  `).join("")}B();const z=document.querySelector(".products-container");z.addEventListener("click",A);function A(e){e.preventDefault(),console.log(e),f("640c2dd963a319ea671e383b")}const T=document.querySelector("#test");T.addEventListener("click",()=>f("640c2dd963a319ea671e383b"));
//# sourceMappingURL=commonHelpers.js.map
