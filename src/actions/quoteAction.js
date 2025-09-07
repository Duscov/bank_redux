// Тип действия для Redux — ставим цитату
export const PUT_QUOTE = "PUT_QUOTE";

// Action creator — формирует объект действия с цитатой
export const putQuote = quote => ({
    type: PUT_QUOTE,
    payload: quote
})

// Thunk action — для асинхронного запроса
export const fetchQuote = () => {
    return dispatch => {
        // Сначала ставим "Pending..." пока идёт запрос
        dispatch(putQuote('Pending...'));

        // fetch запрашивает рандомную цитату из API
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json()) // преобразуем ответ в JSON
            .then(data => dispatch(putQuote(data.sentence))) // обновляем стейт цитатой
            .catch(() => dispatch(putQuote('Failed to fetch'))) // обработка ошибки
    }
}
