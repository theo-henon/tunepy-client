import {Navbar} from "./components/navbar.js";
import {ComponentsPage} from "./pages/componentsPage.js";
import {LoginPage} from "./pages/loginPage.js";
import {Request} from "./utils/request.js";
import {RegisterPage} from "./pages/registerPage.js";
import {ProfilePage} from "./pages/profilePage.js";

export class App {
    constructor() {
        this.app = document.getElementById('app');

        // Create all pages
        this.registerPage = new RegisterPage(async () => this.register());
        this.loginPage = new LoginPage(async () => this.login(), () => this.displayPage(this.registerPage));
        this.componentsPage = new ComponentsPage();
        this.profilePage = new ProfilePage(localStorage.getItem("username"));

        // Create navigation bar
        const username = localStorage.getItem("username");
        const accountItem = {
            text: username ? "My profile" : "Login",
            onclick: username ? _ => this.displayPage(this.profilePage) : _ => this.displayPage(this.loginPage)
        }
        const navItems =     [
            {text: "Songs", active: true},
            {text: "Playlists"},
            accountItem,
            {text: "Components (Debug)", onclick: () => this.displayPage(this.componentsPage)},
        ];
        this.navbar = new Navbar(navItems);
        this.app.appendChild(this.navbar);

        this.app.appendChild(new ComponentsPage());
    }

    displayPage(newPage) {
        const currentPage = this.app.children[1];
        if (currentPage)
            this.app.removeChild(currentPage);
        if (newPage)
            this.app.appendChild(newPage);
    }

    async login() {
        this.loginPage.showLoginStatus(true);
        const username = this.loginPage.loginForm.getUsername();
        const password = this.loginPage.loginForm.getPassword();

        if (!username || !password)
            return;

        const response = await Request.post("/users/login", {
            "username": username,
            "password": password
        });

        this.loginPage.showLoginStatus(false);
        if (!response)
            return;

        const responseBody = await response.json();
        if (response.ok) {
            localStorage.setItem("username", username);
            localStorage.setItem("access_token", responseBody.access_token);
        }
        alert(responseBody.msg);

        // TODO: Redirect to another page
        this.displayPage(null);
    }

    async register() {
        this.registerPage.showRegisterStatus(true);
        const username = this.registerPage.registerForm.getUsername();
        const password = this.registerPage.registerForm.getPassword();
        const passwordRepeat = this.registerPage.registerForm.getPasswordRepeat();

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

        this.registerPage.showRegisterStatus(false);
        if (!response)
            return;

        const responseBody = await response.json();
        if (response.ok)
            localStorage.setItem("access_token", responseBody.access_token);
        alert(responseBody.msg);

        // TODO: Redirect to another page
        this.displayPage(null);
    }
}