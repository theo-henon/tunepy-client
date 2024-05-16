import {LoginForm} from "./components/loginForm.js";
import {RegisterForm} from "./components/registerForm.js";
import {Navbar} from "./components/navbar.js";


let loginForm = new LoginForm()
let registerForm = new RegisterForm()
let navbar = new Navbar();

export const app = document.querySelector("#app");
app.appendChild(navbar);
