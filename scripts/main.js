import {LoginForm} from "./loginForm.js";
import {RegisterForm} from "./registerForm.js";


let loginForm = new LoginForm()
let registerForm = new RegisterForm()

document.querySelector("#app").appendChild(registerForm);