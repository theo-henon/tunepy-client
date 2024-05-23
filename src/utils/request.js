export class Request {
    static API_URL = "http://localhost:5000";

    static async post(route, body) {
        try {
            return await fetch(`${Request.API_URL}${route}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
        } catch (e) {
            alert("Cannot connect to the server. Make sure that the server is running.");
            return null;
        }
    }
}