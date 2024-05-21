export class SongsTable extends HTMLTableElement {
    constructor(songs = [], onRowClick) {
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
            <tbody>`;

        for (const song of songs) {
            body += `
                <tr>
                    <th scope="row">${song.id}</th>
                    <td>
                        <button class="btn" type="button"><i class="bi bi-play-fill"></i></button>
                    </td>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                    <td>${song.album}</td>
                    <td>${song.genre}</td>
                    <td>${Math.floor(song.duration / 60).toString().padStart(2, '0')}:${(song.duration % 60).toString().padStart(2, '0')}</td>
                    <td>${new Date(song.release_date).toLocaleDateString()}</td>
                </tr>`;
        }
        body += `</tbody>`;
        this.innerHTML = body;

        this.querySelectorAll("tbody tr").forEach(row => {
            row.addEventListener("click", _ => {
                row.children[1].children[0].addEventListener("click", event => event.stopPropagation());
                onRowClick(row);
            });
        });
    }
}

customElements.define("songs-table", SongsTable, { extends: "table" });