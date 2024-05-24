export class ServerSelectionPage extends HTMLDivElement {
    constructor(serversList = []) {
        super();
        this.classList.add("d-flex", "flex-column", "align-items-center", "gap-3");

        const title = document.createElement("h1");
        title.innerText = "Server selection";
        this.appendChild(title);

        this.addServerBtn = document.createElement("button");
        this.addServerBtn.classList.add("btn", "btn-primary");
        this.addServerBtn.innerHTML = "<i class=\"bi bi-plus-circle\"></i> Add a server";
        this.appendChild(this.addServerBtn);

        this.serverList = document.createElement("div");
        this.serverList.classList.add("list-group", "w-50");
        let items = "";
        let i = 0;
        for (const server of serversList) {
            items += `
                <a class="list-group-item list-group-item-action" data-bs-toggle="collapse" href="#serverCollapse${i}" role="button" aria-expanded="false" aria-controls="serverCollapse${i}">
                    <div class="container">
                        <div class="row">
                            <div class="col d-flex">
                                <p>
                                    <strong style="font-size: 1.5em">${server.name}</strong>
                                    <i style="font-size: 1.75em;" class="bi bi-check text-success" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Ping: 1ms"></i><br>
                                    ${server.address}
                                </p>                              
                            </div>
                        </div>
                    </div>
                    
                    <div class="collapse" id="serverCollapse${i}">
                        <div class="card card-body gap-1">
                            <button class="btn btn-success"><i class="bi bi-arrow-right"></i> Select</button>
                            <button class="btn btn-primary"><i class="bi bi-pen"></i> Edit</button>
                            <button class="btn btn-danger"><i class="bi bi-trash"></i> Remove</button>
                        </div>
                    </div>
                </a>
            `;
            i++;
        }
        this.serverList.innerHTML = items;
        this.appendChild(this.serverList);

        this.querySelectorAll(".collapse button").forEach(btn => btn.addEventListener("click", () => alert("toto")));
    }
}

customElements.define("server-selection-page", ServerSelectionPage, {extends: "div"});