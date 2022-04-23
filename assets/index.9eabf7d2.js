const p=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}};p();class x extends HTMLElement{constructor(){var n,a;super();const e=document.getElementById("web-bar"),r=e==null?void 0:e.content;this.attachShadow({mode:"open"});const i=document.createElement("style");i.innerText=`
            .bar {
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
                width: 100%;
                height: 54px;
                padding-left: 16px;
                padding-right: 16px;
                margin-bottom: 24px;
            }
            
            .bar__section {
                box-sizing: border-box;
                flex: 0 0 auto;
            }
            
            .bar__navigation {
                display: none;
            }
            
            .bar__logo {
                display: block;
                width: auto;
                height: 28px;
            }
            
            .bar__text-button {
                display: none;
            }
            
            .bar__icon-button {
                box-sizing: border-box;
                display: flex;
                width: 32px;
                height: 32px;
                padding: 0;
                border: none;
                background-color: transparent;
                margin-bottom: 4px;
                cursor: pointer;
            }
            
            .bar__icon {
                width: 32px;
                height: auto;
                margin: auto;
            }
            
            @media screen and (min-width: 992px) {
                .bar {
                    height: 64px;
                    padding-left: 40px;
                    padding-right: 40px;
                    margin-bottom: 64px;
                }
            
                .bar__section--left {
                    display: flex;
                    flex-direction: row;
                }
            
                .bar__logo {
                    margin-right: 54px;
                }
            
                .bar__navigation {
                    display: block;
                }
            
                .bar__text-button {
                    display: inline-block;
                    height: 42px;
                    min-width: 104px;
                    padding: 0;
                    background-color: transparent;
                    border: none;
                    font-family: inherit;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--color-medium-gray);
                    cursor: pointer;
                }
            
                .bar__text-button:hover {
                    color: var(--color-almost-black);
                }
            
                .bar__text-button--outlined {
                    border-radius: 12px;
                    border: 2px solid var(--color-medium-gray);
                }
            
                .bar__text-button--outlined:hover {
                    border: 2px solid var(--color-almost-black);
                }
            
                .bar__icon-button {
                    display: none;
                }
            }
        `,(n=this.shadowRoot)==null||n.append(i,r.cloneNode(!0));const o=(a=this.shadowRoot)==null?void 0:a.querySelector(".bar__icon-button"),t=new CustomEvent("web-open-sidebar");o==null||o.addEventListener("click",s=>{s.preventDefault(),window.dispatchEvent(t)})}}class c extends HTMLElement{constructor(){var o;super();const e=document.getElementById("web-hero"),r=e==null?void 0:e.content;this.attachShadow({mode:"open"});const i=document.createElement("style");i.innerText=`
            .hero {
                box-sizing: border-box;
                width: 100%;
                height: auto;
                margin-bottom: 92px;
            }
            
            .hero__picture {
                box-sizing: border-box;
                display: block;
                width: 100%;
                height: auto;
                margin-bottom: 48px;
            }
            
            .hero__image {
                box-sizing: border-box;
                max-width: 100%;
                width: 100%;
                height: auto;
            }
            
            .hero__cta {
                box-sizing: border-box;
                padding-left: 16px;
                padding-right: 16px;
                text-align: center;
            }
            
            .hero__title {
                box-sizing: border-box;
                font-size: 36px;
                font-weight: 700;
                line-height: 40px;
                color: var(--color-almost-black);
                margin: 0 0 16px 0;
            }
            
            .hero__subtitle {
                box-sizing: border-box;
                max-width: 548px;
                font-size: 16px;
                font-weight: 500;
                line-height: 26px;
                color: var(--color-medium-gray);
                margin: 0 auto 24px auto;
            }
            
            .hero__button {
                display: inline-block;
                min-width: 136px;
                height: 48px;
                background-color: var(--color-almost-black);
                border: 2px solid var(--color-almost-black);
                font-family: inherit;
                font-size: 16px;
                font-weight: 500;
                color: var(--color-almost-white);
                border-radius: 14px;
                margin-bottom: 48px;
                cursor: pointer;
            }
            
            .hero__button:hover {
                background-color: transparent;
                color: var(--color-almost-black);
            }
            
            .hero__grid {
                box-sizing: border-box;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 24px;
                width: auto;
                height: auto;
            }
            
            .hero__logo {
                flex: 0 1 60px;
                box-sizing: border-box;
                max-width: 100%;
                width: auto;
                height: auto;
            }
            
            @media screen and (min-width: 348px) {
                .hero__grid {
                    grid-template-columns: repeat(4, 1fr);
                }
            }
            
            @media screen and (min-width: 576px) {
                .hero {
                    max-width: 576px;
                    margin-left: auto;
                    margin-right: auto;
                }
            
                .hero__picture {
                    width: 576px;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
            
            @media screen and (min-width: 768px) {
                .hero {
                    max-width: 768px;
                }
            }
            
            @media screen and (min-width: 992px) {
                .hero {
                    max-width: 992px;
                    display: flex;
                    flex-direction: row;
                    padding-left: 40px;
                    padding-right: 40px;
                }
            
                .hero__picture {
                    flex: 0 0 400px;
                    width: 400px;
                    order: 2;
                    margin-left: 0;
                    margin-right: 0;
                    margin-bottom: 0;
                }
            
                .hero__cta {
                    flex: 1 1 0;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    order: 1;
                    padding-right: 64px;
                    padding-left: 0;
                    text-align: start;
                }
            
                .hero__title {
                    font-size: 56px;
                    line-height: 64px;
                    margin-top: 92px;
                }
            
                .hero__subtitle {
                    max-width: none;
                    font-size: 18px;
                    line-height: 28px;
                    margin: 0 0 48px 0;
                }
            
                .hero__button {
                    min-width: 164px;
                    height: 56px;
                    font-size: 18px;
                }
            
                .hero__grid {
                    justify-content: flex-start;
                    margin-top: auto;
                }
            }
            
            @media screen and (min-width: 1225px) {
                .hero {
                    max-width: 1225px;
                }
            
                .hero__picture {
                    flex: 0 0 480px;
                    width: 480px;
                }
            
                .hero__cta {
                    padding-right: 136px;
                }
            
                .hero__title {
                    font-size: 80px;
                    line-height: 80px;
                }
            
                .hero__grid {
                    gap: 32px;
                }
            }
        `,(o=this.shadowRoot)==null||o.append(i,r.cloneNode(!0))}}class h extends HTMLElement{constructor(){var n,a,s;super();const e=document.getElementById("web-sidebar"),r=e==null?void 0:e.content;this.attachShadow({mode:"open"});const i=document.createElement("style");i.innerText=`
            .sidebar {
                box-sizing: border-box;
                left: auto;
                right: 0;
                width: 240px;
                height: 100vh;
                max-height: 100vh;
                border: none;
                background-color: var(--color-almost-white);
                padding: 16px 16px 16px 24px;
            }
            
            .sidebar::backdrop {
                background-color: rgba(0, 0, 0, 0.8);
            }
            
            .sidebar__button {
                box-sizing: border-box;
                display: flex;
                width: 28px;
                height: 28px;
                background-color: transparent;
                border: none;
                padding: 0;
                margin: 0 0 36px auto;
                cursor: pointer;
            }
            
            .sidebar__icon {
                box-sizing: border-box;
                width: 24px;
                height: 24px;
                margin: auto;
            }
            
            @media screen and (min-width: 992px) {
                .sidebar {
                    display: none;
                }
            }
        `,(n=this.shadowRoot)==null||n.append(i,r.cloneNode(!0));const o=(a=this.shadowRoot)==null?void 0:a.querySelector("#sidebar"),t=(s=this.shadowRoot)==null?void 0:s.querySelector(".sidebar__button");window.addEventListener("web-open-sidebar",()=>{o.showModal()}),t==null||t.addEventListener("click",l=>{l.preventDefault(),o.close()})}}class b extends HTMLElement{constructor(){var o;super();const e=document.getElementById("web-navigation"),r=e==null?void 0:e.content;this.attachShadow({mode:"open"});const i=document.createElement("style");i.innerText=`
            .navigation {
                box-sizing: border-box;
                width: 100%;
                height: auto;
            }
            
            .dropdown {
                box-sizing: border-box;
                width: 100%;
                height: auto;
                margin-bottom: 16px;
            }
            
            .dropdown__header {
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap: 16px;
                list-style: none;
                cursor: pointer;
            }
            
            .dropdown__body {
                box-sizing: border-box;
                width: 100%;
                height: auto;
                padding-left: 24px;
                margin-top: 24px;
                margin-bottom: 24px;
            }
            
            .dropdown__name {
                box-sizing: border-box;
                font-size: 16px;
                font-weight: 500;
                color: var(--color-medium-gray);
            }
            
            .dropdown__icon {
                box-sizing: border-box;
                width: 10px;
                height: auto;
            }
            
            .dropdown[open] .dropdown__icon {
                transform: rotate(180deg);
            }
            
            .link {
                box-sizing: border-box;
                display: block;
                width: 100%;
                text-decoration: none;
                margin-bottom: 16px;
            }
            
            .link:last-child {
                margin-bottom: 0;
            }
            
            .link__icon {
                box-sizing: border-box;
                display: inline-block;
                width: 20px;
                height: auto;
                margin-right: 12px;
                vertical-align: middle;
            }
            
            .link__text {
                font-size: 16px;
                font-weight: 500;
                color: var(--color-medium-gray);
                vertical-align: middle;
            }
            
            @media screen and (min-width: 992px) {
                .navigation {
                    display: flex;
                    flex-direction: row;
                    padding-top: 4px;
                }
            
                .dropdown {
                    position: relative;
                    margin: 0 32px 0 0;
                }
            
                .dropdown__header {
                    gap: 4px;
                }
            
                .dropdown__name {
                    font-size: 14px;
                }
            
                .dropdown__body {
                    position: absolute;
                    bottom: -20px;
                    transform: translateY(100%);
                    width: 156px;
                    padding: 24px;
                    margin: 0;
                    background-color: #fff;
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);
                    border-radius: 12px;
                }
            
                .dropdown__body--from-right {
                    right: 0;
                }
            
                .dropdown__body--from-left {
                    left: 0;
                }
            
                .link__icon {
                    width: 16px;
                }
            
                .link__text {
                    font-size: 14px;
                    font-weight: 500;
                }
            
                .link--top {
                    margin: 0;
                    line-height: 1;
                }
            
                .link--top:last-child {
                    margin-left: 32px;
                }
            }
        `,(o=this.shadowRoot)==null||o.append(i,r.cloneNode(!0))}}customElements.define("web-bar",x);customElements.define("web-hero",c);customElements.define("web-sidebar",h);customElements.define("web-navigation",b);
