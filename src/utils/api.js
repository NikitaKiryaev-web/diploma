class Api {
    constructor(options) {
        this._url = options.url;
    }

    _getResponse(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    //Авторизация
    async signin(login, password) {
        const res = await fetch(`${this._url}/reg`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": "Basic 0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YA=",
            },
            body: JSON.stringify({
                login,
                password
            })
        });
        return this._getResponse(res);
    };
}

const api = new Api({
    url: "http://localhost/Tests/hs/CentralService"
})

export default api;