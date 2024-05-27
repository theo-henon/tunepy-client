import {ServerListGroupItem} from "../components/serverListGroupItem.js";
import {AddServerModal} from "../components/addServerModal.js";

export class ServerSelectionPage extends HTMLDivElement {
    constructor(serversList = [], joinAction, editAction, removeAction) {
        super();
        this.classList.add("d-flex", "flex-column", "align-items-center", "gap-3");

        const title = document.createElement("h1");
        title.innerText = "Server selection";
        this.appendChild(title);

        this.addServerModal = new AddServerModal("addServerModal");
        this.appendChild(this.addServerModal);

        this.addServerBtn = document.createElement("button");
        this.addServerBtn.classList.add("btn", "btn-primary");
        this.addServerBtn.innerHTML = "<i class=\"bi bi-plus-circle\"></i> Add a server";
        this.addServerBtn.setAttribute("data-bs-toggle", "modal");
        this.addServerBtn.setAttribute("data-bs-target", "#addServerModal");
        this.appendChild(this.addServerBtn);

        this.serverList = document.createElement("div");
        this.serverList.classList.add("list-group", "w-50");
        for (const server of serversList)
            this.serverList.appendChild(new ServerListGroupItem(server, joinAction, editAction, removeAction))
        this.appendChild(this.serverList);
    }
}

customElements.define("server-selection-page", ServerSelectionPage, {extends: "div"});