import {ModalDialog} from "./modalDialog.js";

export class AddServerModal extends ModalDialog {
    constructor(id) {
        const form = document.createElement("form");
        form.innerHTML = `
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

        super(id, "Add a server", form, null);

        form.addEventListener("submit", event => {
            event.preventDefault();
            // TODO: implement adding server logic here
        });
    }
}

customElements.define("add-server-modal", AddServerModal, {extends: "div"});