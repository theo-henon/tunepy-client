export class ProfilePage extends HTMLDivElement {
    constructor(username) {
        super();
        this.username = username;

        this.innerHTML = `<p>${username}</p>`
    }
}

customElements.define("profile-page", ProfilePage, {extends: "div"});