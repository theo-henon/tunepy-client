import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BootstrapButton} from "./bootstrapButton.js";

export class LoginForm extends HTMLFormElement {
    constructor() {
        super()

        // Create username field
        let fieldBlock1 = document.createElement("div");
        fieldBlock1.className = "mb-3";
        this.usernameLabel = document.createElement("label");
        this.usernameLabel.setAttribute("for", "username");
        this.usernameLabel.classList.add("form-label");
        this.usernameLabel.innerText = "Username"
        fieldBlock1.appendChild(this.usernameLabel);
        this.usernameField = document.createElement("input");
        this.usernameField.setAttribute("type", "text");
        this.usernameField.classList.add("form-control");
        this.usernameField.id = "username";
        fieldBlock1.appendChild(this.usernameField);
        this.appendChild(fieldBlock1);

        // Create password field
        let fieldBlock2 = document.createElement("div");
        fieldBlock2.className = "mb-3";
        this.passwordLabel = document.createElement("label");
        this.passwordLabel.setAttribute("for", "password");
        this.passwordLabel.classList.add("form-label");
        this.passwordLabel.innerText = "Password"
        fieldBlock2.appendChild(this.passwordLabel);
        this.passwordField = document.createElement("input");
        this.passwordField.setAttribute("type", "password");
        this.passwordField.classList.add("form-control");
        this.usernameField.id = "password";
        fieldBlock2.appendChild(this.passwordField);
        this.appendChild(fieldBlock2);

        // Create submit button
        this.submitButton = new BootstrapButton("submitButton", "Login", "submit");
        this.appendChild(this.submitButton);

        // Bind submit event
        this.addEventListener("submit", this.submit)
    }

    async submit(event) {
        event.preventDefault();
        const username = this.usernameField.value;
        const password = this.passwordField.value;

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

customElements.define('login-form', LoginForm, { extends: 'form' });