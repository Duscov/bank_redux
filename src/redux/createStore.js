// Функция для создания store (похожего на Redux store)
export const createStore = (reducer, initionalState) => {
    // Храним текущее состояние
    let state = initionalState;

    // Массив подписчиков — функции, которые будут вызваны при изменении state
    let subscribers = [];

    // Получаем текущее состояние
    const getState = () => state;

    // Диспатчим action — вызываем редьюсер, обновляем state, оповещаем подписчиков
    const dispatch = action => {
        state = reducer(state, action); // редьюсер возвращает новое состояние
        subscribers.forEach(subscriber => subscriber()); // уведомляем всех подписчиков
    }

    // Подписка на изменения state
    const subscribe = listener => {
        subscribers.push(listener); // добавляем функцию в массив подписчиков
        // Возвращаем функцию для отписки
        return () => subscribers = subscribers.filter(subscribe => subscribe !== listener);
    }

    // Возвращаем объект с API store
    return { getState, dispatch, subscribe };
}
