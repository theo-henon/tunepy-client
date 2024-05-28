export class Requests {
    static server = null;

    static init() {
        Requests.server = JSON.parse(sessionStorage.getItem("selectedServer"));
    }

    static async post(route, body) {
        try {
            return await fetch(`http://${Requests.server.address}${route}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
        } catch (e) {
            alert(`Cannot connect to the server '${Requests.server.address} (${Requests.server.name})'. Make sure that the server is running.`);
            return null;
        }
    }

    static async login(username, password, onSuccess) {
        if (!username || !password)
            return;

        const response = await Requests.post("/users/login", {
            "username": username,
            "password": password
        });

        if (!response)
            return;

        const responseBody = await response.json();
        if (response.ok)
            onSuccess();
        else
            alert(responseBody.msg);
    }


    static async register(username, password, passwordRepeat, onSuccess) {
        if (!username || !password || !passwordRepeat)
            return;

        if (password !== passwordRepeat) {
            alert("Passwords don't match!");
            return;
        }

        const response = await this.post("/users/register", {
            "username": username,
            "password": password
        });

        if (!response)
            return;

        const responseBody = await response.json();
        if (response.ok)
            onSuccess();
        else
            alert(responseBody.msg);
    }
}