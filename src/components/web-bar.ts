class WebBar extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("web-bar") as HTMLTemplateElement;
        const bar = template?.content;
        this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerText = `
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
        `;
        this.shadowRoot?.append(style, bar.cloneNode(true));
        const button = this.shadowRoot?.querySelector(".bar__icon-button");
        const buttonEvent = new CustomEvent("web-open-sidebar");
        button?.addEventListener("click", (event) => {
            event.preventDefault();
            window.dispatchEvent(buttonEvent);
        });
    }
}

export default WebBar;