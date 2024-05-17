import {LoginForm} from "./components/loginForm.js";
import {RegisterForm} from "./components/registerForm.js";
import {Navbar} from "./components/navbar.js";


let loginForm = new LoginForm()
let registerForm = new RegisterForm()

const navItems = [
    {text: "Home", active: true},
    {text: "Songs"},
    {text: "Playlists"},
    {
        text: "Login", onclick: () => {
            const page = app.children[1];
            if (page)
                app.removeChild(page);
            app.appendChild(new LoginForm());
        }
    },
];
let navbar = new Navbar(navItems);

export const app = document.querySelector("#app");
app.appendChild(navbar);
