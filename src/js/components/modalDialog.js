export class ModalDialog extends HTMLDivElement {
    constructor(id = "modalDialog", title = "Modal dialog", body, footer) {
        super();
        this.id = id;
        this.classList.add("modal", "fade");
        this.tabIndex = -1;
        this.setAttribute("aria-labelledby", "modal-dialog");
        this.setAttribute("aria-hidden", "true");

        const dialog = document.createElement("div");
        dialog.classList.add("modal-dialog");
        this.appendChild(dialog);

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        dialog.appendChild(modalContent);

        const modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");
        modalHeader.innerHTML = `
            <h1 class="modal-title fs-5">${title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `;
        modalContent.appendChild(modalHeader);

        const bodyDiv = document.createElement("div");
        bodyDiv.classList.add("modal-body");
        bodyDiv.appendChild(body);
        modalContent.appendChild(bodyDiv);

        const footerDiv = document.createElement("div");
        footerDiv.classList.add("modal-footer");
        if (footer)
            footerDiv.appendChild(footer);
        modalContent.appendChild(footerDiv);
    }
}

customElements.define("modal-dialog", ModalDialog, {extends: "div"});
