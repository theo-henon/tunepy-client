import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BootstrapButton} from "./bootstrapButton.js";
import {FieldBlock} from "./fieldBlock.js";

export class RegisterForm extends HTMLFormElement {
    constructor() {
        super()

        this.usernameField = new FieldBlock("username", "text", "Username");
        this.appendChild(this.usernameField);

        this.passwordField = new FieldBlock("password", "password", "Password");
        this.appendChild(this.passwordField);

        this.passwordRepeatField = new FieldBlock("passwordRepeat", "password", "Repeat password");
        this.appendChild(this.passwordRepeatField);

        this.submitButton = new BootstrapButton("submitButton", "Register", "submit");
        this.appendChild(this.submitButton);

        // Bind submit event
        this.addEventListener("submit", this.submit)
    }

    async submit(event) {
        event.preventDefault();
        const username = this.usernameField.getValue();
        const password = this.passwordField.getValue();
        const passwordRepeat = this.passwordRepeatField.getValue();

        if (!username || !password || !passwordRepeat)
            return;

        if (password !== passwordRepeat) {
            alert("Passwords don't match!");
            return;
        }

        const requestBody = {
            "username": username,
            "password": password
        };

        const response = await fetch("http://localhost:5000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        });

        const responseBody = await response.json();
        alert(responseBody.msg);
    }
}

customElements.define('register-form', RegisterForm, {extends: 'form'});