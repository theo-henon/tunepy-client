import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BootstrapButton} from "./bootstrapButton.js";
import {FieldBlock} from "./fieldBlock.js";
import {Request} from "../utils/request.js"

export class LoginForm extends HTMLFormElement {
    constructor() {
        super();

        this.usernameField = new FieldBlock("username", "text", "Username");
        this.appendChild(this.usernameField);

        this.passwordField = new FieldBlock("password", "password", "Password");
        this.appendChild(this.passwordField);

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("container");
        const firstRow = document.createElement("div");
        firstRow.classList.add("row");

        const firstCol = document.createElement("div");
        firstCol.classList.add("col");
        this.submitButton = new BootstrapButton("submitButton", "Login", "submit");
        firstCol.appendChild(this.submitButton);
        firstRow.appendChild(firstCol);

        const secondCol = document.createElement("div");
        secondCol.classList.add("col");
        this.registerLink = new BootstrapButton("registerLink", "Create an account", "button", "btn-dark");
        secondCol.appendChild(this.registerLink);
        firstRow.appendChild(secondCol);

        buttonsContainer.appendChild(firstRow);
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