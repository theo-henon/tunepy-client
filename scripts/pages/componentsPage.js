export class ComponentsPage extends HTMLDivElement {
    constructor() {
        super();

        const dropDown = document.createElement("div");
        dropDown.classList.add("dropdown");

        const dropDownBtn = document.createElement("button");
        dropDownBtn.classList.add("btn", "btn-primary", "dropdown-toggle");
        dropDownBtn.type = "button";
        dropDownBtn.id = "dropDownBtn";
        dropDownBtn.innerText = "Select a component";
        dropDownBtn.setAttribute("data-bs-toggle", "dropdown");
        dropDownBtn.setAttribute("aria-expanded", "false");
        dropDown.appendChild(dropDownBtn);

        const dropDownMenu = document.createElement("ul");
        dropDownMenu.classList.add("dropdown-menu");
        dropDownMenu.setAttribute("aria-labelledby", "dropDownBtn");

        const dropDownItem1 = document.createElement("li");
        dropDownItem1.innerHTML = `<a class="dropdown-item"'>LoginForm</a>`;
        dropDownMenu.append(dropDownItem1);

        dropDown.appendChild(dropDownMenu);
        this.appendChild(dropDown);
    }
}

customElements.define("components-page", ComponentsPage, {extends: "div"});