import { OffCanvas } from "../components/offCanvas.js";
import { SongsTable } from "../components/songsTable.js";

export class SongsPage extends HTMLDivElement {
    constructor() {
        super();

        this.songsTable = new SongsTable([{
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
        }], (row) => this.onSongClick(row));
        this.appendChild(this.songsTable);

        this.offCanvas = new OffCanvas("songDetailsOffCanvas", "Song details");
        this.appendChild(this.offCanvas);
    }

    onSongClick(row) {
        this.offCanvas.show();
    }
}

customElements.define("songs-page", SongsPage, { extends: "div" });