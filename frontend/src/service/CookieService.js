class CookieService {

    getCookie() {
        return fetch('http://localhost:8080', {
            mode: "cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
        }).then(response => response.json())
    }
}

export default new CookieService()