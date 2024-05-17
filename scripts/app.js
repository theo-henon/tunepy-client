import {LoginForm} from "./components/loginForm.js";
import {Navbar} from "./components/navbar.js";
import {ComponentsPage} from "./pages/componentsPage.js";

export class App {
    constructor() {
        this.app = document.getElementById('app');

        // Create navigation bar
        const navItems = [
            {text: "Home", active: true},
            {text: "Songs"},
            {text: "Playlists"},
            {
                text: "Login", onclick: () => {
                    const page = this.app.children[1];
                    if (page)
                        this.app.removeChild(page);
                    this.app.appendChild(new LoginForm());
                }
            },
        ];
        this.navbar = new Navbar(navItems);
        this.app.appendChild(this.navbar);

        this.app.appendChild(new ComponentsPage());
    }
}