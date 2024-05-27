import {ServerListGroupItem} from "../components/serverListGroupItem.js";
import {AddServerModal} from "../components/addServerModal.js";
import {ServersList} from "../utils/serversList.js";

export class ServerSelectionPage extends HTMLDivElement {
    constructor(serversList = new ServersList(), joinAction, editAction, removeAction) {
        super();
        this.serversList = serversList;
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

        this.serversListGroup = document.createElement("div");
        this.serversListGroup.classList.add("list-group", "w-50");
        this.serversList.list.forEach(server => this.serversListGroup.appendChild(new ServerListGroupItem(server, joinAction, editAction, removeAction)))
        this.appendChild(this.serversListGroup);
    }
}

customElements.define("server-selection-page", ServerSelectionPage, {extends: "div"});