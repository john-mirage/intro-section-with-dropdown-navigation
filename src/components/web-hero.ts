class WebHero extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("web-hero") as HTMLTemplateElement;
        const hero = template?.content;
        this.attachShadow({ mode: "open" });
        const style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "/intro-section-with-dropdown-navigation/assets/styles/web-hero.css");
        this.shadowRoot?.append(style, hero.cloneNode(true));
    }
}

export default WebHero;