import {LoginForm} from "../components/loginForm.js";
import { BorderSpinner } from "../components/borderSpinner.js";

export class LoginPage extends HTMLDivElement {
    constructor(loginAction, registerBtnAction) {
        super();
        this.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");

        this.loginForm = new LoginForm(registerBtnAction);
        this.loginForm.classList.add("mt-3");
        this.loginForm.style.width = "25%";
        this.loginForm.addEventListener("submit", async event => {
            event.preventDefault();
            loginAction();
        });
        this.appendChild(this.loginForm);

        this.spinner = new BorderSpinner();
        this.spinner.classList.add("mt-3");
        this.appendChild(this.spinner);
        this.showLoginStatus(false);
    }

    showLoginStatus(value = false) {
        this.spinner.hidden = !value;
    }
}

customElements.define("login-page", LoginPage, {extends: "div"});