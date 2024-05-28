import {LoginForm} from "../components/loginForm.js";
import {Spinner} from "../components/spinner.js";
import {Requests} from "../utils/requests.js";

export class LoginPage extends HTMLDivElement {
    constructor(onLogin, onRegisterBtnClick) {
        super();
        this.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");

        this.loginForm = new LoginForm(onRegisterBtnClick);
        this.loginForm.classList.add("mt-3");
        this.loginForm.style.width = "25%";
        this.loginForm.addEventListener("submit", async event => {
            event.preventDefault();
            this.showSpinner(true);
            await Requests.login(this.loginForm.getUsername(), this.loginForm.getPassword(), onLogin);
            this.showSpinner(false);
        });
        this.appendChild(this.loginForm);

        this.spinner = new Spinner();
        this.spinner.classList.add("mt-3");
        this.appendChild(this.spinner);
        this.showSpinner(false);
    }

    showSpinner(value = false) {
        this.spinner.hidden = !value;
    }
}

customElements.define("login-page", LoginPage, {extends: "div"});