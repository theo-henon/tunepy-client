export class ServerSelectionPage extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add("d-flex", "flex-column", "align-items-center", "gap-3");

        this.innerHTML = `
            <h1>Server selection</h1>
            <button class="btn btn-primary"><i class="bi bi-plus-circle"></i> Add a server</button>
            <div class="list-group w-50">
                <a class="list-group-item list-group-item-action" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                    <div class="container">
                        <div class="row">
                            <div class="col d-flex">
                                <p>
                                    <strong style="font-size: 1.5em">Main server</strong>
                                    <i style="font-size: 1.75em;" class="bi bi-check text-success" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Ping: 1ms"></i><br>
                                    localhost:8080
                                </p>                              
                            </div>
                        </div>
                    </div>
                    
                    <div class="collapse" id="collapse1">
                        <div class="card card-body gap-1">
                            <button class="btn btn-success"><i class="bi bi-arrow-right"></i> Select</button>
                            <button class="btn btn-primary"><i class="bi bi-pen"></i> Edit</button>
                            <button class="btn btn-danger"><i class="bi bi-trash"></i> Remove</button>
                        </div>
                    </div>
                </a>
            </div>
        `;

        this.querySelectorAll(".collapse button").forEach(btn => btn.addEventListener("click", () => alert("toto")));
    }
}

customElements.define("server-selection-page", ServerSelectionPage, {extends: "div"});