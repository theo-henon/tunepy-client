import { Popover } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class PlayControls extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add("fixed-bottom", "bg-light", "p-3", "d-flex", "flex-row", "row")

        this.innerHTML = `
            <div class="row align-items-center">               
                <div class="col-auto me-3">
                    <div class="btn-group d-inline-flex" role="group" aria-label="Control buttons">
                        <button type="button" class="btn btn-outline-primary"><i class="bi bi-skip-start"></i></button>
                        <button type="button" class="btn btn-outline-primary"><i class="bi bi-play-circle"></i></button>
                        <button type="button" class="btn btn-outline-primary"><i class="bi bi-skip-end"></i></button>
                    </div>
                </div>

               <div class="col-auto me-3">
                    <img class="w-100" src="/vite.svg" alt="Song picture" width="50" height="50">
               </div>
             
                <div class="col me-3" style="max-width: 200px">
                    <h5 class="mb-0">Example song</h5>
                    <p class="mb-0">
                        <small class="text-muted">Example album</small><br>
                        <small class="text-muted">Example artist</small>
                    </p>
                </div>
                
                <div class="col me-3">
                    <div class="d-flex align-items-center">
                        <input type="range" class="form-range  me-2" min="0" max="100">
                        <p class="mb-0"><small class="text-muted">00:00/00:00</small></p>
                    </div>
                </div>
                
                <div class="col-auto">
                      <button id="volumeBtn" class="btn btn-outline-primary" data-bs-toggle="popover" data-bs-placement="top" data-bs-html="true" data-bs-content="<button>test</button>">
                          <i class="bi bi-volume-up"></i>
                      </button>
                </div>
            </div>
        `;
    }
}

customElements.define("play-controls", PlayControls, {extends: "div"});