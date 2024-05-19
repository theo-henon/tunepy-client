import {LoginForm} from "../components/loginForm.js";

export class LoginPage extends HTMLDivElement {
    constructor(loginAction, registerBtnAction) {
        super();
        this.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");

        this.loginForm = new LoginForm(registerBtnAction);
        this.loginForm.style.width = "25%";
        this.loginForm.addEventListener("submit", async event => {
            event.preventDefault();
            loginAction();
        });
        this.appendChild(this.loginForm);

        this.loginStatus = document.createElement("p");
        this.loginStatus.innerHTML = "Trying to log in...";
        this.showLoginStatus(false);
        this.appendChild(this.loginStatus);
    }

    showLoginStatus(value = false) {
        this.loginStatus.hidden = !value;
    }
}

customElements.define("login-page", LoginPage, {extends: "div"});