import { SongDetailsOffCanvas } from "../components/songDetailsOffCanvas.js";
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

        this.songDetails = new SongDetailsOffCanvas("songDetailsOffCanvas", "Song details");
        this.appendChild(this.songDetails);
    }

    onSongClick(row) {
        this.songDetails.show({
            title: row.children[2].innerText,
            artist: row.children[3].innerText,
            album: row.children[4].innerText,
            genre: row.children[5].innerText,
            duration: row.children[6].innerText,
            releaseDate: row.children[7].innerText
        });
    }
}

customElements.define("songs-page", SongsPage, { extends: "div" });