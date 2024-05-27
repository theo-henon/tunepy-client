export class ServersList {
    constructor(list = []) {
        this.list = list;
    }

    add(name, address) {
        let server = { name: name, address: address };
        if (this.list.some(s => s.name === server.name && s.address === server.address))
            throw new Error(`Server already exists: ${server.name}`);
        else
            this.list.push(server);
    }

    edit(oldName, newDetails) {
        const index = this.list.findIndex(server => server.name === oldName);
        if (index !== -1)
            this.list[index] = { ...this.list[index], ...newDetails };
        else
            throw new Error(`Server not found: ${oldName}`);
    }

    remove(name) {
        const index = this.list.findIndex(server => server.name === name);
        if (index !== -1)
            this.list.splice(index, 1);
    }

    static fromLocalStorage() {
        let serversList = localStorage.getItem("serversList");
        if (serversList)
                return new ServersList(JSON.parse(serversList));
        return new ServersList();
    }

    toLocalStorage() {
        localStorage.setItem("serversList", JSON.stringify(this.list));
    }
}