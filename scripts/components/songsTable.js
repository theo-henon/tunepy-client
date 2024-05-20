import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';

export class SongsTable extends HTMLTableElement {
    constructor() {
        super();
        this.classList.add("table", "table-hover");
        this.innerHTML = `
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
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        <button class="btn" type="button"><i class="bi bi-play-fill"></i></button>
                    </td>
                    <td>Example song</td>
                    <td>Example artist</td>
                    <td>Example album</td>
                    <td>Example genre</td>
                    <td>00:00</td>
                    <td>${new Date().toLocaleDateString()}</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>
                        <button class="btn" type="button"><i class="bi bi-play-fill"></i></button>
                    </td>
                    <td>Example song</td>
                    <td>Example artist</td>
                    <td>Example album</td>
                    <td>Example genre</td>
                    <td>00:00</td>
                    <td>${new Date().toLocaleDateString()}</td>
                </tr>
            </tbody>

            <!-- Offcanvas -->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="songDetailsOffcanvas" aria-labelledby="songDetailsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="songDetailsLabel">Song Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <!-- Content will be dynamically filled -->
                </div>
            </div>
        `;

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

customElements.define("songs-table", SongsTable, { extends: "table" });