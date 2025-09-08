// Импортируем action creator для обновления цитаты
import { putQuote } from "../quote/quoteSlice.js";

// Асинхронный thunk action для получения цитаты
export const fetchQuote = () => {
    // thunk возвращает функцию с доступом к dispatch
    return dispatch => {
        // Сразу ставим "Pending..." в state, чтобы UI знал, что идёт загрузка
        dispatch(putQuote('Pending...'));

        // fetch делает GET-запрос к API цитат Game of Thrones
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())         // парсим JSON из ответа
            .then(data => dispatch(putQuote(data.sentence))) // диспатчим новую цитату
            .catch(() => dispatch(putQuote('Failed to fetch'))) // обработка ошибок
    }
}
