import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BootstrapButton} from "./bootstrapButton.js";

export class RegisterForm extends HTMLFormElement {
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
        this.passwordField.id = "password";
        fieldBlock2.appendChild(this.passwordField);
        this.appendChild(fieldBlock2);

        // Create password repeat field
        let fieldBlock3 = document.createElement("div");
        fieldBlock3.className = "mb-3";
        this.passwordLabel = document.createElement("label");
        this.passwordLabel.setAttribute("for", "password");
        this.passwordLabel.classList.add("form-label");
        this.passwordLabel.innerText = "Repeat password"
        fieldBlock3.appendChild(this.passwordLabel);
        this.passwordRepeatField = document.createElement("input");
        this.passwordRepeatField.setAttribute("type", "password");
        this.passwordRepeatField.classList.add("form-control");
        this.passwordRepeatField.id = "passwordRepeat";
        fieldBlock3.appendChild(this.passwordRepeatField);
        this.appendChild(fieldBlock3);

        // Create submit button
        this.submitButton = new BootstrapButton("submitButton", "Register", "submit");
        this.appendChild(this.submitButton);

        // Bind submit event
        this.addEventListener("submit", this.submit)
    }

    async submit(event) {
        event.preventDefault();
        const username = this.usernameField.value;
        const password = this.passwordField.value;
        const passwordRepeat = this.passwordRepeatField.value;

        if (!username || !password || !passwordRepeat)
            return;

        if (password !== passwordRepeat) {
            alert("Passwords don't match");
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