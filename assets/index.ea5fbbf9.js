const l=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};l();class u extends HTMLElement{constructor(){var r,i;super();const t=document.getElementById("web-bar"),n=t==null?void 0:t.content;this.attachShadow({mode:"open"});const o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href","/intro-section-with-dropdown-navigation/src/assets/styles/web-bar.css"),(r=this.shadowRoot)==null||r.append(o,n.cloneNode(!0));const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".bar__icon-button"),s=new CustomEvent("web-open-sidebar");e==null||e.addEventListener("click",d=>{d.preventDefault(),window.dispatchEvent(s)})}}class h extends HTMLElement{constructor(){var e;super();const t=document.getElementById("web-hero"),n=t==null?void 0:t.content;this.attachShadow({mode:"open"});const o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href","/intro-section-with-dropdown-navigation/src/assets/styles/web-hero.css"),(e=this.shadowRoot)==null||e.append(o,n.cloneNode(!0))}}class b extends HTMLElement{constructor(){var r,i,d;super();const t=document.getElementById("web-sidebar"),n=t==null?void 0:t.content;this.attachShadow({mode:"open"});const o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href","/intro-section-with-dropdown-navigation/src/assets/styles/web-sidebar.css"),(r=this.shadowRoot)==null||r.append(o,n.cloneNode(!0));const e=(i=this.shadowRoot)==null?void 0:i.querySelector("#sidebar"),s=(d=this.shadowRoot)==null?void 0:d.querySelector(".sidebar__button");window.addEventListener("web-open-sidebar",()=>{e.showModal()}),s==null||s.addEventListener("click",a=>{a.preventDefault(),e.close()})}}class m extends HTMLElement{constructor(){var e;super();const t=document.getElementById("web-navigation"),n=t==null?void 0:t.content;this.attachShadow({mode:"open"});const o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href","/intro-section-with-dropdown-navigation/src/assets/styles/web-navigation.css"),(e=this.shadowRoot)==null||e.append(o,n.cloneNode(!0))}}customElements.define("web-bar",u);customElements.define("web-hero",h);customElements.define("web-sidebar",b);customElements.define("web-navigation",m);