export class ServerSelectionPage extends HTMLDivElement {
    constructor() {
        super();

        this.innerHTML = `
            <h1>Server selection</h1>
            <button class="btn btn-primary"><i class="bi bi-plus-circle"></i> Add a server</button>
            <div class="list-group w-50">
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="container">
                        <div class="row">
                            <div class="col d-flex">
                                <p>
                                    <strong style="font-size: 1.5em">Main server</strong><br>
                                    localhost:8080
                                </p>                              
                            </div>
                             <div class="col d-flex align-items-center">
                                <div class="ms-auto">                                
                                    <i class="bi bi-check text-success" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Server status" data-bs-content="Ping: 1ms"></i>
                                    <i class="bi bi-arrow-right"></i>
                                </div>
                             </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }
}

customElements.define("server-selection-page", ServerSelectionPage, {extends: "div"});