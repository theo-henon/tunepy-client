export class FieldBlock extends HTMLDivElement {
    constructor(id, type="button", labelText="Form control", required = true) {
        super();
        this.classList.add("mb-3", "w-100");

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
        this.input.required = required;
        this.appendChild(this.input);
    }

    getValue() {
        return this.input.value;
    }
}

customElements.define('field-block', FieldBlock, {extends: 'div'});
