import { SongsTable } from "../components/songsTable.js";

export class SongsPage extends HTMLDivElement {
    constructor() {
        super();

        this.appendChild(new SongsTable());
    }
}

customElements.define("songs-page", SongsPage, {extends: "div"});