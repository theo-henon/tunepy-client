import { Spinner } from "../components/spinner.js";
import { RegisterForm } from "../components/registerForm.js";

export class RegisterPage extends HTMLDivElement {
    constructor(registerAction) {
        super();
        this.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");

        this.registerForm = new RegisterForm();
        this.registerForm.classList.add("mt-3");
        this.registerForm.style.width = "25%";
        this.registerForm.addEventListener("submit", event => {
            event.preventDefault();
            registerAction();
        })
        this.appendChild(this.registerForm);

        this.spinner = new Spinner();
        this.spinner.classList.add("mt-3");
        this.showSpinner(false);
        this.appendChild(this.spinner);
    }

    showSpinner(value = false) {
        this.spinner.hidden = !value;
    }
}

customElements.define("register-page", RegisterPage, { extends: "div" });