import {RegisterForm} from "../components/registerForm.js";

export class RegisterPage extends HTMLDivElement {
    constructor(registerAction) {
        super();
        this.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");

        this.registerForm = new RegisterForm();
        this.registerForm.style.width = "25%";
        this.registerForm.addEventListener("submit", event => {
            event.preventDefault();
            registerAction();
        })
        this.appendChild(this.registerForm);

        this.registerStatus = document.createElement("p");
        this.registerStatus.innerHTML = "Trying to create your account...";
        this.showRegisterStatus(false);
        this.appendChild(this.registerStatus);
    }

    showRegisterStatus(value = false) {
        this.registerStatus.hidden = !value;
    }
}

customElements.define("register-page", RegisterPage, {extends: "div"});