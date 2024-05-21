import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';

export class OffCanvas extends HTMLDivElement {
    constructor(id, title, location = "start") {
        super();
        this.classList.add("offcanvas", `offcanvas-${location}`);
        this.tabIndex = -1;
        this.id = id;
        this.titleId = `${id}Title`;
        this.setAttribute("data-bs-target", this.titleId);

        this.header = document.createElement("div");
        this.header.classList.add("offcanvas-header");
        this.header.innerHTML = `
            <h5 id="${this.titleId}">${title}</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        `;
        this.appendChild(this.header);

        this.body = document.createElement("div");
        this.body.classList.add("offcanvas-body");
        this.appendChild(this.body);
    }

    show() {
        new bootstrap.Offcanvas(this).show();
    }
}

customElements.define("off-canvas", OffCanvas, {extends: "div"});