import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BootstrapButton} from "./bootstrapButton.js";
import {FieldBlock} from "./fieldBlock.js";

export class LoginForm extends HTMLFormElement {
    constructor() {
        super();

        this.usernameField = new FieldBlock("username", "text", "Username");
        this.appendChild(this.usernameField);

        this.passwordField = new FieldBlock("password", "password", "Password");
        this.appendChild(this.passwordField);

        this.submitButton = new BootstrapButton("submitButton", "Login", "submit");
        this.appendChild(this.submitButton);

        this.addEventListener("submit", this.submit)
    }

    async submit(event) {
        event.preventDefault();
        const username = this.usernameField.getValue();
        const password = this.passwordField.getValue();

        if (!username || !password)
            return;

        const requestBody = {
            "username": username,
            "password": password
        };

        const response = await fetch("http://localhost:5000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        });

        const responseBody = await response.json();
        if (response.ok)
            localStorage.setItem("access_token", responseBody.access_token);
        alert(responseBody.msg);
    }
}

customElements.define('login-form', LoginForm, {extends: 'form'});