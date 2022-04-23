class WebNavigation extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("web-navigation") as HTMLTemplateElement;
        const navigation = template?.content;
        this.attachShadow({ mode: "open" });
        const style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "src/assets/styles/web-navigation.css");
        this.shadowRoot?.append(style, navigation.cloneNode(true));
    }
}

export default WebNavigation;