export class FieldBlock extends HTMLDivElement {
    constructor(id, type="button", labelText="Form control") {
        super();
        this.className = "mb-3";

        // Create label element
        this.label = document.createElement("label");
        this.label.setAttribute("for", id);
        this.label.className = "form-label";
        this.label.innerHTML = labelText;
        this.appendChild(this.label);

        this.input = document.createElement("input");
        this.input.type = type;
        this.input.id = id;
        this.input.classList.add("form-control");
        this.appendChild(this.input);
    }

    getValue() {
        return this.input.value;
    }
}

customElements.define('field-block', FieldBlock, {extends: 'div'});
