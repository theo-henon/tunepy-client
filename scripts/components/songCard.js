export class SongCard extends HTMLDivElement {
    constructor(song) {
        super();

        this.classList.add('card');
        this.innerHTML = `
        <div class="card-body">
            <h4 class="card-title">${song.title}</h4>
            <p class="card-text">
                <strong>ID:</strong> ${song.id}<br>
                <strong>Upload date:</strong> ${song.uploadDate.toString()}<br>
                <strong>Uploader:</strong> ${song.uploader}<br>
                <strong>Duration:</strong> ${song.id}<br>
                <strong>Filename:</strong> ${song.filename}
            </p>
        </div>
        `;
    }
}

customElements.define("song-card", SongCard, {extends: "div"});