import {LoginForm} from "../components/loginForm.js";
import {Request} from "../utils/request.js";

export class LoginPage extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");

        this.loginForm = new LoginForm();
        this.loginForm.style.width = "25%";
        this.loginForm.addEventListener("submit", async event => this.login(event));
        this.appendChild(this.loginForm);

        this.loginStatus = document.createElement("p");
        this.loginStatus.innerHTML = "Trying to log in...";
        this.loginStatus.hidden = true;
        this.appendChild(this.loginStatus);
    }

    async login(event) {
        event.preventDefault();

        this.loginStatus.hidden = false;
        const username = this.loginForm.getUsername();
        const password = this.loginForm.getPassword();

        if (!username || !password)
            return;

        const response = await Request.post("/users/login", {
            "username": username,
            "password": password
        });

        this.loginStatus.hidden = true;
        if (!response)
            return;

        const responseBody = await response.json();
        if (response.ok)
            localStorage.setItem("access_token", responseBody.access_token);
        this.removeChild(msg);
        alert(responseBody.msg);
    }
}

customElements.define("login-page", LoginPage, {extends: "div"});