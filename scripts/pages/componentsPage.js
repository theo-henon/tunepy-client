import {DropDown} from "../components/dropDown.js";
import {LoginForm} from "../components/loginForm.js";
import {RegisterForm} from "../components/registerForm.js";
import { SongsTable } from "../components/songsTable.js";
import {PlayControls} from "../components/playControls.js";

export class ComponentsPage extends HTMLDivElement {
    constructor() {
        super();

        this.componentDropDown = new DropDown("componentDropDown", "Select a component", [
            {
                text: "LoginForm",
                onclick: () => this.displayComponent(new LoginForm())
            },
            {
                text: "RegisterForm",
                onclick: () => this.displayComponent(new RegisterForm())
            },
            {
                text: "SongsTable",
                onclick: () => this.displayComponent(new SongsTable())
            },
            {
                text: "PlayControls",
                onclick: () => this.displayComponent(new PlayControls())
            }
        ]);
        this.appendChild(this.componentDropDown);
    }

    displayComponent(component) {
        if (this.children[1])
            this.removeChild(this.children[1]);
        this.appendChild(component);
    }
}

customElements.define("components-page", ComponentsPage, {extends: "div"});