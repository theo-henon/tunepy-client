import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';

export class SongsTable extends HTMLTableElement {
    constructor(songs = []) {
        super();
        this.classList.add("table", "table-hover");

        let body = `
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Actions</th>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Release date</th>
                </tr>
            </thead>
            <tbody>`
        for (const song of songs)
            body += `
                 <tr>
                    <th scope="row">${song.id}</th>
                    <td>
                        <button class="btn" type="button"><i class="bi bi-play-fill"></i></button>
                    </td>
                    <td>${song.title}</td>
                    <td>${song.title}</td>
                    <td>${song.album}</td>
                    <td>${song.genre}</td>
                    <td>${Math.floor(song.duration /60).toString().padStart(2, '0')}:${(song.duration % 60).toString().padStart(2, '0')}</td>
                    <td>${song.release_date.toLocaleDateString()}</td>
                </tr>
                `;
        body += `
            </tbody>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="songDetailsOffcanvas" aria-labelledby="songDetailsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="songDetailsLabel">Song Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                </div>
            </div>
            `;
        this.innerHTML = body;

        this.querySelectorAll('tbody tr').forEach(row => {
            row.addEventListener('click', (event) => {
                this.onRowClick(event, row);
            });
        });
    }

    // Méthode pour gérer le clic sur une ligne
    onRowClick(event, row) {
        const offcanvas = document.getElementById("songDetailsOffcanvas");
        const bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvas);
        bootstrapOffcanvas.show();
    }
}

customElements.define("songs-table", SongsTable, {extends: "table"});