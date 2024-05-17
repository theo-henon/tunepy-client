import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BootstrapButton} from "./bootstrapButton.js";
import {FieldBlock} from "./fieldBlock.js";
import {Request} from "../utils/request.js";
import {Container} from "./container.js";

export class RegisterForm extends HTMLFormElement {
    constructor() {
        super()

        this.usernameField = new FieldBlock("username", "text", "Username");
        this.appendChild(this.usernameField);

        this.passwordField = new FieldBlock("password", "password", "Password");
        this.appendChild(this.passwordField);

        this.passwordRepeatField = new FieldBlock("passwordRepeat", "password", "Repeat password");
        this.appendChild(this.passwordRepeatField);

        const buttonsContainer = new Container();
        this.submitButton = new BootstrapButton("submitButton", "Register", "submit");
        buttonsContainer.addRow([Container.createColumn(this.submitButton)]);
        this.appendChild(buttonsContainer);

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

        const response = await Request.post("/users/register", {
            "username": username,
            "password": password
        });

        const responseBody = await response.json();
        if (response.ok)
            localStorage.setItem("access_token", responseBody.access_token);
        alert(responseBody.msg);
    }
}

customElements.define('register-form', RegisterForm, {extends: 'form'});