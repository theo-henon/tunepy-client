import {Navbar} from "./components/navbar.js";
import {ComponentsPage} from "./pages/componentsPage.js";
import {LoginPage} from "./pages/loginPage.js";

export class App {
    constructor() {
        this.app = document.getElementById('app');

        // Create all pages
        this.loginPage = new LoginPage();
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
        this.app.appendChild(newPage);
    }
}