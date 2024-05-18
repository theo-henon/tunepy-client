import {LoginForm} from "../components/loginForm.js";

export class LoginPage extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add("d-flex", "justify-content-center", "align-items-center");

        this.loginForm = new LoginForm();
        this.loginForm.style.width = "25%";

        this.appendChild(this.loginForm);
    }
}

customElements.define("login-page", LoginPage, {extends: "div"});