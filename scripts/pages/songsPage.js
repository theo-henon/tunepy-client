import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';

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
        }], (row) => this.onRowClick(row));
        this.appendChild(this.songsTable);

        /*         this.innerHTML += `
                <div class="offcanvas offcanvas-start" tabindex="-1" id="songDetailsOffcanvas" aria-labelledby="songDetailsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="songDetailsLabel">Song Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    </div>
                </div>
                ` */
    }

    onRowClick(row) {
        console.log(row);
        const offcanvas = document.getElementById("songDetailsOffcanvas");
        if (offcanvas) {
            const bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvas);
            bootstrapOffcanvas.show();
        }
    }
}

customElements.define("songs-page", SongsPage, { extends: "div" });