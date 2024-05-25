import {Navbar} from "./components/navbar.js";
import {LoginPage} from "./pages/loginPage.js";
import {Request} from "./utils/request.js";
import {RegisterPage} from "./pages/registerPage.js";
import {ProfilePage} from "./pages/profilePage.js";
import {SongsPage} from "./pages/songsPage.js";
import {ServerSelectionPage} from "./pages/serverSelectionPage.js";

export class App {
    constructor() {
        this.app = document.getElementById('app');

        // Create all pages
        this.registerPage = new RegisterPage(async () => this.register());
        this.loginPage = new LoginPage(async () => this.login(), () => this.displayPage(this.registerPage));
        this.profilePage = new ProfilePage(localStorage.getItem("username"));
        this.songsPage = new SongsPage();
        this.serverSelectionPage = new ServerSelectionPage([{
            name: "Main server",
            address: "localhost:8080"
        }, {
            name: "Secondary server",
            address: "localhost:8081"
        }], this.joinServer, this.editServer, this.removeServer);

        // Create navigation bar
        this.navbar = new Navbar(link => this.onNavbarItemClick(link));
        this.app.appendChild(this.navbar);

        this.app.appendChild(this.serverSelectionPage);
    }

    displayPage(newPage) {
        const currentPage = this.app.children[1];
        if (currentPage)
            this.app.removeChild(currentPage);
        if (newPage)
            this.app.appendChild(newPage);
    }

    onNavbarItemClick(link) {
        if (link.id === "songsNavbarItem")
            this.displayPage(this.songsPage);
        else if (link.id === "accountNavbarItem")
            this.displayPage(this.loginPage);
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

    joinServer(server) {
        alert(`Joining server '${server.name}' at ${server.address}`);
    }

    editServer(server) {
        alert(`Editing server '${server.name}' at ${server.address}`);
    }

    removeServer(server) {
        alert(`Removing server '${server.name}' at ${server.address}`);
    }
}