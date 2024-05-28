export class AddServerForm extends HTMLFormElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="form-group mb-2">
                <label for="name">Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Enter your server name" required>
            </div>
            <div class="form-group mb-2">
                <label for="address">Address<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="address" name="address" placeholder="Enter the server address" required>
            </div>
            <button type="submit" class="btn btn-primary"><i class="bi bi-plus-circle"></i> Add the server</button>
        `;
    }

    getServerName() {
        return this.querySelector("#name").value;
    }

    getServerAddress() {
        return this.querySelector("#address").value;
    }
}

customElements.define("add-server-form", AddServerForm, {extends: "form"});