class WebHero extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("web-hero") as HTMLTemplateElement;
        const hero = template?.content;
        this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerText = `
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
        `;
        this.shadowRoot?.append(style, hero.cloneNode(true));
    }
}

export default WebHero;