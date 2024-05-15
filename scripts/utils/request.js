export class Request {
    static API_URL = "http://localhost:5000";

    static async post(route, body) {
        return await fetch(`${Request.API_URL}/${route}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
}