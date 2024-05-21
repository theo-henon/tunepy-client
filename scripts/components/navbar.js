import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';

export class Navbar extends HTMLElement {
    constructor(clickEvent) {
        super();
        this.classList.add("navbar", "navbar-expand-lg", "bg-body-tertiary")

        this.innerHTML = `
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/vite.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                    TunePy
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" id="songsNavbarItem">
                                <i class="bi bi-music-note-beamed"></i>
                                Songs
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="playlistsNavbarItem" data-bs-toggle="tooltip" data-bs-title="This feature is not handled yet.">
                                <i class="bi bi-music-note-list"></i>
                                Playlists
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="componentsNavbarItem">
                                <i class="bi bi-bug"></i>
                                Components (debug)
                            </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#" id="accountNavbarItem">
                                <i class="bi bi-person-circle"></i>
                                Account
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        `;

        this.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
            this.setActiveItem(link);
            clickEvent(link);
        }));
    }

    setActiveItem(item) {
        this.querySelectorAll(".nav-link").forEach(link => {
            if (item === link && !link.classList.contains("active")) {
                link.classList.add("active");
            } else if (item !== link)
                link.classList.remove("active");
        });
    }
}

// Define the custom element
customElements.define('custom-navbar', Navbar, { extends: "nav" });