import { OffCanvas } from "./offCanvas";

export class SongDetailsOffCanvas extends OffCanvas {
    constructor() {
        super("songDetailsOffCanvas", "Song details");
    }

    show(song) {
        this.body.innerHTML = `
            <p class="mb-3">
                <strong>Title: </strong>${song.title}<br>
                <strong>Artist: </strong>${song.artist}<br>
                <strong>Album: </strong>${song.album}<br>
                <strong>Genre: </strong>${song.genre}<br>
                <strong>Duration: </strong>${song.duration}<br>
                <strong>Release date: </strong>${song.releaseDate}
            </p>
            <div>
                <button class="btn btn-primary" type="button">
                    <i class="bi bi-pencil"></i>Edit
                </button>
                <button class="btn btn-danger" type="button">
                    <i class="bi bi-trash"></i>Remove
                </button>
                <button class="btn btn-dark" type="button">
                <i class="bi bi-cloud-download"></i>Download
            </button>
            </div>
        `
        super.show();
    }
}

customElements.define("song-details", SongDetailsOffCanvas, {extends: "div"})