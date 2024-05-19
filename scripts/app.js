import {Navbar} from "./components/navbar.js";
import {ComponentsPage} from "./pages/componentsPage.js";
import {LoginPage} from "./pages/loginPage.js";
import {Request} from "./utils/request.js";

export class App {
    constructor() {
        this.app = document.getElementById('app');

        // Create all pages
        this.loginPage = new LoginPage(async () => this.login());
        this.componentsPage = new ComponentsPage();

        // Create navigation bar
        const navItems = [
            {text: "Songs", active: true},
            {text: "Playlists"},
            {text: "Login", onclick: () => this.displayPage(this.loginPage)},
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
}