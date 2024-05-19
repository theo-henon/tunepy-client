import {SongCard} from "../components/songCard.js";

export class SongsPage extends HTMLDivElement {
    constructor() {
        super();

        this.appendChild(new SongCard({
            id: 1,
            title: "Example song title",
            uploadDate: new Date(),
            uploader: "client",
            duration: 0,
            filename: "song.mp3"
        }));
    }
}

customElements.define("songs-page", SongsPage, {extends: "div"});