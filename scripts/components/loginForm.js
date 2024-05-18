import {BootstrapButton} from "./bootstrapButton.js";
import {FieldBlock} from "./fieldBlock.js";
import {Request} from "../utils/request.js"

export class LoginForm extends HTMLFormElement {
    constructor() {
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
        this.registerButton = new BootstrapButton("registerButton", "Register", "submit", "dark", "person-fill-add");
        buttonsContainer.appendChild(this.submitButton);
        buttonsContainer.appendChild(this.registerButton);
        this.appendChild(buttonsContainer);

        this.addEventListener("submit", this.submit)
    }

    async submit(event) {
        event.preventDefault();
        const username = this.usernameField.getValue();
        const password = this.passwordField.getValue();

        if (!username || !password)
            return;

        const response = await Request.post("/users/login", {
            "username": username,
            "password": password
        });

        const responseBody = await response.json();
        if (response.ok)
            localStorage.setItem("access_token", responseBody.access_token);
        alert(responseBody.msg);
    }
}

customElements.define('login-form', LoginForm, {extends: 'form'});