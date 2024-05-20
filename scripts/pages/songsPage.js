import { SongsTable } from "../components/songsTable.js";

export class SongsPage extends HTMLDivElement {
    constructor() {
        super();

        this.appendChild(new SongsTable([{
            id: 1,
            title: "Example song",
            artist: "Example artist",
            album: "Example album",
            genre: "Example genre",
            duration: 120,
            release_date: new Date()
        }, {
            id: 2,
            title: "Example song",
            artist: "Example artist",
            album: "Example album",
            genre: "Example genre",
            duration: 185,
            release_date: new Date()
        }]));
    }
}

customElements.define("songs-page", SongsPage, {extends: "div"});