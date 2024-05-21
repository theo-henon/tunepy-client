import {BootstrapButton} from "./bootstrapButton.js";
import {FieldBlock} from "./fieldBlock.js";

export class RegisterForm extends HTMLFormElement {
    constructor() {
        super();
        this.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");

        this.usernameField = new FieldBlock("username", "text", "Username");
        this.appendChild(this.usernameField);

        this.passwordField = new FieldBlock("password", "password", "Password");
        this.appendChild(this.passwordField);

        this.passwordRepeatField = new FieldBlock("passwordRepeat", "password", "Repeat password");
        this.appendChild(this.passwordRepeatField);

        this.submitButton = new BootstrapButton("submitButton", "Register", "submit", "primary", "person-add");
        this.appendChild(this.submitButton);
    }

    getUsername() {
        return this.usernameField.getValue();
    }

    getPassword() {
        return this.passwordField.getValue();
    }

    getPasswordRepeat() {
        return this.passwordRepeatField.getValue();
    }
}

customElements.define('register-form', RegisterForm, {extends: 'form'});