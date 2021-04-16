class CookieService {

    getCookie() {
        return fetch('https://springcloudapi.accesstpm.com', {
            mode: "cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Origin": "https://springcloud.accesstpm.com"
            },
        }).then(response => response.json())
    }
}

export default new CookieService()