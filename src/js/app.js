import {Navbar} from "./components/navbar.js";
import {LoginPage} from "./pages/loginPage.js";
import {Requests} from "./utils/requests.js";
import {RegisterPage} from "./pages/registerPage.js";
import {ProfilePage} from "./pages/profilePage.js";
import {SongsPage} from "./pages/songsPage.js";
import {ServerSelectionPage} from "./pages/serverSelectionPage.js";
import {ServersList} from "./utils/serversList.js";

export class App {
    constructor() {
        this.app = document.getElementById('app');

        // Get servers list
        this.serversList = ServersList.fromLocalStorage();

        // Create all pages
        this.registerPage = new RegisterPage(() => this.displayPage(this.loginPage));
        this.loginPage = new LoginPage(() => this.displayPage(this.songsPage), () => this.displayPage(this.registerPage));
        this.profilePage = new ProfilePage(localStorage.getItem("username"));
        this.songsPage = new SongsPage();
        this.serverSelectionPage = new ServerSelectionPage(this.serversList, server => this.joinServer(server), server => this.editServer(server), server => this.removeServer(server));

        // Create navigation bar
        this.navbar = new Navbar(link => this.onNavbarItemClick(link));
        this.app.appendChild(this.navbar);

        if (!this.selectedServer())
            this.displayPage(this.serverSelectionPage);
        else {
            Requests.init(this.selectedServer());
            this.displayPage(this.songsPage);
        }
    }

    displayPage(newPage, requireSelectServer = false) {
        if (requireSelectServer && !this.selectedServer()) {
            alert("Please select a server to display this content.");
            this.displayPage(this.serverSelectionPage);
            return;
        }

        const currentPage = this.app.children[1];
        if (currentPage)
            this.app.removeChild(currentPage);
        if (newPage)
            this.app.appendChild(newPage);
    }

    selectedServer() {
        return this.serversList.selected();
    }

    onNavbarItemClick(link) {
        if (link.id === "songsNavbarItem")
            this.displayPage(this.songsPage, true);
        else if (link.id === "accountNavbarItem")
            this.displayPage(this.loginPage, true);
        else if (link.id === "serversNavbarItem")
            this.displayPage(this.serverSelectionPage);
    }

    joinServer(server) {
        this.serversList.select(server.name);
        Requests.init(server);
        this.displayPage(this.songsPage);
    }

    editServer(server) {
        alert(`Editing server '${server.name}' at ${server.address}`);
    }

    removeServer(server) {
        if (confirm(`The server '${server.name}' will be removed.`))
            this.serverSelectionPage.removeServer(server);
    }
}