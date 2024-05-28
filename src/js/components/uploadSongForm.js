export class UploadSongForm extends HTMLFormElement {
    constructor(onSubmit) {
        super();

        this.innerHTML = `
            <div class="form-group mb-2">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" name="title" placeholder="Enter song title">
            </div>
            <div class="form-group mb-2">
                <label for="artist">Artist</label>
                <input type="text" class="form-control" id="artist" name="artist" placeholder="Enter artist name">
            </div>
            <div class="form-group mb-2">
                <label for="album">Album</label>
                <input type="text" class="form-control" id="album" name="album" placeholder="Enter album name">
            </div>
            <div class="form-group mb-2">
                <label for="genre">Genre</label>
                <input type="text" class="form-control" id="genre" name="genre" placeholder="Enter genre">
            </div>
            <div class="form-group mb-2">
                <label for="releaseDate">Release Date</label>
                <input type="date" class="form-control" id="releaseDate" name="releaseDate">
            </div>
            <div class="mb-2">
                <label for="formFile" class="form-label">Select music file<span class="text-danger">*</span></label>
                <input class="form-control" type="file" id="" accept="audio/mp3" required>
            </div>
            <button type="submit" class="btn btn-primary mb-2"><i class="bi bi-cloud-arrow-up"></i>Upload</button>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 25%"></div>
            </div>
        `;

        this.addEventListener("submit", event => {
            event.preventDefault();
            onSubmit(this);
        });
    }
}

customElements.define("upload-song-form", UploadSongForm, {extends: "form"});