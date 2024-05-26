import {ModalDialog} from "./modalDialog.js";
import {UploadSongForm} from "./uploadSongForm.js";

export class UploadSongModal extends ModalDialog {
    constructor(id, onUpload) {
        const form = new UploadSongForm(onUpload);

        super(id, "Upload song", form, null);
    }
}

customElements.define("upload-song-modal", UploadSongModal, {extends: "div"});