import {LoginForm} from "../components/loginForm.js";
import {Request} from "../utils/request.js";

export class LoginPage extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add("d-flex", "justify-content-center", "align-items-center");

        this.loginForm = new LoginForm();
        this.loginForm.style.width = "25%";
        this.loginForm.addEventListener("submit", async event => this.login(event));

        this.appendChild(this.loginForm);
    }

    async login(event) {
        event.preventDefault();
        const username = this.loginForm.getUsername();
        const password = this.loginForm.getPassword();

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

customElements.define("login-page", LoginPage, {extends: "div"});