class WebSidebar extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("web-sidebar") as HTMLTemplateElement;
        const sidebar = template?.content;
        this.attachShadow({ mode: "open" });
        const style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "src/assets/styles/web-sidebar.css");
        this.shadowRoot?.append(style, sidebar.cloneNode(true));
        const sidebarShadow = this.shadowRoot?.querySelector("#sidebar") as any;
        const sidebarButtonShadow = this.shadowRoot?.querySelector(".sidebar__button");
        window.addEventListener("web-open-sidebar", () => {
            sidebarShadow.showModal();
        });
        sidebarButtonShadow?.addEventListener("click", (event) => {
            event.preventDefault();
            sidebarShadow.close();
        });
    }
}

export default WebSidebar;