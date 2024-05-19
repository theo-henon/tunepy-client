import {BootstrapButton} from "./bootstrapButton.js";
import {FieldBlock} from "./fieldBlock.js";

export class LoginForm extends HTMLFormElement {
    constructor(registerBtnAction) {
        super();
        this.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");
        this.style.width = "100%"
        this.style.height = "100%";

        this.usernameField = new FieldBlock("username", "text", "Username");
        this.appendChild(this.usernameField);

        this.passwordField = new FieldBlock("password", "password", "Password");
        this.appendChild(this.passwordField);


        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("d-flex", "flex-row", "gap-1");
        this.submitButton = new BootstrapButton("submitButton", "Login", "submit", "primary", "person-check-fill");
        this.registerButton = new BootstrapButton("registerButton", "Register", "button", "dark", "person-fill-add");
        if (registerBtnAction)
            this.registerButton.addEventListener("click", () => registerBtnAction());
        buttonsContainer.appendChild(this.submitButton);
        buttonsContainer.appendChild(this.registerButton);
        this.appendChild(buttonsContainer);
    }

    getUsername() {
        return this.usernameField.getValue();
    }

    getPassword() {
        return this.passwordField.getValue();
    }
}

customElements.define('login-form', LoginForm, {extends: 'form'});