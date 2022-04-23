class WebNavigation extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("web-navigation") as HTMLTemplateElement;
        const navigation = template?.content;
        this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerText = `
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
        `;
        this.shadowRoot?.append(style, navigation.cloneNode(true));
    }
}

export default WebNavigation;