class WebSidebar extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("web-sidebar") as HTMLTemplateElement;
        const sidebar = template?.content;
        this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerText = `
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
        `;
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