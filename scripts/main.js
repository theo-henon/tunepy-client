import {LoginForm} from "./components/loginForm.js";
import {RegisterForm} from "./components/registerForm.js";


let loginForm = new LoginForm()
let registerForm = new RegisterForm()

document.querySelector("#app").appendChild(loginForm);