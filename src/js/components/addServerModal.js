import {ModalDialog} from "./modalDialog.js";
import {AddServerForm} from "./addServerForm.js";

export class AddServerModal extends ModalDialog {
    constructor(id, onAdding) {
        const form = new AddServerForm();

        super(id, "Add a server", form, null);

        form.addEventListener("submit", event => {
            event.preventDefault();
            onAdding(form);
        });
    }
}

customElements.define("add-server-modal", AddServerModal, {extends: "div"});