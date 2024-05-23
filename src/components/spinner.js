export class Spinner extends HTMLDivElement {
    constructor(color = "primary", placeholder = "Loading...")  {
        super();
        this.classList.add("spinner-border", `text-${color}`);
        this.role = "status";

        const span = document.createElement("span");
        span.classList.add("visually-hidden");
        span.innerText = placeholder;
        this.appendChild(span);
    }
}

customElements.define("border-spinner", Spinner, {extends: "div"});
