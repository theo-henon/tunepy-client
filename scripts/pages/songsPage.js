import { SongDetailsOffCanvas } from "../components/songDetailsOffCanvas.js";
import { SongsTable } from "../components/songsTable.js";

export class SongsPage extends HTMLDivElement {
    constructor() {
        super();
        
        this.toolbar = document.createElement("div");
        this.toolbar.classList.add("container-fluid", "mt-3");
        this.toolbar.innerHTML = `
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="Upload group">
                    <button type="button" class="btn btn-primary">
                        <i class="bi bi-cloud-arrow-up"></i>
                        Upload new song
                    </button>
                </div>
                <div class="btn-group" role="group" aria-label="Display limit group">
                    <select class="form-select" aria-label="Display limit">
                        <option selected>Show 10</option>
                        <option value="20">Show 20</option>
                        <option value="50">Show 50</option>
                        <option value="100">Show 100</option>
                    </select>
                </div>
            </div>
        `;
        this.appendChild(this.toolbar);

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

        this.pagination = document.createElement("nav");
        this.pagination.classList.add("d-flex", "align-items-center", "justify-content-center");
        this.pagination.setAttribute("aria-label", "Page navigation");
        this.pagination.innerHTML = `
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item active">
                    <a class="page-link" href="#">1</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">...</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">10</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        `;
        this.appendChild(this.pagination);
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