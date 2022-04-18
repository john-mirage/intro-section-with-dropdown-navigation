import "./main.css";

customElements.define("web-bar",
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById("web-bar") as HTMLTemplateElement;
            let bar = template?.content;
            const shadowRoot = this.attachShadow({ mode: "open" });
            const style = document.createElement("link");
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", "src/assets/styles/web-bar.css");
            shadowRoot.append(style, bar.cloneNode(true));
        }
    }
);

customElements.define("web-hero",
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById("web-hero") as HTMLTemplateElement;
            let hero = template?.content;
            const shadowRoot = this.attachShadow({ mode: "open" });
            const style = document.createElement("link");
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", "src/assets/styles/web-hero.css");
            shadowRoot.append(style, hero.cloneNode(true));
        }
    }
);
