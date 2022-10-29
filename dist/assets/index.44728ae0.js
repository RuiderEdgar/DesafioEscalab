(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();const d=(s,a,n,t,r,e)=>`<section class='card' id='${a}'>
            <figure class='container-bandera'>
                <img src="${s}" alt="bandera" class='bandera'/>
            </figure>
            <article class='container-info' id='${r}'>
                <h2 id='${e}'>${a}</h2>
                <div>
                    <p><span>Capital: </span>${n}</p>
                    <p><span>Population: </span>${t}</p>
                    <p><span>Region: </span>${r}</p>
                </div>
            </article>
            <div class='container-boton'>
                <button class='btn-details'>Ver mas</button>            
            </div>
        </section>`;const p=(s,a,n,t,r,e,o,l,i)=>{const u=r===void 0?"Sin fronteras":r.join(", ");return`
        <button id='regresar'>Regresar</button>
        <section class='cardPaisDetails'>
            <header class='header-details'>
                <h2>${s}</h2>
            </header>
            <figure class='container-banderaDetails'>
                <img class='banderaDetails' src="${e}" alt="bandera imagen" />
            </figure>
            <main class='container-infoDetails'>
                <article class='container-info divisor'>
                    ${(()=>i==null?`
                <div class='container-escudo'>
                    <p class='sinEscudo' id='sinEscudo'>Sin escudo</p>
                </div>
            `:`
                <figure class='container-escudo'>
                    <img class='escudo' src="${i}" alt="escudo armada" />
                </figure>
            `)()}
                    <p><span>Capital:</span> ${a}</p>
                    <p><span>Lenguaje:</span> ${t.join(", ")}</p>
                </article>
                <article class='container-info'>
                    <p><span>Fronteras:</span> ${u}</p>
                    <p><span>Region:</span> ${n}</p>
                    <p><span>Population:</span> ${o}</p>
                    <p><span>Time Zone:</span> ${l.join(", ")}</p>
                </article>
            </main>
        </section>
    `},m=s=>{const a=document.getElementById(s).innerHTML;document.querySelector(".detailsPaises-Container").style.display="flex",document.querySelector(".interfazPaises-Container").style.opacity=0,document.querySelector(".interfazPaises-Container").classList.add("hidden"),document.querySelector("#nav").style.display="none";async function n(){let t=await fetch(`https://restcountries.com/v3.1/name/${a}?fullText=true`);if(!t.ok)throw new Error(`Status: ${t.status}`);return await t.json()}return n().then(t=>{document.querySelector(".detailsPaises-Container").innerHTML=t.map((e,o)=>p(e.name.common,e.capital,e.region,Object.values(e.languages),e.borders,e.flags.png,e.population,e.timezones,e.coatOfArms.png)),document.querySelector("#regresar").addEventListener("click",()=>{const e=document.querySelector(".detailsPaises-Container"),o=document.querySelector(".cardPaisDetails");e.removeChild(o),document.querySelector(".detailsPaises-Container").style.display="none",document.querySelector(".interfazPaises-Container").style.opacity=1,document.querySelector(".interfazPaises-Container").classList.remove("hidden"),document.querySelector("#nav").style.display="flex"})}),""},f=()=>{async function s(){let a=await fetch("https://restcountries.com/v3.1/all");if(!a.ok)throw new Error(`Status: ${a.status}`);return await a.json()}return s().then(a=>{document.querySelector(".interfazPaises-Container").classList.remove("cargando"),document.querySelector(".spinner").classList.add("visuallyhidden"),document.querySelector(".spinner").addEventListener("transitionend",()=>{document.querySelector(".spinner").classList.add("hidden")},{capture:!1,once:!0,passive:!1}),document.querySelector(".interfazPaises-Container").innerHTML=a.map((n,t)=>d(n.flags.png,n.name.common,n.capital,n.population,n.region,t)).join(""),document.querySelectorAll(".card").forEach(n=>{n.style.opacity=1}),document.querySelectorAll(".btn-details").forEach((n,t)=>{n.addEventListener("click",()=>m(t))})}).catch(a=>console.log(a)),""},c=s=>{const a=document.querySelectorAll(".card");let n;n=Array.from(a).map(t=>{if(t.id.toLowerCase().includes(s))return t}).filter(t=>t!==void 0),Array.from(a).map(t=>{n.includes(t)?t.style.display="flex":t.style.display="none"})},y=s=>{const a=document.querySelectorAll(".card");console.log(s),Array.from(a).map(n=>{n.childNodes[3].id.includes(s)||s==="all"?n.style.display="flex":n.style.display="none"})};document.querySelector("#app").innerHTML=`
  <header>
    <h1>Paises del mundo</h1>
  </header>
  <nav id='nav'>
    <section class='container-buscar'>
      <input type="text" name="buscar" id="buscar" placeholder='Ingresa el pais'/>
      <button id='borrar' class='unstyle'>
        <img src="https://cdn-icons-png.flaticon.com/512/8167/8167519.png" alt="icon trash" />
      </button>
    </section>
    <section class='container-filtrar'>
      <label htmlFor="regions">
        <span>Region</span>
        <select name="regions" id="region" class='inputRegion'>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
      <button id='btnFiltrarRegion' class='unstyle'>
        <img src="https://cdn-icons-png.flaticon.com/512/8467/8467740.png" alt="icon filtrar" />
      </button>
    </section>
  </nav>
  <section class='interfazPaises-Container cargando' >
    <div class='spinner'></div>
    ${f()}
  </section >
  <section class='detailsPaises-Container cargando' >
    <div class='spinner'></div>
    
  </section >
  `;document.querySelector("#buscar").addEventListener("keyup",s=>{const a=document.querySelector("#buscar").value;c(a.toLowerCase().trimStart())});document.querySelector("#borrar").addEventListener("click",()=>{document.querySelector("#buscar").value="";const s=document.querySelector("#buscar").value="";c(s.toLowerCase().trimStart())});document.querySelector("#btnFiltrarRegion").addEventListener("click",()=>{const s=document.querySelector("#region").value;y(s)});
