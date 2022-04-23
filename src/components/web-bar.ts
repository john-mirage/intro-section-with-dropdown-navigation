class WebBar extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("web-bar") as HTMLTemplateElement;
        const bar = template?.content;
        this.attachShadow({ mode: "open" });
        const style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "/intro-section-with-dropdown-navigation/src/assets/styles/web-bar.css");
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