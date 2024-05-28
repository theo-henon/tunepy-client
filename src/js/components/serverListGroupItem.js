export class ServerListGroupItem extends HTMLDivElement {
    static count = 0;

    constructor(server, joinAction, editAction, removeAction) {
        super();
        this.server = server;
        const collapseId = `serverCollapse${ServerListGroupItem.count++}`
        this.classList.add("list-group-item", "list-group-item-action");
        this.href = "#serverCollapse";
        this.role = "button"
        this.setAttribute("data-bs-toggle", "collapse");
        this.setAttribute("data-bs-target", `#${collapseId}`);
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-controls", collapseId);

        this.innerHTML = `
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
                    
            <div class="collapse" id="${collapseId}">
                <div class="card card-body gap-1">
                    <button class="btn btn-success"><i class="bi bi-arrow-right"></i> Select</button>
                    <button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="This feature is not handled yet."><i class="bi bi-pen"></i> Edit</button>
                    <button class="btn btn-danger"><i class="bi bi-trash"></i> Remove</button>
                </div>
            </div>
        `;

        this.querySelectorAll("button").forEach(btn => {
           btn.addEventListener("click", _ => {
               if (btn.classList.contains("btn-success"))
                   joinAction(this.server);
               else if (btn.classList.contains("btn-primary"))
                   editAction(this.server);
               else
                   removeAction(this.server);
           }) ;
        });
    }
}

customElements.define("server-list-group-item", ServerListGroupItem, {extends: "div"});