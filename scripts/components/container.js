export class Container extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add("container");
    }

    addRow(element) {
        const row = document.createElement("div");
        row.classList.add("row");
        if (element instanceof String)
            row.innerText = element;
        else if (element instanceof Array)
            for (let elt of element)
                row.appendChild(elt);
        else
            row.appendChild(element);

        this.appendChild(row);
    }

    static createColumn(element) {
        const col = document.createElement("div");
        col.classList.add("col");
        if (element instanceof String)
            col.innerText = element;
        else
            col.appendChild(element);
        return col;
    }
}

customElements.define('bootstrap-container', Container, {extends: 'div'});
