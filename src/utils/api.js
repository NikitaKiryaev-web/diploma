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
        const res = await fetch(`${this._url}/CentralService/reg`, {
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

    //Получить доступные тесты
    async getTests(login) {
        const res = await fetch(`${this._url}/QuestionsAndAnswers/GetTestList`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": "Basic 0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YA=",
            },
            body: JSON.stringify({
                "studentID": login
            })
        });
        return this._getResponse(res);
    };

    //Получить вопросы и ответы по id теста
    async getQuestionsAndAnswers(id) {
        const res = await fetch(`${this._url}/QuestionsAndAnswers/GetQuestionsAndAnswers/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": "Basic 0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YA=",
            },
        });
        return this._getResponse(res);
    };

    async getResults(id, answers) {
        const res = await fetch(`${this._url}/QuestionsAndAnswers/final/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": "Basic 0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YA=",
            },
            body: JSON.stringify({
                "answers": answers
            })
        });
        return this._getResponse(res);
    };
}

const api = new Api({
    url: "https://kpk.1c.ru/testing_system/hs"
})

export default api;