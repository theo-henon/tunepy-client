export class ServerSelectionPage extends HTMLDivElement {
    constructor() {
        super();

        this.innerHTML = `
            <h1>Server selection</h1>
        `;
    }
}

customElements.define("server-selection-page", ServerSelectionPage, {extends: "div"});