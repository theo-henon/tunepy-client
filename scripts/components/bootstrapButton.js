export class BootstrapButton extends HTMLButtonElement {
    constructor(id, text, type = "button", color = "primary") {
        super();
        this.id = id;
        this.textContent = text;
        this.type = type;
        this.classList.add("btn", `btn-${color}`);
    }
}

customElements.define('boostrap-button', BootstrapButton, {extends: 'button'});