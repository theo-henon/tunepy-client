export class BootstrapButton extends HTMLButtonElement {
    constructor(id, text, type = "button", subclass = "btn-primary") {
        super();
        this.id = id;
        this.textContent = text;
        this.type = type;
        this.classList.add("btn", subclass);
    }
}

customElements.define('boostrap-button', BootstrapButton, {extends: 'button'});