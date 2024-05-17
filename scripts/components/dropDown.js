export class DropDown extends HTMLDivElement {
    constructor(id, text, items = [], subclass = "btn-primary") {
        super();
        this.className = 'dropdown';

        this.button = document.createElement('button');
        this.button.classList.add("btn", subclass, "dropdown-toggle");
        this.button.type = "button";
        this.button.id = id;
        this.button.setAttribute("data-bs-toggle", "dropdown");
        this.button.setAttribute("aria-expanded", "false");
        this.button.innerText = text;
        this.appendChild(this.button);

        this.menu = document.createElement("ul");
        this.menu.classList.add("dropdown-menu");
        this.menu.setAttribute("aria-labelledby", id);
        this.appendChild(this.menu);

        for (const item of items) {
            const menuItem = document.createElement("li");
            const itemLink = document.createElement("a");
            itemLink.classList.add("dropdown-item");
            itemLink.innerText = item.text;
            if (item.onclick)
                itemLink.addEventListener("click", item.onclick);
            menuItem.appendChild(itemLink);
            this.menu.append(menuItem);
        }
    }
}

customElements.define("drop-down", DropDown, {extends: "div"});