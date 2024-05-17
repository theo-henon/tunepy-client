import {BootstrapButton} from "./bootstrapButton.js";
import {FieldBlock} from "./fieldBlock.js";
import {Request} from "../utils/request.js"
import {Container} from "./container.js";

export class LoginForm extends HTMLFormElement {
    constructor() {
        super();

        this.usernameField = new FieldBlock("username", "text", "Username");
        this.appendChild(this.usernameField);

        this.passwordField = new FieldBlock("password", "password", "Password");
        this.appendChild(this.passwordField);


        const buttonsContainer = new Container();
        this.submitButton = new BootstrapButton("submitButton", "Login", "submit");
        this.registerLink = new BootstrapButton("registerLink", "Create an account", "button", "dark");
        buttonsContainer.addRow([Container.createColumn(this.submitButton), Container.createColumn(this.registerLink)]);
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