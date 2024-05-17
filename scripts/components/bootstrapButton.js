export class BootstrapButton extends HTMLButtonElement {
    constructor(id, text, type = "button", color = "primary", icon = "none") {
        super();
        this.id = id;
        this.type = type;
        this.classList.add("btn", `btn-${color}`);

        if (icon !== "none")
            this.innerHTML = `<i class="bi bi-${icon}"></i> ${text}`;
        else
            this.textContent = text;
    }
}

customElements.define('boostrap-button', BootstrapButton, {extends: 'button'});