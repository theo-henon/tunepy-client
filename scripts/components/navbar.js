import logo from "../../public/vite.svg";

export class Navbar extends HTMLElement {
    constructor() {
        super();
        this.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light");

        this.container = document.createElement("div");
        this.container.classList.add("container-fluid");

        this.createBrand();
        this.createToggler();
        this.createCollapse();

        this.nav = document.createElement("ul");
        this.nav.classList.add("navbar-nav");

        const navItems = [
            {text: "Home", active: true},
            {text: "Songs", onclick: () => alert("Display songs")},
            {text: "Playlists"},
            {text: "Account"},
        ];

        navItems.forEach(item => this.addItem(item));
        this.collapse.appendChild(this.nav);
        this.container.appendChild(this.collapse);

        this.appendChild(this.container);
    }

    createBrand() {
        const img = document.createElement("img");
        img.src = logo;
        img.alt = "Logo";
        img.style.width = "30px";
        img.style.height = "30px";
        img.classList.add("me-2");
        this.container.appendChild(img);

        this.brand = document.createElement("a");
        this.brand.classList.add("navbar-brand");
        this.brand.innerText = "TunePy";
        this.container.appendChild(this.brand);
    }

    createToggler() {
        this.toggler = document.createElement("button");
        this.toggler.classList.add("navbar-toggler");
        this.toggler.type = "button";
        this.toggler.setAttribute("data-bs-toggle", "collapse");
        this.toggler.setAttribute("data-bs-target", "#navbarNav");
        this.toggler.setAttribute("aria-controls", "navbarNav");
        this.toggler.setAttribute("aria-expanded", "false");
        this.toggler.setAttribute("aria-label", "Toggle navigation");
        this.toggler.innerHTML = '<span class="navbar-toggler-icon"></span>';
        this.container.appendChild(this.toggler);
    }

    createCollapse() {
        this.collapse = document.createElement("div");
        this.collapse.classList.add("collapse", "navbar-collapse");
        this.collapse.id = "navbarNav";
    }

    addItem(item) {
        const navItem = document.createElement("li");
        navItem.classList.add("nav-item");


        const navLink = document.createElement("a");
        navLink.classList.add("nav-link");

        if (item.active)
            navLink.classList.add("active");

        if (item.disabled) {
            navLink.classList.add("disabled");
            navLink.setAttribute("aria-disabled", "true");
        }

        if (item.onclick)
            navLink.onclick = item.onclick;

        navLink.innerText = item.text;
        navLink.href = "#"

        navItem.appendChild(navLink);
        this.nav.appendChild(navItem);
    }
}

// Define the custom element
customElements.define('custom-navbar', Navbar);
